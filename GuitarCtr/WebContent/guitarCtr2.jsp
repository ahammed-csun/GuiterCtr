<%--///////////////////////////////Page_02///////////////////////////////////////--%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Guitar Center_Page2</title>

<link rel="stylesheet" href="css/style2.css">
<script type="text/javascript" src="js/guitarCtr.js"></script>
</head>
<body onload="load2()">
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

			<div id="info"></div>

			<div id="purchase">
				<form>
					First name: <input id="fname" type="text"> Last name: <input
						id="lname" type="text"><br> <br> Address: <input
						id="add" type="text"><br> <br> State: <select
						id="st">
						<OPTION value="0" selected></OPTION>
						<option>CA</option>
						<option>AZ</option>
						<option>TX</option>
						<option>NM</option>
					</select> Zip Code: <input type="text" id="zip"><br> <br>
					Phone Number: <input id="phn" type="text"> E-mail: <input
						id="eml" type="text"><br> <br> Credit Card
					Number: <input id="ccn" type="text"> Expiration Date: <input
						type="text" id="exp">

				</form>

				<button id="review" onclick="review()">Review</button>
				<br>
			</div>

			<div id="data"></div>

			<input type="checkbox" id="chkbox" onclick="chk()">
			<p id="disc">I agree to pay Guitar center according to the terms
				of Service.</p>
			<button onclick="buy2()" id="buy">Buy</button>
			<br>
		</div>

	</div>
</body>
</html>