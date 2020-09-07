/**
 * refreshGemListTab extracted from ../../deobfuscated/bundle.js at line 8332-8528
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshGemListTab.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshGemListTab()
{
	var _0x396D = document.getElementById("mining-gemList-section");
	var _0x41B2 = "<center>";
	var _0x473F = "";
	_0x473F = "sapphire";
	_0x41B2 += "<div class=\'mobile-style\'>";
	_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x473F.toUpperCase();
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/100,000</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem("sapphireMined") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x473F = "emerald";
	_0x41B2 += "<div class=\'mobile-style\'>";
	_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x473F.toUpperCase();
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/250,000</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x473F = "ruby";
	_0x41B2 += "<div class=\'mobile-style\'>";
	_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x473F.toUpperCase();
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/500,000</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x473F = "diamond";
	_0x41B2 += "<div class=\'mobile-style\'>";
	_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x473F.toUpperCase();
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/1,000,000</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x396D.innerHTML = _0x41B2;
	_0x473F = "bloodDiamond";
	_0x41B2 += "<div class=\'mobile-style\'>";
	_0x41B2 += "<img src=\'images/" + _0x473F + ".gif\' style=\'float:left;\' class=\'img-100\' />";
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BLOOD DIAMOND";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/???</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	var _0x3AE6 = 0;
	var _0x46E8 = "style=\'color:red\'";
	if (getItem("researcherMining") >= 2)
	{
		_0x3AE6 = 5;
		if (getLevel(getItem("miningXp")) >= _0x3AE6)
		{
			_0x46E8 = "style=\'color:lime\'"
		};
		_0x473F = "smallStardustPrism";
		_0x41B2 += "<div class=\'mobile-style\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "SMALL";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/4320  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x46E8 + ">" + _0x3AE6 + "</span></span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>";
		_0x3AE6 = 20;
		_0x46E8 = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x3AE6)
		{
			_0x46E8 = "style=\'color:lime\'"
		};
		_0x473F = "mediumStardustPrism";
		_0x41B2 += "<div class=\'mobile-style\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "MEDIUM";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/66,000  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x46E8 + ">" + _0x3AE6 + "</span></span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>";
		_0x3AE6 = 50;
		_0x46E8 = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x3AE6)
		{
			_0x46E8 = "style=\'color:lime\'"
		};
		_0x473F = "largeStardustPrism";
		_0x41B2 += "<div class=\'mobile-style\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LARGE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/188,000  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x46E8 + ">" + _0x3AE6 + "</span></span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>";
		_0x3AE6 = 80;
		_0x46E8 = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x3AE6)
		{
			_0x46E8 = "style=\'color:lime\'"
		};
		_0x473F = "hugeStardustPrism";
		_0x41B2 += "<div class=\'mobile-style\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "HUGE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/TBA  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x46E8 + ">" + _0x3AE6 + "</span></span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	var _0x5568 = "none";
	if (getItem("researcherMining") >= 4)
	{
		_0x5568 = "drills";
		_0x473F = "blueGeode";
		_0x41B2 += "<div class=\'mobile-style\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BLUE GEODE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/51,840 <br /><span style=\'color:grey\'><img src=\'images/" + _0x5568 + ".png\' class=\'img-20\' /> Per <span>" + getItemName(_0x5568) + "</span></span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	if (getItem("researcherMining") >= 4)
	{
		_0x5568 = "crushers";
		_0x473F = "greenGeode";
		_0x41B2 += "<div class=\'mobile-style\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "GREEN GEODE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/259,200 <br /><span style=\'color:grey\'><img src=\'images/" + _0x5568 + ".png\' class=\'img-20\' /> Per <span>" + getItemName(_0x5568) + "</span></span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	if (getItem("researcherMining") >= 4)
	{
		_0x5568 = "giantDrills";
		_0x473F = "redGeode";
		_0x41B2 += "<div class=\'mobile-style\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "RED GEODE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/777,600 <br /><span style=\'color:grey\'><img src=\'images/" + _0x5568 + ".png\' class=\'img-20\' /> Per <span>" + getItemName(_0x5568) + "</span></span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	if (getItem("researcherMining") >= 4)
	{
		_0x5568 = "excavators";
		_0x473F = "purpleGeode";
		_0x41B2 += "<div class=\'mobile-style\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "PURPLE GEODE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/1,555,200 <br /><span style=\'color:grey\'><img src=\'images/" + _0x5568 + ".png\' class=\'img-20\' /> Per <span>" + getItemName(_0x5568) + "</span></span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x41B2 += "</center>";
	_0x396D.innerHTML = _0x41B2
}