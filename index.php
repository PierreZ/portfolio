<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" ng-app='PortfolioApp'> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" ng-app='PortfolioApp'> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" ng-app='PortfolioApp'> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" ng-app='PortfolioApp'> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width">

  <link rel="stylesheet" href="css/animate.css">
  <link rel="stylesheet" href="css/bootstrap.css">
  <style>
    body {
      padding-top: 50px;
      padding-bottom: 20px;
    }
  </style>
  <link rel="stylesheet" href="css/main.css">

  <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular-animate.min.js"></script>
</head>
<body ng-controller='Ctrl'>
<!--[if lt IE 7]>
<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
<![endif]-->

<?php
require("elements/menu.php");
?> 

 <div class="row welcome">
  <h1>Pierre Zemb<br/>
    <small>
      <span class="txt-rotate biggest" data-period="2000" data-rotate='[ "French Engineer student", "Software developer", "But also Web when needed", "Pierre Who??" ]'></span>
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
    <div class="row about">
      <h2 class="text-center">About Me</h2>
      <div class="google_color text-center"></div>
      <div class="text-center col-md-3">
        <img class="profile_image" src="img/myself.png">
      </div>
      <div class="col-md-9">
        <p>
          Hi! My name's Pierre Zemb, and I'm a <strong>french student</strong> in an engineering school called <strong>ISEN </strong>where I'm currently studying in the Computer and Network Cycle.
        </p>
        <p>
          I first became interested in development during my training, and I never stop ever since. Thanks to it, I learned thorough computer skills.<strong>I am really enjoying learning new languages or frameworks by myself</strong>, and using them to <strong>develop either web or native apps on my free time</strong>. I'm really enjoying coding in <strong>Java and C++</strong>, but <strong>I always end up developping web apps</strong>.
        </p>
        <p>
          I am committed to many local meetings such as <strong>Google Developers Group, Java User Group or Startup Week-end</strong>. I am also the vice-president of the IT-Electronics club of ISEN, where I became a <strong>new-tech speaker among other things</strong>.
        </p>
        <p>
          As a work experience, I spent <strong>a year in a part-time internship as a DevOps</strong>(developer and sysadmin)  at Systems team for a French bank, <strong>where I developed scripts and apps</strong> around a Realtime Monitoring Infrastructure which involves technology like <strong>Hadoop, Flume, Kafka, Zookeeper, or ElasticSearch…</strong>
        </p>
      </div>
    </div>
  </div>
<!-- ng-if="skill.type=='skillSelected'||skillSelected=='All'" 
 -->  <div class="row skills">
      <h2 class="text-center">Skills</h2>
      <div class="google_color text-center"></div>
      <div class="container">
        <ul class="nav nav-pills nav-justified skills-nav text-center">
          <li ng-click="setSkill(cat)" ng-class="{active:skillSelected==cat}"
          ng-repeat="cat in skills_cat"><a href="">{{cat}}</a></li>
        </ul>
      </div>
      <dl class="skills-diagram">
      <dt ng-repeat="skill in skills | filter:skill_filter" ng-class="skill.css">{{skill.name}}</dt>
        <dd>0</dd>
      </dl>
  </div>

  <div class="container">
    <div class="row work">
      <h2 class="text-center">Work experience</h2>
      <div class="google_color text-center"></div>
      <div class="col-md-4">
        <article>
          <header>
            <h3 class="text-center">Crédit Mutuel Arkéa</h3>
            <img src="img/arkea.png" class="md-4-img">
            <p><strong>Devops internship </strong> June-July 2013</p>
            <p><strong>Devops part-time internship </strong> October 2013-September 2014</p>
          </header>
          <p><em>"Analysis and implementation of technical metrics on VMware virtualized environments and Windows servers"</em></p>
          <p>I worked as a <strong>DevOps</strong>(developer and sysadmin) at Systems team, where I developed scripts and apps around a Realtime Monitoring Infrastructure which involves technology like<strong> Hadoop, Flume, Kafka, Zookeeper, or ElasticSearch</strong>…</p>
          <p><strong>Some of my work:</strong></p>
          <ul>
            <li>Merging and upgrading Arkea's version of Apache Flume (Maven Project)</li>
            <li>Porting arkea's version of Flume for Windows</li>
            <li>Writing some VBscripts to generating Windows's metrics</li>
            <li>Writing Powershell scripts to retrieve VMWare metrics</li>
            <li>In-house training about Hadoop and Pig</li>
            <li>Creation of an web-based app to visualize metrics in realtime using AngularJS</li>

          </ul>
        </article>
      </div>
      <div class="col-md-4">
        <article>
          <header>
            <h3 class="text-center">Thomson Video Networks</h3>
            <img src="img/thomson.png" class="md-4-img">
            <p><strong>developer internship </strong> June-July 2012</p>
          </header>
          <p><em></em></p>
          <p>I worked at the Headquarters of Thomson Video Networks on the Configurator. It's a really heavy Excel program  allows the employees to calculate the price list(rate) of every product, knowing that they are extremely flexible. One click was representing minutes of wait just to calculate what's possible to add.</p>
          <p>My goal was to optimize it to make it more useable.</p>
        </article>
      </div>
      <div class="col-md-4">
        <article>
          <header>
            <h3 class="text-center">CAEC</h3>
            <img src="img/caec.gif" class="md-4-img">
            <p><strong>Charity work </strong>July 2012</p>
          </header>
          <p>Assistance for unemployed to help them find a job</p>
        </article>
      </div>
    </div>
  </div>

  <div class="row education">
    <h2 class="text-center">Education</h2>
    <div class="google_color text-center"></div>
    <div class="col-md-6">
      <article>
        <header class="text-center">
          <h3>Institut Supérieur de l'Electronique et du Numérique</h3>
          <div class="logo-isen">
            <h1>ISEN</h1>
            <h2>École d'ingénieurs</h2>
          </div>
          <p>French engineering school - <strong>Estimate graduation:</strong> 2016</p>
        </header>
        <h4><strong>Computer and Network Cycle(2 years)</strong></h4>
        <p>After spending 2 years in preparatory classes, I've decided to go into Computer and Cycle in order to enhanced my technical skills.</p>
<p>Technical courses:</p>
<ul>
<li> Hardware</li>
<li> Linux-based systemes</li>
<li> Cisco-based courses: Network Basics/Routing and Switching/Scaling Networks(CCNA 1-2-3-4)</li>
<li> Databases</li>
<li> C, C++, Java</li>
<li> PHP, Javascript, HTML5</li>
</ul>
<h4><strong>Preparatory classes(2 years)</strong></h4>
<p>They consist of two very intensive years which act as a preparatory course (or cram school) with the main goal of training undergraduate students. The workload is one of the highest in the world(between 35 and 40 contact hours a week, including written and oral exams).</p>
      </article>
    </div>
    <div class="col-md-6 text-center">
      <h2>More to come!</h2>
      <p>My goal is to spend a full year in a foreign country during my final year at ISEN!</p>
    </div>
  </div>

    <hr>

  <footer>
    <p class="text-center">&copy; Pierre Zemb 2014</p>
  </footer>
</div> <!-- /container -->        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>

<script src="js/vendor/bootstrap.min.js"></script>
<script src="js/classie.js"></script>
<script src="js/gnmenu.js"></script>
<script src="js/carrousel.js"></script>
<script>
  new gnMenu( document.getElementById( 'gn-menu' ) );
</script>

<script src="js/skills.js"></script>
<script src="js/main.js"></script>

<script>
  var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
  (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src='//www.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g,s)}(document,'script'));
</script>
</body>
</html>
