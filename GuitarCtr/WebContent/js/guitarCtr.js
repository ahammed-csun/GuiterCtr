//////////////////////////////////Page-1///////////////////////////////////
var i = 0;
var myJson;

function load() {
	document.getElementById("xpan").style.visibility = "hidden";
	document.getElementById("info1").style.display = "none";
	document.getElementById("ship1").style.display = "none";
	document.getElementById("rev1").style.display = "none";
	document.getElementById("prev").disabled = true;
	Ajax();
}

// AJAX CALL TO READ DATA FROM JSON
function Ajax() {
	var one = new XMLHttpRequest();
	one.open("GET", "data/guitardata.json", true);
	one.send();

	one.onreadystatechange = function() {
		if (one.readyState == 4 && one.status == 200) {
			var rsp = one.responseText;
			myJson = eval('(' + rsp + ')');
		}
		copy();
	};
}

function copy() {
	document.getElementById("default").src = "images/"
			+ myJson.allProducts[i].image_path;
	document.getElementById("info1").innerHTML = myJson.allProducts[i].product_discription;
	document.getElementById("info1").innerHTML += "<br> Price: "
			+ myJson.allProducts[i].price;
	document.getElementById("ship1").innerHTML = myJson.allProducts[i].shipping_details;
	document.getElementById("rev1").innerHTML = myJson.allProducts[i].custmer_reviews;
}

function next() {
	i++;
	document.getElementById("prev").disabled = false;
	if (i <= 5) {
		document.getElementById("next").disabled = false;
	} else {
		document.getElementById("next").disabled = true;
	}
	copy();
}

function previous() {
	i--;
	document.getElementById("next").disabled = false;
	if (i >= 1) {
		document.getElementById("prev").disabled = false;
	} else {
		document.getElementById("prev").disabled = true;
	}
	copy();
}

function buy() {
	window.location.href = "http://localhost:8080/GuitarCtr/guitarCtr2.jsp?guitarNum="
			+ i;
}
function xpan1() {
	document.getElementById("xpan").style.visibility = "visible";
}
function xpan2() {
	document.getElementById("xpan").style.visibility = "hidden";
}
function plus() {
	document.getElementById("info").style.display = "none";
	document.getElementById("info1").style.display = "block";
}
function minus() {
	document.getElementById("info").style.display = "block";
	document.getElementById("info1").style.display = "none";
}
function plus1() {
	document.getElementById("ship").style.display = "none";
	document.getElementById("ship1").style.display = "block";
}
function minus1() {
	document.getElementById("ship").style.display = "block";
	document.getElementById("ship1").style.display = "none";
}
function plus2() {
	document.getElementById("review").style.display = "none";
	document.getElementById("rev1").style.display = "block";
}
function minus2() {
	document.getElementById("review").style.display = "block";
	document.getElementById("rev1").style.display = "none";
}

// /////////////////////////////Page-2///////////////////////////////

function load2() {
	document.getElementById("xpan").style.visibility = "hidden";
	document.getElementById("buy").disabled = true;
	document.getElementById("chkbox").disabled = true;
	getUrlValues();
}

// QUERY STRING TO MOVE DATA BACK & FORTH BETWEEN PAGES
function getUrlValues() {
	var vars = [], hash;
	var hashes = window.location.href.slice(
			window.location.href.indexOf('?') + 1).split('&');

	for ( var j = 0; j < hashes.length; j++) {
		hash = hashes[j].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	second(vars);
}

function second(vars) {
	var two = new XMLHttpRequest();
	two.open("GET", "data/guitardata.json", true);
	two.send();
	two.onreadystatechange = function() {
		if (two.readyState == 4 && two.status == 200) {
			var three = two.responseText;
			newVar = eval('(' + three + ')');
			document.getElementById("default").src = "images/"
					+ newVar.allProducts[vars["guitarNum"]].image_path;
			document.getElementById("info").innerHTML = newVar.allProducts[vars["guitarNum"]].product_discription;
			localStorage.image_path = newVar.allProducts[vars["guitarNum"]].image_path;
		}
	};
}

function review() {
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var add = document.getElementById("add").value;
	var phn = document.getElementById("phn").value;
	var email = document.getElementById("eml").value;
	var zipcode = document.getElementById("zip").value;
	var ccn = document.getElementById("ccn").value;
	var exp = document.getElementById("exp").value;
	var state = document.getElementById("st").value;

	var ptnName = /[a-z A-Z]/;
	var ptnAdd = /[a-z A-Z 0-9 .,-]/;
	var ptnPhn = /[0-9]{10}/;
	var ptnE = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	var ptnCCN = /[0-9]{16}/;
	var ptnExp = /[0-9,-.]/;
	var ptnZip = /[0-9]{5}/;

	var x1 = ptnName.test(fname);
	var x2 = ptnName.test(lname);
	var x3 = ptnZip.test(zipcode);
	var y = ptnAdd.test(add);
	var z1 = ptnPhn.test(phn);
	var z2 = ptnCCN.test(ccn);
	var z3 = ptnExp.test(exp);
	var e = ptnE.test(email);

	if (x1 == false) {
		document.getElementById("fname").style.backgroundColor = "pink";
	} else {
		document.getElementById("fname").style.backgroundColor = "white";
	}

	if (x2 == false) {
		document.getElementById("lname").style.backgroundColor = "pink";
	} else {
		document.getElementById("lname").style.backgroundColor = "white";
	}
	if (x3 == false) {
		document.getElementById("zip").style.backgroundColor = "pink";
	} else {
		document.getElementById("zip").style.backgroundColor = "white";
	}
	if (y == false) {
		document.getElementById("add").style.backgroundColor = "pink";
	} else {
		document.getElementById("add").style.backgroundColor = "white";
	}
	if (z1 == false) {
		document.getElementById("phn").style.backgroundColor = "pink";
	} else {
		document.getElementById("phn").style.backgroundColor = "white";
	}
	if (z2 == false) {
		document.getElementById("ccn").style.backgroundColor = "pink";
	} else {
		document.getElementById("ccn").style.backgroundColor = "white";
	}
	if (z3 == false) {
		document.getElementById("exp").style.backgroundColor = "pink";
	} else {
		document.getElementById("exp").style.backgroundColor = "white";
	}
	if (e == false) {
		document.getElementById("eml").style.backgroundColor = "pink";
	} else {
		document.getElementById("eml").style.backgroundColor = "white";
	}

	if (state == 0) {
		document.getElementById("st").style.backgroundColor = "pink";
	} else {
		document.getElementById("st").style.backgroundColor = "white";
	}

	if (x1 == true && x2 == true && x3 == true && y == true && z1 == true
			&& z2 == true && z3 == true && e == true && state !== 0) {
		document.getElementById("data").innerHTML = "First Name :" + fname
				+ "<br>Last Name :" + lname + "<br>Address:" + add
				+ "<br>State:" + state + "<br>Zip:" + zipcode
				+ "<br>Phone Number:" + phn + "<br>Email:" + email + "<br>CCN:"
				+ ccn + "<br>Expiration Date:" + exp;

		localStorage.data = "First Name :" + fname + "<br>Last Name :" + lname
				+ "<br>Address:" + add + "<br>State:" + state + "<br>Zip:"
				+ zipcode;
		document.getElementById("chkbox").disabled = false;

	}

}

function chk() {
	var chk = document.getElementById("chkbox").checked;
	if (chk == true) {
		document.getElementById("buy").disabled = false;
	} else {
		document.getElementById("buy").disabled = true;
	}
}
function buy2() {
	window.location.assign("http://localhost:8080/GuitarCtr/guitarCtr3.jsp");
}

// ///////////////////////////////////Page-3////////////////////////////////////////////

function load3() {
	document.getElementById("xpan").style.visibility = "hidden";
	document.getElementById("default").src = "images/"
			+ localStorage.image_path;
	document.getElementById("data").innerHTML = "<h2> Order Confirmation</h2>Your Order has been placed <br> It will be shipped to the following address: <br>"
			+ localStorage.data;
}

function goHome() {
	window.location.assign("http://localhost:8080/GuitarCtr/guitarCtr1.jsp");
}
