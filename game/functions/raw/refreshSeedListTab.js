/**
 * refreshSeedListTab extracted from ../../deobfuscated/bundle.js at line 5855-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshSeedListTab.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshSeedListTab()
{
	var _0x1C85A = document.getElementById("farming-seedList-section");
	var _0x1CC4A = "<center>";
	var _0x1CEEA = "";
	_0x1CEEA = "dottedGreenLeafSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "DOTTED GREEN";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "greenLeafSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "GREEN LEAF";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "limeLeafSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LIME LEAF";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "goldLeafSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "GOLD LEAF";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "crystalLeafSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "CRYSTAL LEAF";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "stripedGoldLeafSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STRIPED GOLD";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "stripedCrystalLeafSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STRIPED CRYSTAL";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "redMushroomSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "RED MUSHROOM";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "blewitMushroomSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BLEWIT MUSH";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "snapegrassSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "SNAPEGRASS";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "stardustSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background_light.png)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STARDUST SEEDS";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "treeSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "Chopped") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "TREE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Chopped") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "oakTreeSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "Chopped") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "OAK TREE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Chopped") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "willowTreeSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "Chopped") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "WILLOW TREE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Chopped") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "bambooTreeSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "Chopped") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BAMBOO TREE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Chopped") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "mapleTreeSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "Chopped") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "MAPLE TREE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Chopped") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "lavaTreeSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "Chopped") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LAVA TREE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Chopped") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "stardustTreeSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "Chopped") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STARDUST TREE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Chopped") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CC4A += "</center>";
	_0x1C85A.innerHTML = _0x1CC4A
}