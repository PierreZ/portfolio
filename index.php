<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width">

  <link rel="stylesheet" href="css/bootstrap.css">
  <style>
    body {
      padding-top: 50px;
      padding-bottom: 20px;
    }
  </style>
  <link rel="stylesheet" href="css/main.css">

  <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
</head>
<body>
<!--[if lt IE 7]>
<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
<![endif]-->

<?php
require("elements/menu.php");
?> 

<div class="row welcome">
  <h1>Pierre Zemb<br/>
    <small>
      <span class="txt-rotate biggest" data-period="2000" data-rotate='[ "French Engineer student", "Software developer", "But also Web when needed", "Pierre Who ??" ]'></span>
    </small>
  </h1>
    <div class="social">
        <a  href="http://www.facebook.com/pierre.zemb"><img class="socials_icons" src="img/facebook.png" alt="Facebook" /></a>
        <a href="http://twitter.com/PierreZ"><img class="socials_icons" src="img/twitter.png" alt="Twitter" /></a>
        <a href="http://plus.google.com/108156342712745521162"><img class="socials_icons" src="img/googleplus-revised.png" alt="Google+" /></a>
        <a href="http://www.flickr.com/photos/34207436@N03/sets/"><img class="socials_icons" src="img/flickr.png" alt="Flickr" /></a>
        <a href="http://www.linkedin.com/pub/pierre-zemb/5b/412/800"><img class="socials_icons" src="img/linkedin.png" alt="Youtube" /></a>
        <a href="https://github.com/PierreZ"><img class="socials_icons"  src="img/github.png" alt="git" /></a>
    </div>
  </div>


<div class="container">
  <!-- Example row of columns -->
  <div class="row">
    <h2 class="text-center">About Me</h2>
    <div class="google_color text-center"></div>
    <div class="col-md-3">
      <img class="profile" src="img/myself.png">
    </div>
    <div class="col-md-9">
    <p> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    </div>
  </div>
</div>
  <hr>

  <footer>
    <p>&copy; Pierre Zemb 2014</p>
  </footer>
</div> <!-- /container -->        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>

<script src="js/vendor/bootstrap.min.js"></script>

<script src="js/vendor/angular.min.js"></script>
<script src="js/classie.js"></script>
<script src="js/gnmenu.js"></script>
<script src="js/carrousel.js"></script>
<script>
  new gnMenu( document.getElementById( 'gn-menu' ) );
</script>

<script src="js/main.js"></script>

<script>
  var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
  (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src='//www.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g,s)}(document,'script'));
</script>
</body>
</html>