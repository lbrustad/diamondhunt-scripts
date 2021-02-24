/**
 * refreshSeedListTab extracted from ../../deobfuscated/bundle.js at line 9065-9402
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshSeedListTab.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshSeedListTab()
{
	var _0x15049 = document.getElementById("farming-seedList-section");
	var _0x15A44 = "<center>";
	var _0x1613D = "";
	_0x1613D = "dottedGreenLeafSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "DOTTED GREEN";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "greenLeafSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "GREEN LEAF";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "limeLeafSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LIME LEAF";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "goldLeafSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "GOLD LEAF";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "crystalLeafSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "CRYSTAL LEAF";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "stripedGoldLeafSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STRIPED GOLD";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "stripedCrystalLeafSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STRIPED CRYSTAL";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "redMushroomSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "RED MUSHROOM";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "blewitMushroomSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BLEWIT MUSH";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "snapegrassSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "SNAPEGRASS";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "stardustSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background_light.png)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STARDUST SEEDS";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "treeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "oakTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "OAK TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "willowTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "WILLOW TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "bambooTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BAMBOO TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "appleTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "APPLE TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "mapleTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "MAPLE TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "lavaTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LAVA TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "bananaTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BANANA TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "pineTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "PINE TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "stardustTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STARDUST TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "palmTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "PALM TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x15A44 += "</center>";
	_0x15049.innerHTML = _0x15A44
}