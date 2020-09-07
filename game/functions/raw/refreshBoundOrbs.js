/**
 * refreshBoundOrbs extracted from ../../deobfuscated/bundle.js at line 7953-8030
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshBoundOrbs.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshBoundOrbs()
{
	var _0x396D = document.getElementById("pirate-section");
	var _0x41B2 = "<center>";
	var _0x6A7A = "background-image:url(images/background19.jpg)";
	var _0x4722 = "";
	_0x4722 = "blueFurnaceOrb";
	if (getItem(_0x4722 + "Bound") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'" + _0x6A7A + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x41B2 += "<img src=\'images/" + _0x4722 + ".png\' />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x4722).toUpperCase();
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x4722) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x4722 = "blueWoodcuttingOrb";
	if (getItem(_0x4722 + "Bound") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'" + _0x6A7A + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x41B2 += "<img src=\'images/" + _0x4722 + ".png\' />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x4722).toUpperCase();
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x4722) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x4722 = "blueOreOrb";
	if (getItem(_0x4722 + "Bound") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'" + _0x6A7A + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x41B2 += "<img src=\'images/" + _0x4722 + ".png\' />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x4722).toUpperCase();
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x4722) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x4722 = "blueOilWellOrb";
	if (getItem(_0x4722 + "Bound") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'" + _0x6A7A + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x41B2 += "<img src=\'images/" + _0x4722 + ".png\' />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x4722).toUpperCase();
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x4722) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x4722 = "blueManaOrb";
	if (getItem(_0x4722 + "Bound") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'" + _0x6A7A + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x41B2 += "<img src=\'images/" + _0x4722 + ".png\' />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x4722).toUpperCase();
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x4722) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x41B2 += "</center>";
	if (_0x41B2 == "<center></center>")
	{
		_0x41B2 = "<center>You do not have any orbs.</center>"
	};
	_0x396D.innerHTML = _0x41B2
}