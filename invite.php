<?php

if($_GET["invite"]) {
  mail("mircea.mihalache94@gmail.com", "Adefy Invite Request", wordwrap("An invite has been requested for " . $_GET["invite"], 70, "\r\n"));
}