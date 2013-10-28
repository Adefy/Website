var chartsVisible = false;
$(document).ready(function(){

  // Invite
  $("#request-invite").click(function(e) {
    e.preventDefault();

    $.get("https://app.adefy.eu/logic/invite/add?key=WtwkqLBTIMwslKnc&email=" + $("#invite").val());
    $("#invite").attr("disabled", "disabled");
    $("#request-invite").attr("disabled", "disabled");
    $("#request-invite").text("Request sent!");

    setTimeout(function(){
      $("#invite").val("");
      $("#invite").removeAttr("disabled");
      $("#request-invite").removeAttr("disabled");
      $("#request-invite").text("Request an Invite!");
    }, 5000);
  });

  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).innerHeight() - 350 > $("#metrics").offset().top && !chartsVisible) {
      new Chart($("#metrics1")[0].getContext("2d")).Doughnut([
        {
          value: 87,
          color: "#5dd34b"
        }, {
          value: 42,
          color: "#3a99c2"
        }, {
          value: 63,
          color: "#D34B4B"
        }
      ]);
      chartsVisible = true;
    }
  });
});

// Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-37947508-7', 'adefy.eu');
ga('send', 'pageview');
