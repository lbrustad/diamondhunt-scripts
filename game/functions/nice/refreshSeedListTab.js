'use strict';

function refreshSeedListTab()
{
	var template = document.getElementById("farming-seedList-section");
	var attributeTemplate = "<center>";
	var patch3c = "";
	patch3c = "dottedGreenLeafSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "BobTotal") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background16.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "DOTTED GREEN");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/" + formatNumber(rarity) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "BobTotal") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "greenLeafSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "BobTotal") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background16.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "GREEN LEAF");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/" + formatNumber(rarity) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "BobTotal") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "limeLeafSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "BobTotal") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background16.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "LIME LEAF");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/" + formatNumber(rarity) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "BobTotal") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "goldLeafSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "BobTotal") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background16.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "GOLD LEAF");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/" + formatNumber(rarity) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "BobTotal") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "crystalLeafSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "BobTotal") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background16.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "CRYSTAL LEAF");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/" + formatNumber(rarity) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "BobTotal") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "stripedGoldLeafSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "BobTotal") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background16.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "STRIPED GOLD");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/" + formatNumber(rarity) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "BobTotal") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "stripedCrystalLeafSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "BobTotal") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background16.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "STRIPED CRYSTAL");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/" + formatNumber(rarity) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "BobTotal") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "redMushroomSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "BobTotal") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background7.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "RED MUSHROOM");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/" + formatNumber(rarity) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "BobTotal") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "blewitMushroomSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "BobTotal") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background7.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "BLEWIT MUSH");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/" + formatNumber(rarity) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "BobTotal") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "snapegrassSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "BobTotal") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background7.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "SNAPEGRASS");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/" + formatNumber(rarity) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "BobTotal") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "stardustSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "BobTotal") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background_light.png)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "STARDUST SEEDS");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:white;font-size:12pt;'>1/" + formatNumber(rarity) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "BobTotal") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "treeSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "Chopped") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background18.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "TREE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<span style='color:white;font-size:12pt;color:grey'>N/A</span>";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "Chopped") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "oakTreeSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "Chopped") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background18.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "OAK TREE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<span style='color:white;font-size:12pt;color:grey'>N/A</span>";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "Chopped") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "willowTreeSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "Chopped") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background18.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "WILLOW TREE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<span style='color:white;font-size:12pt;color:grey'>N/A</span>";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "Chopped") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "bambooTreeSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "Chopped") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background18.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "BAMBOO TREE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<span style='color:white;font-size:12pt;color:grey'>N/A</span>";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "Chopped") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "appleTreeSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "Chopped") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background18.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "APPLE TREE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<span style='color:white;font-size:12pt;color:grey'>N/A</span>";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "Chopped") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "mapleTreeSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "Chopped") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background18.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "MAPLE TREE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<span style='color:white;font-size:12pt;color:grey'>N/A</span>";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "Chopped") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "lavaTreeSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "Chopped") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background18.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "LAVA TREE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<span style='color:white;font-size:12pt;color:grey'>N/A</span>";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "Chopped") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "bananaTreeSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "Chopped") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background18.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "BANANA TREE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<span style='color:white;font-size:12pt;color:grey'>N/A</span>";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "Chopped") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "pineTreeSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "Chopped") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background18.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "PINE TREE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<span style='color:white;font-size:12pt;color:grey'>N/A</span>";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "Chopped") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	patch3c = "stardustTreeSeeds";
	rarity = getSeedDropRate(patch3c);
	if (getItem(patch3c + "Chopped") > 0)
	{
		attributeTemplate = attributeTemplate + "<div class='mobile-style' style='background-image:url(images/background18.jpg)'>";
		attributeTemplate = attributeTemplate + ("<img src='images/" + patch3c + ".png' class='img-100' style='float:left;' />");
		attributeTemplate = attributeTemplate + ("<span style='float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + "STARDUST TREE");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<span style='color:white;font-size:12pt;color:grey'>N/A</span>";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='font-size:12pt;color:yellow'>Found " + getItem(patch3c + "Chopped") + "</span>");
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	attributeTemplate = attributeTemplate + "</center>";
	template.innerHTML = attributeTemplate;
};
