/**
 * refreshGemListTab extracted from ../../deobfuscated/bundle.js at line 6348-6483
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshGemListTab.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshGemListTab()
{
	var _0x1C85A = document.getElementById("mining-gemList-section");
	var _0x1CC4A = "<center>";
	var _0x1CEEA = "";
	_0x1CEEA = "sapphire";
	_0x1CC4A += "<div class=\'mobile-style\'>";
	_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1CEEA.toUpperCase();
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/100,000</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem("sapphireMined") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "emerald";
	_0x1CC4A += "<div class=\'mobile-style\'>";
	_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1CEEA.toUpperCase();
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/250,000</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Mined") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "ruby";
	_0x1CC4A += "<div class=\'mobile-style\'>";
	_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1CEEA.toUpperCase();
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/500,000</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Mined") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "diamond";
	_0x1CC4A += "<div class=\'mobile-style\'>";
	_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1CEEA.toUpperCase();
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/1,000,000</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Mined") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1C85A.innerHTML = _0x1CC4A;
	_0x1CEEA = "bloodDiamond";
	_0x1CC4A += "<div class=\'mobile-style\'>";
	_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".gif\' style=\'float:left;\' class=\'img-100\' />";
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BLOOD DIAMOND";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/???</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Mined") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	var _0x1C910 = 0;
	var _0x1CECE = "style=\'color:red\'";
	if (getItem("researcherMining") >= 2)
	{
		_0x1C910 = 5;
		if (getLevel(getItem("miningXp")) >= _0x1C910)
		{
			_0x1CECE = "style=\'color:lime\'"
		};
		_0x1CEEA = "smallStardustPrism";
		_0x1CC4A += "<div class=\'mobile-style\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "SMALL";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/4320  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x1CECE + ">" + _0x1C910 + "</span></span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Mined") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>";
		_0x1C910 = 20;
		_0x1CECE = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x1C910)
		{
			_0x1CECE = "style=\'color:lime\'"
		};
		_0x1CEEA = "mediumStardustPrism";
		_0x1CC4A += "<div class=\'mobile-style\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "MEDIUM";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/66,000  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x1CECE + ">" + _0x1C910 + "</span></span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Mined") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>";
		_0x1C910 = 50;
		_0x1CECE = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x1C910)
		{
			_0x1CECE = "style=\'color:lime\'"
		};
		_0x1CEEA = "largeStardustPrism";
		_0x1CC4A += "<div class=\'mobile-style\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LARGE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/TBA  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x1CECE + ">" + _0x1C910 + "</span></span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Mined") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>";
		_0x1C910 = 80;
		_0x1CECE = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x1C910)
		{
			_0x1CECE = "style=\'color:lime\'"
		};
		_0x1CEEA = "hugeStardustPrism";
		_0x1CC4A += "<div class=\'mobile-style\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "HUGE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/TBA  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x1CECE + ">" + _0x1C910 + "</span></span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Mined") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CC4A += "</center>";
	_0x1C85A.innerHTML = _0x1CC4A
}