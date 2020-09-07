/**
 * refreshTreeListTab extracted from ../../deobfuscated/bundle.js at line 8032-8330
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTreeListTab.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTreeListTab()
{
	var _0x396D = document.getElementById("woodcutting-treeList-section");
	var _0x41B2 = "<center>";
	var _0x473F = "";
	var _0x38DC = "";
	var _0x4ED6 = "";
	var _0x6A7A = "background-image:url(images/background16.jpg)";
	var _0x736D = "<img src=\'images/treeListLocked.png\' style=\'float:left;)\' class=\'img-100\' />";
	var _0x3F8B = "";
	_0x473F = "tree";
	rarity = "";
	if (getItem(_0x473F + "ChoppedTotal") > 0)
	{
		_0x4ED6 = _0x473F;
		rarity = "Common";
		_0x3F8B = "1";
		backgroundImageStyle = _0x6A7A;
		_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		_0x4ED6 = "???";
		backgroundImageStyle = "";
		rarity = "";
		_0x3F8B = "1";
		_0x38DC = _0x736D;
		backgroundImageStyle = ""
	};
	_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x41B2 += _0x38DC;
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6.toUpperCase();
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x473F = "oakTree";
	rarity = "";
	if (getItem(_0x473F + "ChoppedTotal") > 0)
	{
		_0x4ED6 = getItemName(_0x473F).toUpperCase();
		rarity = "Common";
		_0x3F8B = "15";
		backgroundImageStyle = _0x6A7A;
		_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		_0x4ED6 = "???";
		rarity = "";
		_0x3F8B = "15";
		_0x38DC = _0x736D;
		backgroundImageStyle = ""
	};
	_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x41B2 += _0x38DC;
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x473F = "willowTree";
	rarity = "";
	if (getItem(_0x473F + "ChoppedTotal") > 0)
	{
		_0x4ED6 = getItemName(_0x473F).toUpperCase();
		rarity = "Common";
		_0x3F8B = "30";
		backgroundImageStyle = _0x6A7A;
		_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x4ED6 = "???";
		_0x3F8B = "30";
		rarity = "";
		_0x38DC = _0x736D
	};
	_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x41B2 += _0x38DC;
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x473F = "bambooTree";
	rarity = "Uncommon";
	_0x3F8B = "40";
	if (getItem(_0x473F + "ChoppedTotal") > 0)
	{
		_0x4ED6 = getItemName(_0x473F).toUpperCase();
		backgroundImageStyle = _0x6A7A;
		_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x4ED6 = "???";
		_0x38DC = _0x736D
	};
	_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x41B2 += _0x38DC;
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	if (getItem("researcherWoodcutting") >= 5)
	{
		_0x473F = "appleTree";
		rarity = "Uncommon";
		_0x3F8B = "45";
		if (getItem(_0x473F + "ChoppedTotal") > 0)
		{
			_0x4ED6 = getItemName(_0x473F).toUpperCase();
			backgroundImageStyle = _0x6A7A;
			_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
		}
		else
		{
			backgroundImageStyle = "";
			_0x4ED6 = "???";
			_0x38DC = _0x736D
		};
		_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
		_0x41B2 += _0x38DC;
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "mapleTree";
	rarity = "Uncommon";
	_0x3F8B = "50";
	if (getItem(_0x473F + "ChoppedTotal") > 0)
	{
		_0x4ED6 = getItemName(_0x473F).toUpperCase();
		backgroundImageStyle = _0x6A7A;
		_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x4ED6 = "???";
		_0x38DC = _0x736D
	};
	_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x41B2 += _0x38DC;
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x473F = "lavaTree";
	rarity = "Rare";
	_0x3F8B = "60";
	if (getItem(_0x473F + "ChoppedTotal") > 0)
	{
		_0x4ED6 = getItemName(_0x473F).toUpperCase();
		backgroundImageStyle = _0x6A7A;
		_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x4ED6 = "???";
		_0x38DC = _0x736D
	};
	_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x41B2 += _0x38DC;
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	if (getItem("researcherWoodcutting") >= 5)
	{
		_0x473F = "bananaTree";
		rarity = "Rare";
		_0x3F8B = "63";
		if (getItem(_0x473F + "ChoppedTotal") > 0)
		{
			_0x4ED6 = getItemName(_0x473F).toUpperCase();
			backgroundImageStyle = _0x6A7A;
			_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
		}
		else
		{
			backgroundImageStyle = "";
			_0x4ED6 = "???";
			_0x38DC = _0x736D
		};
		_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
		_0x41B2 += _0x38DC;
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "pineTree";
	rarity = "Rare";
	_0x3F8B = "65";
	if (getItem(_0x473F + "ChoppedTotal") > 0)
	{
		_0x4ED6 = getItemName(_0x473F).toUpperCase();
		backgroundImageStyle = _0x6A7A;
		_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x4ED6 = "???";
		_0x38DC = _0x736D
	};
	_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x41B2 += _0x38DC;
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x473F = "stardustTree";
	rarity = "Rare";
	_0x3F8B = "70";
	if (getItem(_0x473F + "ChoppedTotal") > 0)
	{
		_0x4ED6 = getItemName(_0x473F).toUpperCase();
		backgroundImageStyle = _0x6A7A;
		_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x4ED6 = "???";
		_0x38DC = _0x736D
	};
	_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x41B2 += _0x38DC;
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x41B2 += "</center>";
	_0x396D.innerHTML = _0x41B2
}