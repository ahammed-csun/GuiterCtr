<%--///////////////////////////////Page_03///////////////////////////////////////--%>


<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Guitar Center_Page3</title>
<link rel="stylesheet" href="css/style3.css">
<script type="text/javascript" src="js/guitarCtr.js"></script>
</head>
<body onload="load3()">
	<div id="wrapper">
		<h1>Guiter Center</h1>
		<div id="nav">
			<ul>

				<li onmouseover="xpan1()"><a href="#">Guiters</a></li>
				<li><a href="#">Gear</a></li>
				<li><a href="#">Drams</a></li>
				<li><a href="#">Keyboards</a></li>
				<li><a href="#">Dj &amp; Lighting</a></li>
				<li><a href="#">Used Gear</a></li>
				<li><a href="#">Clearance</a></li>

			</ul>
		</div>
		<div id="xpan">
			<ul>

				<li><a href="#">Electric Guitars</a></li>
				<li><a href="#">Acoustic Guitars</a></li>
				<li><a href="#">Acoustic- Electric Guitar</a></li>
				<li><a href="#">Classical Guitars &nbsp;&nbsp;</a></li>
				<li><a href="#" onclick="xpan2()">
						&#8743;&#8743;&#8743;&#8743; </a></li>
			</ul>
		</div>
		<div id="content">

			<div id="imgbox">
				<img id="default">
			</div>

			<div id="data"></div>
			<button onclick="goHome()" id="home">Go to Home</button>
			<br>

		</div>
	</div>
</body>
</html>