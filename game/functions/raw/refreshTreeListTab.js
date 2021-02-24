/**
 * refreshTreeListTab extracted from ../../deobfuscated/bundle.js at line 9590-9918
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTreeListTab.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTreeListTab()
{
	var _0x15049 = document.getElementById("woodcutting-treeList-section");
	var _0x15A44 = "<center>";
	var _0x1613D = "";
	var _0x14F9A = "";
	var _0x14D47 = "";
	var _0x18EC4 = "background-image:url(images/background16.jpg)";
	var _0x199FA = "<img src=\'images/treeListLocked.png\' style=\'float:left;)\' class=\'img-100\' />";
	var _0x157AB = "";
	_0x1613D = "tree";
	rarity = "";
	if (getItem(_0x1613D + "ChoppedTotal") > 0)
	{
		_0x14D47 = _0x1613D;
		rarity = "Common";
		_0x157AB = "1";
		backgroundImageStyle = _0x18EC4;
		_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		_0x14D47 = "???";
		backgroundImageStyle = "";
		rarity = "";
		_0x157AB = "1";
		_0x14F9A = _0x199FA;
		backgroundImageStyle = ""
	};
	_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x15A44 += _0x14F9A;
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47.toUpperCase();
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x1613D = "oakTree";
	rarity = "";
	if (getItem(_0x1613D + "ChoppedTotal") > 0)
	{
		_0x14D47 = getItemName(_0x1613D).toUpperCase();
		rarity = "Common";
		_0x157AB = "15";
		backgroundImageStyle = _0x18EC4;
		_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		_0x14D47 = "???";
		rarity = "";
		_0x157AB = "15";
		_0x14F9A = _0x199FA;
		backgroundImageStyle = ""
	};
	_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x15A44 += _0x14F9A;
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x1613D = "willowTree";
	rarity = "";
	if (getItem(_0x1613D + "ChoppedTotal") > 0)
	{
		_0x14D47 = getItemName(_0x1613D).toUpperCase();
		rarity = "Common";
		_0x157AB = "30";
		backgroundImageStyle = _0x18EC4;
		_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x14D47 = "???";
		_0x157AB = "30";
		rarity = "";
		_0x14F9A = _0x199FA
	};
	_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x15A44 += _0x14F9A;
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x1613D = "bambooTree";
	rarity = "Uncommon";
	_0x157AB = "40";
	if (getItem(_0x1613D + "ChoppedTotal") > 0)
	{
		_0x14D47 = getItemName(_0x1613D).toUpperCase();
		backgroundImageStyle = _0x18EC4;
		_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x14D47 = "???";
		_0x14F9A = _0x199FA
	};
	_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x15A44 += _0x14F9A;
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	if (getItem("researcherWoodcutting") >= 5)
	{
		_0x1613D = "appleTree";
		rarity = "Uncommon";
		_0x157AB = "45";
		if (getItem(_0x1613D + "ChoppedTotal") > 0)
		{
			_0x14D47 = getItemName(_0x1613D).toUpperCase();
			backgroundImageStyle = _0x18EC4;
			_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
		}
		else
		{
			backgroundImageStyle = "";
			_0x14D47 = "???";
			_0x14F9A = _0x199FA
		};
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
		_0x15A44 += _0x14F9A;
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "mapleTree";
	rarity = "Uncommon";
	_0x157AB = "50";
	if (getItem(_0x1613D + "ChoppedTotal") > 0)
	{
		_0x14D47 = getItemName(_0x1613D).toUpperCase();
		backgroundImageStyle = _0x18EC4;
		_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x14D47 = "???";
		_0x14F9A = _0x199FA
	};
	_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x15A44 += _0x14F9A;
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x1613D = "lavaTree";
	rarity = "Rare";
	_0x157AB = "60";
	if (getItem(_0x1613D + "ChoppedTotal") > 0)
	{
		_0x14D47 = getItemName(_0x1613D).toUpperCase();
		backgroundImageStyle = _0x18EC4;
		_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x14D47 = "???";
		_0x14F9A = _0x199FA
	};
	_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x15A44 += _0x14F9A;
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	if (getItem("researcherWoodcutting") >= 5)
	{
		_0x1613D = "bananaTree";
		rarity = "Rare";
		_0x157AB = "63";
		if (getItem(_0x1613D + "ChoppedTotal") > 0)
		{
			_0x14D47 = getItemName(_0x1613D).toUpperCase();
			backgroundImageStyle = _0x18EC4;
			_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
		}
		else
		{
			backgroundImageStyle = "";
			_0x14D47 = "???";
			_0x14F9A = _0x199FA
		};
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
		_0x15A44 += _0x14F9A;
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "pineTree";
	rarity = "Rare";
	_0x157AB = "65";
	if (getItem(_0x1613D + "ChoppedTotal") > 0)
	{
		_0x14D47 = getItemName(_0x1613D).toUpperCase();
		backgroundImageStyle = _0x18EC4;
		_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x14D47 = "???";
		_0x14F9A = _0x199FA
	};
	_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x15A44 += _0x14F9A;
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x1613D = "stardustTree";
	rarity = "Rare";
	_0x157AB = "70";
	if (getItem(_0x1613D + "ChoppedTotal") > 0)
	{
		_0x14D47 = getItemName(_0x1613D).toUpperCase();
		backgroundImageStyle = _0x18EC4;
		_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x14D47 = "???";
		_0x14F9A = _0x199FA
	};
	_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x15A44 += _0x14F9A;
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	if (getItem("researcherWoodcutting") >= 5)
	{
		_0x1613D = "palmTree";
		rarity = "Very Rare";
		_0x157AB = "75";
		if (getItem(_0x1613D + "ChoppedTotal") > 0)
		{
			_0x14D47 = getItemName(_0x1613D).toUpperCase();
			backgroundImageStyle = _0x18EC4;
			_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
		}
		else
		{
			backgroundImageStyle = "";
			_0x14D47 = "???";
			_0x14F9A = _0x199FA
		};
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
		_0x15A44 += _0x14F9A;
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x15A44 += "</center>";
	_0x15049.innerHTML = _0x15A44
}