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
	<div class="menu_indicator animated fadeIn">
		<img class="arrow" src="img/arrow.png" alt="myself">
		<div class="arrow_text">
			<p>Have a look over here !</p>
		</div>
	</div>
	<!--[if lt IE 7]>
	<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->

	<?php
	require("elements/menu.php");
	?>

	<div id="home" class="row welcome">

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



	<div id="about" class="row about">
		<h2 class="text-center">About Me</h2>
		<div class="google_color text-center"></div>
		<div class="text-center col-md-3">
			<img class="profile_image" src="img/myself.png">
			<p class="text-center"><a href="/CV.pdf">Download my resume</a></li></p>
			<p class="text-center"><a href="/CV_fr.pdf" class="lang">Mon CV français est dispo ici !</a></p>
		</div>
		<div class="col-md-9">
			<p>Hi! My name's Pierre Zemb, and I'm a <strong>french student</strong> in an engineering school called <strong>ISEN </strong>where I'm currently studying in the Computer and Network Cycle.</p>
			<p>
				I first became interested in development during my training, and I never stop ever since. Thanks to it, I learned thorough computer skills.<strong>I am really enjoying learning new languages or frameworks by myself</strong>, and using them to <strong>develop either web or native apps on my free time</strong>. I'm really enjoying coding in <strong>Go, Java and C++ using <a href="http://docker.io">Docker</a></strong>, but <strong>I always end up developping web apps</strong>.
			</p>
			<p>
			I am committed to many local meetings and events such as: 			
			</p>
			<ul>
				<li><strong> <a href="http://finistgdg.fr/">Google Developers Group</a></strong></li>
				<li><strong><a href="http://finistjug.fr/">Java User Group</a></strong></li>
				<li><strong><a href="http://www.lacantine-brest.net/">La Cantine Brestoise</a></strong></li>
				<li><strong><a href="http://www.dotscale.eu/">DotScale 2014</a></strong></li>
				<li><strong><a href="http://brest.startupweekend.org/">Startup Week-end 2014 in Brest</a></strong></li>
				<li><strong><a href="http://www.lacantine-brest.net/ai1ec_event/glass-camp-bank/?instance_id=">GlassCamp Bank 2014</a></strong></li>
			</ul>
			<p>
				I'm the vice-president of the IT-Electronics club of my engineering school, where I became a <strong>new-tech speaker among other things</strong>.
			</p>
			<p>
				As a work experience, I spent <strong>a year in a part-time internship as a DevOps</strong>(developer and sysadmin)  at Systems team for a French bank, <strong>where I developed scripts and apps</strong> around a Realtime Monitoring Infrastructure which involves technology like <strong>Hadoop, Flume, Kafka, Zookeeper, or ElasticSearch…</strong>
			</p>
			<p>You can find on my <a href="http://blog.pierrezemb.fr/">blog</a> my <strong>slides, resources,articles and my latest project</strong>.</p>
		</div>

	</div>

	<!-- ng-if="skill.type=='skillSelected'||skillSelected=='All'"
-->  <div  id="skills" class="row skills">
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

<div id="work" class="row work">
	<h2 class="text-center">Work experience</h2>
	<div class="google_color text-center"></div>
	<div class="row personal_line">
		<div class="col-md-4">
			<article>
				<header>
					<h3 class="text-center arkea_trigger">Crédit Mutuel Arkéa</h3>
					<a href="http://www.cmarkea.com/"><img src="img/arkea.png" class="md-4-img"></a>
					<p class="arkea_trigger"><strong>Internship </strong> June-July 2013</p>
					<p class="arkea_trigger"><strong>Part-time internship </strong> October 2013-September 2014</p>
					<p class="arkea_trigger text-center"><em>"Analysis and implementation of technical metrics on VMware virtualized environments and Windows servers"</em></p>
				</header>
				<div class="arkea_detail">
					<p>I worked as a <strong>DevOps</strong>(developer and sysadmin) at Systems team at the headquarters of Crédit Mutuel Arkea.</p>
					<p><strong>Arkea Realtime Monitoring Infrastructure(Artimon for short)</strong> is involving technology like<strong> Hadoop, Flume, Kafka, Zookeeper, or ElasticSearch</strong> with in-house web apps based on D3js.</p>
					<p><strong>My job was to add Windows's based servers to Artimon and improve data vizualization.</strong></p>
					<p><strong>These are some of my work:</strong></p>
					<ul>
						<li>I merged and upgraded Arkea's version of Apache <a href="https://flume.apache.org/">Flume</a> by recompiling it with Maven and making it available to Windows too.</li>
						<li>I wrote some scripts in order to generate metrics from Windows(using PowerCLI API for VMware vSphere)</li>
						<li>put into production <a href="http://nxlog-ce.sourceforge.net/">NXLog</a> and Flume for Windows</li>
						<li>In-house training about Hadoop and Pig</li>
						<li>Creation of a small Hadoop cluster for some testing about <a href="http://www.elasticsearch.org/overview/hadoop/">ElasticSearch for Hadoop</a> to bring logs stored into Hadoop to ElasticSearch</li>
						<li>Enhancement of some vizualization apps written with AngularJS and D3JS</li>
						<li>Creation of a Restful Web Service to automaticly brings data stored into Hadoop to Arkea's vizualization apps</li>
					</ul>
					<p>I also heard a lot about <b> mainframes, Ceph, OpenStack, CoreOS, Docker, Redis, Nagios, VMware vSphere, Citrix</b> and so on...</p>
				</div>
			</article>
		</div>
		<div class="col-md-4">
			<article>
				<header>
					<h3 class="text-center thomson_trigger">Thomson Video Networks</h3>
					<a href="https://www.thomson-networks.com"><img src="img/thomson.png" class="md-4-img"></a>
					<p class="thomson_trigger"><strong>Internship </strong> June-July 2012</p>
					<p class="thomson_trigger text-center"><em>"Optimization of the products's configurator"</em></p>

				</header>
				<div class="thomson_detail">
					<p>I worked at the <strong>Headquarters</strong> of Thomson Video Networks on the Configurator. It's a <strong>really heavy Excel program</strong> allows the employees to calculate the price list of every product, knowing that they are extremely flexible. One click was representing <strong>minutes of wait</strong> just to calculate what's possible to add.</p>
					<p>My goal was to <strong>optimize it</strong> to make it more useable.</p>
				</div>
			</article>
		</div>
		<div class="col-md-4">
			<article>
				<header>
					<h3 class="text-center">CAEC</h3>
					<a href="http://caec.pagesperso-orange.fr/page13.html"><img src="img/caec.gif" class="md-4-img"></a>
					<p><strong>Charity work </strong>July 2011</p>
				</header>
				<p><strong>Assistance for unemployed</strong> to help them find a job</p>
			</article>
		</div>
	</div>
</div>


<div id="education" class="row education">
	<h2 class="text-center">Education</h2>
	<div class="google_color text-center"></div>
	<div class="col-md-6">
		<article>
			<header class="text-center">
				<h3>Institut Supérieur de l'Electronique et du Numérique</h3>
				<a href="http://isen.fr"><div class="logo-isen">
					<h1>ISEN</h1>
					<h2>École d'ingénieurs</h2>
				</div></a>
				<p>French engineering school - <strong>Estimate graduation:</strong> 2016</p>
			</header>
			<h4 class="text-center CIR_trigger"><strong>Computer and Network Cycle(2 years)</strong></h4>
			<div class="CIR_detail">
				<p>After spending 2 years in preparatory classes, I've decided to go into <strong>Computer and Network Cycle</strong> in order to enhanced my technical skills.</p>
				<p><strong>Technical courses:</strong></p>
				<ul>
					<li><strong> Hardware</strong></li>
					<li><strong> Linux-based systemes</strong></li>
					<li><strong> Cisco-based courses: Network Basics/Routing and Switching/Scaling Networks(CCNA 1-2-3-4)</strong></li>
					<li><strong> Databases</strong></li>
					<li><strong> C, C++, Java</strong></li>
					<li><strong> PHP, Javascript, HTML5, CSS3</strong></li>
				</ul>
			</div>
			<h4 class="text-center prepa_trigger"><strong>Preparatory classes(2 years)</strong></h4>
			<div class="prepa_detail">
				<p>They consist of <strong>two very intensive years</strong> which act as a preparatory course with the main goal of training undergraduate students.<br/>The workload is one of the<strong> highest in the world</strong>(between 35 and 40 contact hours a week, including written and oral exams).</p>
			</div>
		</article>

	</div>
	<article>
			<header class="text-center">
				<h3>Google</h3>
				<img src="img/google-logo.png" width="200px">
				<p>Online course - <strong>Graduation:</strong> April 2014</p>
			</header>
			<h4 class="text-center making_data_trigger"><strong>Making Sense of Data</strong></h4>
			<div class="making_data_detail">
				<p>Google is offering a free, online MOOC style course on ‘Making Sense of Data‘ from March 18 to April 4 taught by Amit Deutsch (Google) and Joe Hellerstein (Berkeley). More info <a href="">here.</a></p>
			</div>
		</article>
	<div class="col-md-12 text-center">
		<h2>More to come!</h2>
		<p>My goal is to spend a full year in a foreign country during my final year at ISEN!</p>
	</div>
</div>

<div id="projects" class="row projects">
	<h2 class="text-center">Projects</h2>
	<div class="google_color text-center"></div>

	<div class="row personal_line">
		<h3 class="text-center"><strong>2014</strong></h3>

		<div class="col-lg-12 text-center project_container">
		<img class="img-circle glasscamp_trigger" src="img/SINIS.png" alt="Generic placeholder image">
		<h3 class="glasscamp_trigger">GlassCamp 2014<br/>Sinis</h3>
		<p class="glasscamp_trigger">Java - Android - Glass SDK</p>
		<div class="glasscamp_trigger">
				<img class="thumb_tech" src="img/android.png">
				<img class="thumb_tech" src="img/glass.png">
			</div>
			<div class="glasscamp_detail">
			<p>During the first GlassCamp Bank(event about using Glass for new usage at Crédit Mutuel Arkéa), we created Sinis, an glassware that help people declared their sinister to their insurance by taking pictures and shooting videos directly from Google Glass.</p>
			<p>Written in Java using Android SDK and GDK addon.</p>
			<img style="width:350px"  src="img/glass.jpg">
				<p><a class="btn btn-default" style="margin-top: 20px" href="https://github.com/triskell/sinis" role="button">View on GitHub</a></p>
			</div>
			<div class="col-lg-4 text-center project_container">
				<img class="img-circle skymap_trigger" src="img/skymap.png" alt="Generic placeholder image">
				<h3 class="skymap_trigger">Glass project<br/>Skymap for Google Glass</h3>
				<p class="skymap_trigger">Java - Android - Glass SDK</p>
				<div class="skymap_trigger">
					<img class="thumb_tech" src="img/android.png">
					<img class="thumb_tech" src="img/glass.png">
				</div>
				<div class="skymap_detail">
					<p>A few years ago, Google decided to liberate the source-code of <a href="http://code.google.com/p/stardroid/">Skymap</a>, their astronomy apps for Android</p>
					<p>I'm crazy about astronomy, but I don't have time to practise it. That's why I decided to make an astronomy app using Google's source code</p>
					<p>This app will allow you to see a map of the sky in real-time, just by watching the sky.</p>
					<p>Work in progress!!</p>
					<p><a class="btn btn-default" style="margin-top: 20px" href="https://github.com/PierreZ/skymap-for-glass" role="button">View on GitHub</a></p>

				</div>
			</div><!-- /.col-lg-4 -->

			<div class="col-lg-4 text-center project_container">
				<img class="img-circle orizon_trigger" src="img/orizon.png" alt="Generic placeholder image">
				<h3 class="orizon_trigger">Startup Week-end<br/>Orizon</h3>
				<p class="orizon_trigger">HTML5 - CSS3 - JavaScript - AngularJS - Node.JS - MongoDB</p>
				<div class="orizon_trigger">
					<img class="thumb_tech" src="img/angularjs.png">
					<img class="thumb_tech" src="img/nodejs.png">
					<img src="img/mongodb.png">
				</div>
				<div class="orizon_detail">
					<img style="width:350px" src="img/startup_2014.jpg">
					<p>During the first ever start-up week-end in Brest, I worked on an web service called Orizon.</p>
					<p>The goal's to offer an web service which allows you to match your profile with some of the best students in each schools, in order to help you find your way.</p>
					<p>I created an web infrastructure with MongoDB, Node.JS and AngularJS</p>
					<p>You can have a look on this project <a href="http://orizon.pierrezemb.fr">here</a></p>
					<p>And read an article about it (in French) <a href="http://blog.pierrezemb.fr/retour-sur-le-premier-startup-week-end-de-brest/">here</a></p>
				</div>
			</div><!-- /.col-lg-4 -->

			<div class="col-lg-4 text-center project_container">
				<img class="img-circle rentree_trigger" src="img/rentree.png" alt="Generic placeholder image">
				<h3 class="rentree_trigger">Framework project<br/>Web interface for ISEN</h3>
				<p class="rentree_trigger">HTML5 - CSS3 - JavaScript - PHP - AngularJS - Handmade REST API</p>
				<div class="rentree_trigger">
					<img class="thumb_tech" src="img/html5.png">
					<img class="thumb_tech" src="img/PHP.png">
					<img class="thumb_tech" src="img/angularjs.png">
				</div>
				<div class="rentree_detail">
					<p>Creation of an Web interface for downloading documents about the start of a school year at ISEN using an PHP framework called Limonade and AngularJS</p>
					<p>You can have a look on this project <a href="http://rentree.pierrezemb.fr">here</a></p>
					<p><a class="btn btn-default" style="margin-top: 20px" href="https://github.com/PierreZ/rentree" role="button">View on GitHub</a></p>
				</div>
			</div><!-- /.col-lg-4 -->
		</div>

		<hr>


		<div class="row personal_line">
			<h3 class="text-center"><strong>2013</strong></h3>
			<div class="col-lg-4 text-center project_container">
				<img class="img-circle paidday_trigger" src="img/paidday.png" alt="Generic placeholder image">
				<h3 class="paidday_trigger">Web project<br/>Paid day management</h3>
				<p class="paidday_trigger">HTML5 - CSS3 - JavaScript - PHP - Java</p>
				<div class="paidday_trigger">
					<img class="thumb_tech" src="img/html5.png">
					<img class="thumb_tech" src="img/PHP.png">
					<img class="thumb_tech" src="img/java.svg">
				</div>
				<div class="paidday_detail">
					<p>We had to make by pairs a web project called Paid holiday management; administration side is in Web technology such as PHP and JQuery and the user side is in java.</p>
					<p>The user client show a calendar, and next holidays. On the administration side, you can select a person, and add/modify/suppress holiday by clicking on the day. A wrapper on the left resume all the holiday on the selected user.</p>
					<p>The whole calendar and wrapper refresh are in Ajax, to avoid webpage refresh.</p>
					<p><a class="btn btn-default" style="margin-top: 20px" href="https://github.com/PierreZ/Jeux-de-Jongles-Visual-Studio" role="button">View on GitHub</a></p>
				</div>
			</div><!-- /.col-lg-4 -->

			<div class="col-lg-4 text-center project_container">
				<img class="img-circle python_trigger" src="img/livre_python.png" alt="Generic placeholder image">
				<h3 class="python_trigger">French book<br/>Le python en Prépa</h3>
				<p class="python_trigger">Python</p>
				<div class="python_trigger">
					<img class="thumb_tech" src="img/python.png">
				</div>
				<div class="python_detail">
					<p>With the help of our physics teacher, we wrote a book with my class about Python programming for french teachers of preparatory classes.</p>
					<p>the new computer programs CPGEs introduce two new free languages ​​instead of Maple and Mathematica: Python and SciLab. We therefore converted to Python exercises Mathematica / Maple type and written tutorials on various topics such as database, PC hardware or programming.</p>
					<p>You can order the book <a href="http://web.isen-bretagne.fr/livres/python/index.php">here</a> and read some interview of myself <a href="http://www.tech-brest-iroise.fr/Actualit%C3%A9s-398-941-0-0.html">here</a></p>
				</div>
			</div><!-- /.col-lg-4 -->

			<div class="col-lg-4 text-center project_container">
				<img class="img-circle homer_trigger" src="img/homer.png" alt="Generic placeholder image">
				<h3 class="homer_trigger">Kinect game<br/>Go Homer!</h3>
				<p class="homer_trigger">C++ - Kinect SDK - Qt4</p>
				<div class="homer_trigger">
					<img class="thumb_tech" src="img/cplusplus.png">
					<img class="thumb_tech" src="img/qt.png">
					<img class="thumb_tech" src="img/kinect.png">

				</div>
				<div class="homer_detail">
					<p>I realized during my free time a juggling game with Kinect in C++.</p>
					<p>The game is to make a maximum of jungles with your head,movements are based on your actual position.</p>
					<p>For this, I used the official SDK and Microsoft Visual Studio with Qt as graphics API.</p>
					<iframe width="400" height="200" src="http://www.youtube.com/embed/EXtNwbCb7w8" frameborder="0" allowfullscreen=""></iframe>
					<p><a class="btn btn-default" style="margin-top: 20px" href="https://github.com/PierreZ/Jeux-de-Jongles-Visual-Studio" role="button">View on GitHub</a></p>
				</div>
			</div><!-- /.col-lg-4 -->
		</div>


		<hr>
		<div class="row personal_line">

			<h3 class="text-center"><strong>2012</strong></h3>
			<div class="text-center project_container">
				<img class="img-circle line_trigger" src="img/img_flowcode.png" alt="Generic placeholder image">
				<h3 class="line_trigger">line follower Robot</h3>
				<p class="line_trigger">Flowcode</p>
				<div class="line_trigger">
					<img class="thumb_tech" src="img/flowcode.png">
				</div>
				<div class="line_detail">
					<p>I realized as an project a line follower robot. The hardware was already done, we just had to program it with Flowcode</p>
					<iframe width="400" height="200" src="http://www.youtube.com/embed/ZokwIFNCysI" frameborder="0" allowfullscreen=""></iframe>
					<!--       <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p> -->
				</div>
			</div><!-- /.col-lg-4 -->
		</div>

	</div>

	<footer>
		<p class="text-center">&copy; Pierre Zemb 2014</p>
		<img style="width:20%" src="img/digital.png">
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
<script src="https://fightforthefuture.github.io/reset-the-net-banner/banner/rtn.js"
async></script>

<script>
	var _gaq=[['_setAccount','UA-41090605-1'],['_trackPageview']];
	(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
		g.src='//www.google-analytics.com/ga.js';
		s.parentNode.insertBefore(g,s)}(document,'script'));
</script>
</body>
</html>
