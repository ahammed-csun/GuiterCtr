<%--///////////////////////////////Page_01///////////////////////////////////////--%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Guitar Center_Page1</title>
<link rel="stylesheet" href="css/style1.css">
<script type="text/javascript" src="js/guitarCtr.js"></script>
</head>
<body onload="load()">
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

			<br>
			<div id="imgbox">
				<img id="default">
				<button id="prev" onclick="previous()">PREV</button>
				<button id="next" onclick="next()">NEXT</button>
			</div>
			<br> <br>
			<div id="info" onmouseover="plus()">
				<p>Product Information</p>
			</div>

			<div id="info1" onmouseout="minus()"></div>

			<div id="ship" onmouseover="plus1()">
				<p>Shipping Information</p>
			</div>

			<div id="ship1" onmouseout="minus1()"></div>

			<div id="review" onmouseover="plus2()">
				<p>Customer Reviews</p>
			</div>

			<div id="rev1" onmouseout="minus2()"></div>

			<br>

			<div id="by">
				<button onclick="buy()" id="buy">Buy</button>
			</div>

		</div>

	</div>
</body>
</html>