/**
 * loadShopTab extracted from ../../deobfuscated/bundle.js at line 4309-4420
 *
 * If this file doesn't contain a function, there is an error in ../raw/loadShopTab.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function loadShopTab()
{
	var _0x3933 = "";
	var _0x396D = "item-section-shop-1";
	document.getElementById(_0x396D).innerHTML = "";
	_0x3933 = "apple";
	if (getItem(_0x3933 + "Bought", false) != 1)
	{
		addItemBoxShop(_0x3933, "images/apples.png", "25 APPLES", 5, "tooltip-apple", _0x396D)
	};
	_0x3933 = "rustySword";
	if (getItem(_0x3933 + "Bought", false) != 1)
	{
		addItemBoxShop(_0x3933, "", "RUSTY SWORD", 15, "tooltip-rustySword", _0x396D)
	};
	_0x3933 = "stardustPickaxe";
	if (getItem(_0x3933 + "Bought", false) != 1)
	{
		addItemBoxShop(_0x3933, "", "STARDUST PICKAXE", 100, "tooltip-stardustPickaxe", _0x396D)
	};
	_0x3933 = "woodenShield";
	if (getItem(_0x3933 + "Bought", false) != 1)
	{
		addItemBoxShop(_0x3933, "", "WOODEN SHIELD", 1500, "tooltip-woodenShield", _0x396D)
	};
	if (getItem("communityCenter") == 1)
	{
		_0x3933 = "carePackage1";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "images/carePackage1.png", "PACKAGE<br /><br />", 150, "tooltip-carePackage", _0x396D)
		};
		_0x3933 = "brewingKitMould";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "", "CRAFTING MOULD", 500, "tooltip-mould", _0x396D)
		};
		_0x3933 = "vial";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "", "5 VIALS", 100, "tooltip-vial", _0x396D)
		};
		_0x3933 = "storeBananas";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "", "10 BANANAS", 50, "tooltip-storeBananas", _0x396D)
		};
		_0x3933 = "logs";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "", "20 LOGS", 100, "tooltip-logs", _0x396D)
		};
		_0x3933 = "oakLogs";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "", "5 OAK LOGS", 250, "tooltip-oakLogs", _0x396D)
		}
	};
	if (getItem("communityCenter2") == 1)
	{
		_0x3933 = "combatLog";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "", "COMBAT TRACKER", 100, "tooltip-combatLog", _0x396D)
		};
		_0x3933 = "tree";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "", "TREE", 150, "", _0x396D)
		};
		_0x3933 = "stardustHammer";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "", "STARDUST HAMMER", 400, "tooltip-stardustHammer", _0x396D)
		};
		_0x3933 = "stardustBox1";
		addItemBoxShop(_0x3933, "", "STARDUST BOX I", 10000, "tooltip-stardustBox1", _0x396D);
		_0x3933 = "stardustBox2";
		addItemBoxShop(_0x3933, "", "STARDUST BOX II", 50000, "tooltip-stardustBox2", _0x396D)
	};
	if (getItem("communityCenter3") == 1)
	{
		_0x3933 = "lumberJack";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "images/lumberJack.png", "LUMBERJACK<br /><br />", 250, "tooltip-lumberJack", _0x396D)
		};
		_0x3933 = "carePackage2";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "images/carePackage2.png", "PACKAGE<br /><br />", 1000, "tooltip-carePackage", _0x396D)
		};
		_0x3933 = "bronzeOven";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "images/bronzeOven.png", "BRONZE OVEN<br /><br />", 10000, "tooltip-bronzeOven", _0x396D)
		}
	};
	if (getItem("communityCenter4") == 1)
	{
		_0x3933 = "carePackage3";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "images/carePackage3.png", "PACKAGE<br /><br />", 85000, "tooltip-carePackage", _0x396D)
		};
		_0x3933 = "pirate";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "images/pirate.png", "PIRATE<br /><br />", 500000, "tooltip-pirate", _0x396D)
		}
	}
}