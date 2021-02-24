/**
 * refreshMarketHistory extracted from ../../deobfuscated/bundle.js at line 3592-3638
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshMarketHistory.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshMarketHistory(_0x14DB0)
{
	var _0x19117 = document.getElementById("marketHistory-section");
	document.getElementById("marketHistory-loading").style.display = "none";
	if (_0x14DB0 == "error")
	{
		document.getElementById("marketHistory-section").innerHTML = "<center>An error has occured.  Too many requests.  Try again later.</center>";
		return
	};
	if (_0x14DB0 == "empty")
	{
		document.getElementById("marketHistory-section").innerHTML = "<center>There are no transactions on the market for this account.</center>";
		return
	};
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x15A44 = "<center><table class=\'simple-table\' width=\'70%\'>";
	_0x15A44 += "<tr>";
	_0x15A44 += "<th>" + "Item" + "</th>";
	_0x15A44 += "<th>" + "Icon" + "</th>";
	_0x15A44 += "<th>" + "Amount" + "</th>";
	_0x15A44 += "<th>" + "Price" + "</th>";
	_0x15A44 += "<th>" + "Bought/Sold" + "</th>";
	_0x15A44 += "<th>" + "Date <span style=\'color:grey\'>MM/DD/YYYY</span>" + "</th>";
	_0x15A44 += "</tr>";
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C += 0)
	{
		var _0x1913A = _0x14DD3[_0x14C0C] == "true";
		_0x14C0C++;
		var _0x1915D = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x15DF5 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x19180 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x190F4 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		_0x15A44 += "<tr>";
		_0x15A44 += "<td>" + getItemName(_0x1915D) + "</td>";
		_0x15A44 += "<td>" + "<img src=\'images/" + _0x1915D + ".png\' class=\'img-50\' />" + "</td>";
		_0x15A44 += "<td>" + formatNumber(_0x15DF5) + "</td>";
		_0x15A44 += "<td>" + formatNumber(_0x19180 * _0x15DF5) + " <img src=\'images/coins.png\' class=\'img-20\' /> <br /><span style=\'color:grey;font-size:10pt;\'>(" + formatNumber(_0x19180) + " each)</span></td>";
		_0x15A44 += "<td>" + _0x1913A + "</td>";
		_0x15A44 += "<td>" + new Date(parseInt(_0x190F4)).toLocaleDateString("en-US"); + "</td>";
		_0x15A44 += "</tr>"
	};
	_0x19117.innerHTML = _0x15A44
}