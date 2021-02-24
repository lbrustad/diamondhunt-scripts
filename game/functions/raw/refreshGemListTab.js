/**
 * refreshGemListTab extracted from ../../deobfuscated/bundle.js at line 9920-10285
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshGemListTab.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshGemListTab()
{
	var _0x15049 = document.getElementById("mining-gemList-section");
	var _0x15A44 = "<center>";
	var _0x1613D = "";
	_0x1613D = "sapphire";
	_0x15A44 += "<div class=\'mobile-style\'>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1613D.toUpperCase();
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/100,000</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem("sapphireMined") + "</span>";
	if (getItem("researcherMining") >= 5)
	{
		var _0x19045 = "miningScrollSapphire";
		var _0x19022 = getItem(_0x19045 + "Total") > 0;
		var _0x151ED = "x.png";
		if (_0x19022)
		{
			_0x151ED = "check.png"
		};
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
	};
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x1613D = "emerald";
	_0x15A44 += "<div class=\'mobile-style\'>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1613D.toUpperCase();
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/250,000</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
	if (getItem("researcherMining") >= 5)
	{
		var _0x19045 = "miningScrollEmerald";
		var _0x19022 = getItem(_0x19045 + "Total") > 0;
		var _0x151ED = "x.png";
		if (_0x19022)
		{
			_0x151ED = "check.png"
		};
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
	};
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x1613D = "ruby";
	_0x15A44 += "<div class=\'mobile-style\'>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1613D.toUpperCase();
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/500,000</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
	if (getItem("researcherMining") >= 5)
	{
		var _0x19045 = "miningScrollRuby";
		var _0x19022 = getItem(_0x19045 + "Total") > 0;
		var _0x151ED = "x.png";
		if (_0x19022)
		{
			_0x151ED = "check.png"
		};
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
	};
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x1613D = "diamond";
	_0x15A44 += "<div class=\'mobile-style\'>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1613D.toUpperCase();
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/1,000,000</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
	if (getItem("researcherMining") >= 5)
	{
		var _0x19045 = "miningScrollDiamond";
		var _0x19022 = getItem(_0x19045 + "Total") > 0;
		var _0x151ED = "x.png";
		if (_0x19022)
		{
			_0x151ED = "check.png"
		};
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
	};
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x15049.innerHTML = _0x15A44;
	_0x1613D = "bloodDiamond";
	_0x15A44 += "<div class=\'mobile-style\'>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".gif\' style=\'float:left;\' class=\'img-100\' />";
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BLOOD DIAMOND";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/???</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
	if (getItem("researcherMining") >= 5)
	{
		var _0x19045 = "miningScrollBloodDiamond";
		var _0x19022 = getItem(_0x19045 + "Total") > 0;
		var _0x151ED = "x.png";
		if (_0x19022)
		{
			_0x151ED = "check.png"
		};
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
	};
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	var _0x15210 = 0;
	var _0x160D4 = "style=\'color:red\'";
	if (getItem("researcherMining") >= 2)
	{
		_0x15210 = 5;
		if (getLevel(getItem("miningXp")) >= _0x15210)
		{
			_0x160D4 = "style=\'color:lime\'"
		};
		_0x1613D = "smallStardustPrism";
		_0x15A44 += "<div class=\'mobile-style\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "SMALL";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/4320  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x160D4 + ">" + _0x15210 + "</span></span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
		if (getItem("researcherMining") >= 5)
		{
			var _0x19045 = "miningScrollSmallStardustPrism";
			var _0x19022 = getItem(_0x19045 + "Total") > 0;
			var _0x151ED = "x.png";
			if (_0x19022)
			{
				_0x151ED = "check.png"
			};
			_0x15A44 += "<br />";
			_0x15A44 += "<br />";
			_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "</div>";
		_0x15210 = 20;
		_0x160D4 = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x15210)
		{
			_0x160D4 = "style=\'color:lime\'"
		};
		_0x1613D = "mediumStardustPrism";
		_0x15A44 += "<div class=\'mobile-style\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "MEDIUM";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/66,000  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x160D4 + ">" + _0x15210 + "</span></span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
		if (getItem("researcherMining") >= 5)
		{
			var _0x19045 = "miningScrollMediumStardustPrism";
			var _0x19022 = getItem(_0x19045 + "Total") > 0;
			var _0x151ED = "x.png";
			if (_0x19022)
			{
				_0x151ED = "check.png"
			};
			_0x15A44 += "<br />";
			_0x15A44 += "<br />";
			_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "</div>";
		_0x15210 = 50;
		_0x160D4 = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x15210)
		{
			_0x160D4 = "style=\'color:lime\'"
		};
		_0x1613D = "largeStardustPrism";
		_0x15A44 += "<div class=\'mobile-style\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LARGE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/188,000  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x160D4 + ">" + _0x15210 + "</span></span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
		if (getItem("researcherMining") >= 5)
		{
			var _0x19045 = "miningScrollLargeStardustPrism";
			var _0x19022 = getItem(_0x19045 + "Total") > 0;
			var _0x151ED = "x.png";
			if (_0x19022)
			{
				_0x151ED = "check.png"
			};
			_0x15A44 += "<br />";
			_0x15A44 += "<br />";
			_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "</div>";
		_0x15210 = 80;
		_0x160D4 = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x15210)
		{
			_0x160D4 = "style=\'color:lime\'"
		};
		_0x1613D = "hugeStardustPrism";
		_0x15A44 += "<div class=\'mobile-style\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "HUGE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/400,000  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x160D4 + ">" + _0x15210 + "</span></span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
		if (getItem("researcherMining") >= 5)
		{
			var _0x19045 = "miningScrollHugeStardustPrism";
			var _0x19022 = getItem(_0x19045 + "Total") > 0;
			var _0x151ED = "x.png";
			if (_0x19022)
			{
				_0x151ED = "check.png"
			};
			_0x15A44 += "<br />";
			_0x15A44 += "<br />";
			_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	var _0x1736C = "none";
	if (getItem("researcherMining") >= 4)
	{
		_0x1736C = "drills";
		_0x1613D = "blueGeode";
		_0x15A44 += "<div class=\'mobile-style\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BLUE GEODE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/51,840 <br /><span style=\'color:grey\'><img src=\'images/" + _0x1736C + ".png\' class=\'img-20\' /> Per <span>" + getItemName(_0x1736C) + "</span></span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
		if (getItem("researcherMining") >= 5)
		{
			var _0x19045 = "miningScrollBlueGeode";
			var _0x19022 = getItem(_0x19045 + "Total") > 0;
			var _0x151ED = "x.png";
			if (_0x19022)
			{
				_0x151ED = "check.png"
			};
			_0x15A44 += "<br />";
			_0x15A44 += "<br />";
			_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	if (getItem("researcherMining") >= 4)
	{
		_0x1736C = "crushers";
		_0x1613D = "greenGeode";
		_0x15A44 += "<div class=\'mobile-style\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "GREEN GEODE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/259,200 <br /><span style=\'color:grey\'><img src=\'images/" + _0x1736C + ".png\' class=\'img-20\' /> Per <span>" + getItemName(_0x1736C) + "</span></span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
		if (getItem("researcherMining") >= 5)
		{
			var _0x19045 = "miningScrollGreenGeode";
			var _0x19022 = getItem(_0x19045 + "Total") > 0;
			var _0x151ED = "x.png";
			if (_0x19022)
			{
				_0x151ED = "check.png"
			};
			_0x15A44 += "<br />";
			_0x15A44 += "<br />";
			_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	if (getItem("researcherMining") >= 4)
	{
		_0x1736C = "giantDrills";
		_0x1613D = "redGeode";
		_0x15A44 += "<div class=\'mobile-style\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "RED GEODE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/777,600 <br /><span style=\'color:grey\'><img src=\'images/" + _0x1736C + ".png\' class=\'img-20\' /> Per <span>" + getItemName(_0x1736C) + "</span></span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
		if (getItem("researcherMining") >= 5)
		{
			var _0x19045 = "miningScrollRedGeode";
			var _0x19022 = getItem(_0x19045 + "Total") > 0;
			var _0x151ED = "x.png";
			if (_0x19022)
			{
				_0x151ED = "check.png"
			};
			_0x15A44 += "<br />";
			_0x15A44 += "<br />";
			_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	if (getItem("researcherMining") >= 4)
	{
		_0x1736C = "excavators";
		_0x1613D = "purpleGeode";
		_0x15A44 += "<div class=\'mobile-style\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "PURPLE GEODE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/1,555,200 <br /><span style=\'color:grey\'><img src=\'images/" + _0x1736C + ".png\' class=\'img-20\' /> Per <span>" + getItemName(_0x1736C) + "</span></span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
		if (getItem("researcherMining") >= 5)
		{
			var _0x19045 = "miningScrollPurpleGeode";
			var _0x19022 = getItem(_0x19045 + "Total") > 0;
			var _0x151ED = "x.png";
			if (_0x19022)
			{
				_0x151ED = "check.png"
			};
			_0x15A44 += "<br />";
			_0x15A44 += "<br />";
			_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x15A44 += "</center>";
	_0x15049.innerHTML = _0x15A44
}