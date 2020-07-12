'use strict';

function loadShopTab()
{
	var lines = "";
	var SCROLL_ID = "item-section-shop-1";
	document.getElementById(SCROLL_ID).innerHTML = "";
	lines = "apple";
	if (getItem(lines + "Bought", false) != 1)
	{
		addItemBoxShop(lines, "images/apples.png", "25 APPLES", 5, "tooltip-apple", SCROLL_ID);
	}
	lines = "rustySword";
	if (getItem(lines + "Bought", false) != 1)
	{
		addItemBoxShop(lines, "", "RUSTY SWORD", 15, "tooltip-rustySword", SCROLL_ID);
	}
	lines = "stardustPickaxe";
	if (getItem(lines + "Bought", false) != 1)
	{
		addItemBoxShop(lines, "", "STARDUST PICKAXE", 100, "tooltip-stardustPickaxe", SCROLL_ID);
	}
	lines = "woodenShield";
	if (getItem(lines + "Bought", false) != 1)
	{
		addItemBoxShop(lines, "", "WOODEN SHIELD", 1500, "tooltip-woodenShield", SCROLL_ID);
	}
	if (getItem("communityCenter") == 1)
	{
		lines = "carePackage1";
		if (getItem(lines + "Bought", false) != 1)
		{
			addItemBoxShop(lines, "images/carePackage1.png", "PACKAGE<br /><br />", 150, "tooltip-carePackage", SCROLL_ID);
		}
		lines = "brewingKitMould";
		if (getItem(lines + "Bought", false) != 1)
		{
			addItemBoxShop(lines, "", "CRAFTING MOULD", 500, "tooltip-mould", SCROLL_ID);
		}
		lines = "vial";
		if (getItem(lines + "Bought", false) != 1)
		{
			addItemBoxShop(lines, "", "5 VIALS", 100, "tooltip-vial", SCROLL_ID);
		}
		lines = "storeBananas";
		if (getItem(lines + "Bought", false) != 1)
		{
			addItemBoxShop(lines, "", "10 BANANAS", 50, "tooltip-storeBananas", SCROLL_ID);
		}
		lines = "logs";
		if (getItem(lines + "Bought", false) != 1)
		{
			addItemBoxShop(lines, "", "20 LOGS", 100, "tooltip-logs", SCROLL_ID);
		}
		lines = "oakLogs";
		if (getItem(lines + "Bought", false) != 1)
		{
			addItemBoxShop(lines, "", "5 OAK LOGS", 250, "tooltip-oakLogs", SCROLL_ID);
		}
	}
	if (getItem("communityCenter2") == 1)
	{
		lines = "combatLog";
		if (getItem(lines + "Bought", false) != 1)
		{
			addItemBoxShop(lines, "", "COMBAT TRACKER", 100, "tooltip-combatLog", SCROLL_ID);
		}
		lines = "tree";
		if (getItem(lines + "Bought", false) != 1)
		{
			addItemBoxShop(lines, "", "TREE", 150, "", SCROLL_ID);
		}
		lines = "stardustHammer";
		if (getItem(lines + "Bought", false) != 1)
		{
			addItemBoxShop(lines, "", "STARDUST HAMMER", 400, "tooltip-stardustHammer", SCROLL_ID);
		}
		lines = "stardustBox1";
		addItemBoxShop(lines, "", "STARDUST BOX I", 10000, "tooltip-stardustBox1", SCROLL_ID);
		lines = "stardustBox2";
		addItemBoxShop(lines, "", "STARDUST BOX II", 50000, "tooltip-stardustBox2", SCROLL_ID);
	}
	if (getItem("communityCenter3") == 1)
	{
		lines = "carePackage2";
		if (getItem(lines + "Bought", false) != 1)
		{
			addItemBoxShop(lines, "images/carePackage2.png", "PACKAGE<br /><br />", 1000, "tooltip-carePackage", SCROLL_ID);
		}
		lines = "bronzeOven";
		if (getItem(lines + "Bought", false) != 1)
		{
			addItemBoxShop(lines, "images/bronzeOven.png", "BRONZE OVEN<br /><br />", 10000, "tooltip-bronzeOven", SCROLL_ID);
		}
	}
	refreshTooltips();
};
