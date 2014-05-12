nodemailer = require "nodemailer"
express = require "express"

smtpTransport = nodemailer.createTransport "SMTP",
  host: "mail.spectrumcoding.com"
  secureConnection: false
  port: 25
  auth:
    user: "info@adefy.com"
    pass: "VCB27eGFoAQBqdfF"

# res is optional
sendEmail = (emails, res) ->

  emailBody = "Recent contact requests:"

  for email in emails
    emailBody += "\n  - #{email}"

  emailBody += "\n\n sent at #{new Date().toLocaleDateString()}"

  smtpTransport.sendMail
    from: "Adefy Contact Bouncher <info@adefy.com>"
    to: "cris@adefy.com, manu@adefy.com, thomas@adefy.com"
    subject: "New Adefy Contact Request"
    text: emailBody
    html: emailBody.split("\n").join "<br>"
  , (error, response) ->
    if error
      console.log error
      res.send 500 if res
    else
      res.send 200 if res

app = express()

# Limit emails to one every 30 minutes, so we don't spam everyone
delayBetweenSends = 30 * 60000
lastBatchSent = Date.now()
pendingEmails = []

# Force a send every delay
setInterval ->
  sendEmail pendingEmails if pendingEmails.length > 0
  pendingEmails = []
, delayBetweenSends

app.get "/bounce_email", (req, res) ->
  return res.send 403 unless req.query.email

  pendingEmails.push decodeURIComponent req.query.email
  res.header "Access-Control-Allow-Origin", "*"

  if Date.now() - lastBatchSent > delayBetweenSends
    lastBatchSent = Date.now()
    sendEmail pendingEmails, res
    pendingEmails = []
  else
    res.send 200

app.listen 3000
