/**
 * refreshTreeListTab extracted from ../../deobfuscated/bundle.js at line 6135-6346
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTreeListTab.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTreeListTab()
{
	var _0x1C85A = document.getElementById("woodcutting-treeList-section");
	var _0x1CC4A = "<center>";
	var _0x1CEEA = "";
	var _0x1C814 = "";
	var _0x1D1EC = "";
	var _0x1E120 = "background-image:url(images/background16.jpg)";
	var _0x1E12E = "<img src=\'images/treeListLocked.png\' style=\'float:left;)\' class=\'img-100\' />";
	var _0x1CB40 = "";
	_0x1CEEA = "tree";
	rarity = "";
	if (getItem(_0x1CEEA + "ChoppedTotal") > 0)
	{
		_0x1D1EC = _0x1CEEA;
		rarity = "Common";
		_0x1CB40 = "1";
		backgroundImageStyle = _0x1E120;
		_0x1C814 = "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		_0x1D1EC = "???";
		backgroundImageStyle = "";
		rarity = "";
		_0x1CB40 = "1";
		_0x1C814 = _0x1E12E;
		backgroundImageStyle = ""
	};
	_0x1CC4A += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x1CC4A += _0x1C814;
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1D1EC.toUpperCase();
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x1CB40 + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1CEEA + "ChoppedTotal") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "oakTree";
	rarity = "";
	if (getItem(_0x1CEEA + "ChoppedTotal") > 0)
	{
		_0x1D1EC = getItemName(_0x1CEEA).toUpperCase();
		rarity = "Common";
		_0x1CB40 = "15";
		backgroundImageStyle = _0x1E120;
		_0x1C814 = "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		_0x1D1EC = "???";
		rarity = "";
		_0x1CB40 = "15";
		_0x1C814 = _0x1E12E;
		backgroundImageStyle = ""
	};
	_0x1CC4A += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x1CC4A += _0x1C814;
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1D1EC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x1CB40 + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1CEEA + "ChoppedTotal") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "willowTree";
	rarity = "";
	if (getItem(_0x1CEEA + "ChoppedTotal") > 0)
	{
		_0x1D1EC = getItemName(_0x1CEEA).toUpperCase();
		rarity = "Common";
		_0x1CB40 = "30";
		backgroundImageStyle = _0x1E120;
		_0x1C814 = "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x1D1EC = "???";
		_0x1CB40 = "30";
		rarity = "";
		_0x1C814 = _0x1E12E
	};
	_0x1CC4A += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x1CC4A += _0x1C814;
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1D1EC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x1CB40 + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1CEEA + "ChoppedTotal") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "bambooTree";
	rarity = "Uncommon";
	_0x1CB40 = "40";
	if (getItem(_0x1CEEA + "ChoppedTotal") > 0)
	{
		_0x1D1EC = getItemName(_0x1CEEA).toUpperCase();
		backgroundImageStyle = _0x1E120;
		_0x1C814 = "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x1D1EC = "???";
		_0x1C814 = _0x1E12E
	};
	_0x1CC4A += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x1CC4A += _0x1C814;
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1D1EC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x1CB40 + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1CEEA + "ChoppedTotal") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "mapleTree";
	rarity = "Uncommon";
	_0x1CB40 = "50";
	if (getItem(_0x1CEEA + "ChoppedTotal") > 0)
	{
		_0x1D1EC = getItemName(_0x1CEEA).toUpperCase();
		backgroundImageStyle = _0x1E120;
		_0x1C814 = "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x1D1EC = "???";
		_0x1C814 = _0x1E12E
	};
	_0x1CC4A += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x1CC4A += _0x1C814;
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1D1EC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x1CB40 + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1CEEA + "ChoppedTotal") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "lavaTree";
	rarity = "Rare";
	_0x1CB40 = "60";
	if (getItem(_0x1CEEA + "ChoppedTotal") > 0)
	{
		_0x1D1EC = getItemName(_0x1CEEA).toUpperCase();
		backgroundImageStyle = _0x1E120;
		_0x1C814 = "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x1D1EC = "???";
		_0x1C814 = _0x1E12E
	};
	_0x1CC4A += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x1CC4A += _0x1C814;
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1D1EC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x1CB40 + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1CEEA + "ChoppedTotal") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "stardustTree";
	rarity = "Rare";
	_0x1CB40 = "70";
	if (getItem(_0x1CEEA + "ChoppedTotal") > 0)
	{
		_0x1D1EC = getItemName(_0x1CEEA).toUpperCase();
		backgroundImageStyle = _0x1E120;
		_0x1C814 = "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x1D1EC = "???";
		_0x1C814 = _0x1E12E
	};
	_0x1CC4A += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x1CC4A += _0x1C814;
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1D1EC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x1CB40 + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1CEEA + "ChoppedTotal") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CC4A += "</center>";
	_0x1C85A.innerHTML = _0x1CC4A
}