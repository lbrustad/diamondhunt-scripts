/**
 * loadShopTab extracted from ../../deobfuscated/bundle.js at line 3379-3473
 *
 * If this file doesn't contain a function, there is an error in ../raw/loadShopTab.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function loadShopTab()
{
	var _0x1C83E = "";
	var _0x1C85A = "item-section-shop-1";
	document.getElementById(_0x1C85A).innerHTML = "";
	_0x1C83E = "apple";
	if (getItem(_0x1C83E + "Bought", false) != 1)
	{
		addItemBoxShop(_0x1C83E, "images/apples.png", "25 APPLES", 5, "tooltip-apple", _0x1C85A)
	};
	_0x1C83E = "rustySword";
	if (getItem(_0x1C83E + "Bought", false) != 1)
	{
		addItemBoxShop(_0x1C83E, "", "RUSTY SWORD", 15, "tooltip-rustySword", _0x1C85A)
	};
	_0x1C83E = "stardustPickaxe";
	if (getItem(_0x1C83E + "Bought", false) != 1)
	{
		addItemBoxShop(_0x1C83E, "", "STARDUST PICKAXE", 100, "tooltip-stardustPickaxe", _0x1C85A)
	};
	_0x1C83E = "woodenShield";
	if (getItem(_0x1C83E + "Bought", false) != 1)
	{
		addItemBoxShop(_0x1C83E, "", "WOODEN SHIELD", 1500, "tooltip-woodenShield", _0x1C85A)
	};
	if (getItem("communityCenter") == 1)
	{
		_0x1C83E = "carePackage1";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "images/carePackage1.png", "PACKAGE<br /><br />", 150, "tooltip-carePackage", _0x1C85A)
		};
		_0x1C83E = "brewingKitMould";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "", "CRAFTING MOULD", 500, "tooltip-mould", _0x1C85A)
		};
		_0x1C83E = "vial";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "", "5 VIALS", 100, "tooltip-vial", _0x1C85A)
		};
		_0x1C83E = "storeBananas";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "", "10 BANANAS", 50, "tooltip-storeBananas", _0x1C85A)
		};
		_0x1C83E = "logs";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "", "20 LOGS", 100, "tooltip-logs", _0x1C85A)
		};
		_0x1C83E = "oakLogs";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "", "5 OAK LOGS", 250, "tooltip-oakLogs", _0x1C85A)
		}
	};
	if (getItem("communityCenter2") == 1)
	{
		_0x1C83E = "combatLog";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "", "COMBAT TRACKER", 100, "tooltip-combatLog", _0x1C85A)
		};
		_0x1C83E = "tree";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "", "TREE", 150, "", _0x1C85A)
		};
		_0x1C83E = "stardustHammer";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "", "STARDUST HAMMER", 400, "tooltip-stardustHammer", _0x1C85A)
		};
		_0x1C83E = "stardustBox1";
		addItemBoxShop(_0x1C83E, "", "STARDUST BOX I", 10000, "tooltip-stardustBox1", _0x1C85A);
		_0x1C83E = "stardustBox2";
		addItemBoxShop(_0x1C83E, "", "STARDUST BOX II", 50000, "tooltip-stardustBox2", _0x1C85A)
	};
	if (getItem("communityCenter3") == 1)
	{
		_0x1C83E = "carePackage2";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "images/carePackage2.png", "PACKAGE<br /><br />", 1000, "tooltip-carePackage", _0x1C85A)
		};
		_0x1C83E = "bronzeOven";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "images/bronzeOven.png", "BRONZE OVEN<br /><br />", 10000, "tooltip-bronzeOven", _0x1C85A)
		}
	};
	refreshTooltips()
}