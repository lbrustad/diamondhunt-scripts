/**
 * refreshMarketHistory extracted from ../../deobfuscated/bundle.js at line 2962-3008
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshMarketHistory.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshMarketHistory(_0x3746)
{
	var _0x6C2D = document.getElementById("marketHistory-section");
	document.getElementById("marketHistory-loading").style.display = "none";
	if (_0x3746 == "error")
	{
		document.getElementById("marketHistory-section").innerHTML = "<center>An error has occured.  Too many requests.  Try again later.</center>";
		return
	};
	if (_0x3746 == "empty")
	{
		document.getElementById("marketHistory-section").innerHTML = "<center>There are no transactions on the market for this account.</center>";
		return
	};
	var _0x3763 = _0x3746.split("~");
	var _0x41B2 = "<center><table class=\'simple-table\' width=\'70%\'>";
	_0x41B2 += "<tr>";
	_0x41B2 += "<th>" + "Item" + "</th>";
	_0x41B2 += "<th>" + "Icon" + "</th>";
	_0x41B2 += "<th>" + "Amount" + "</th>";
	_0x41B2 += "<th>" + "Price" + "</th>";
	_0x41B2 += "<th>" + "Bought/Sold" + "</th>";
	_0x41B2 += "<th>" + "Date <span style=\'color:grey\'>MM/DD/YYYY</span>" + "</th>";
	_0x41B2 += "</tr>";
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607 += 0)
	{
		var _0x6C4A = _0x3763[_0x3607] == "true";
		_0x3607++;
		var _0x6C67 = _0x3763[_0x3607];
		_0x3607++;
		var _0x44C1 = _0x3763[_0x3607];
		_0x3607++;
		var _0x6C84 = _0x3763[_0x3607];
		_0x3607++;
		var _0x6C10 = _0x3763[_0x3607];
		_0x3607++;
		_0x41B2 += "<tr>";
		_0x41B2 += "<td>" + getItemName(_0x6C67) + "</td>";
		_0x41B2 += "<td>" + "<img src=\'images/" + _0x6C67 + ".png\' class=\'img-50\' />" + "</td>";
		_0x41B2 += "<td>" + formatNumber(_0x44C1) + "</td>";
		_0x41B2 += "<td>" + formatNumber(_0x6C84 * _0x44C1) + " <img src=\'images/coins.png\' class=\'img-20\' /> <br /><span style=\'color:grey;font-size:10pt;\'>(" + formatNumber(_0x6C84) + " each)</span></td>";
		_0x41B2 += "<td>" + _0x6C4A + "</td>";
		_0x41B2 += "<td>" + new Date(parseInt(_0x6C10)).toLocaleDateString("en-US"); + "</td>";
		_0x41B2 += "</tr>"
	};
	_0x6C2D.innerHTML = _0x41B2
}