/**
 * refreshSeedListTab extracted from ../../deobfuscated/bundle.js at line 7615-7937
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshSeedListTab.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshSeedListTab()
{
	var _0x396D = document.getElementById("farming-seedList-section");
	var _0x41B2 = "<center>";
	var _0x473F = "";
	_0x473F = "dottedGreenLeafSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "DOTTED GREEN";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "greenLeafSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "GREEN LEAF";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "limeLeafSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LIME LEAF";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "goldLeafSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "GOLD LEAF";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "crystalLeafSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "CRYSTAL LEAF";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "stripedGoldLeafSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STRIPED GOLD";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "stripedCrystalLeafSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STRIPED CRYSTAL";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "redMushroomSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "RED MUSHROOM";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "blewitMushroomSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BLEWIT MUSH";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "snapegrassSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "SNAPEGRASS";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "stardustSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background_light.png)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STARDUST SEEDS";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "treeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "oakTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "OAK TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "willowTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "WILLOW TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "bambooTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BAMBOO TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "appleTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "APPLE TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "mapleTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "MAPLE TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "lavaTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LAVA TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "bananaTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BANANA TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "pineTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "PINE TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "stardustTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STARDUST TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x41B2 += "</center>";
	_0x396D.innerHTML = _0x41B2
}