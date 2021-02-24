/**
 * loadShopTab extracted from ../../deobfuscated/bundle.js at line 4999-5123
 *
 * If this file doesn't contain a function, there is an error in ../raw/loadShopTab.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function loadShopTab()
{
	var _0x15003 = "";
	var _0x15049 = "item-section-shop-1";
	document.getElementById(_0x15049).innerHTML = "";
	_0x15003 = "apple";
	if (getItem(_0x15003 + "Bought", false) != 1)
	{
		addItemBoxShop(_0x15003, "images/apples.png", "25 APPLES", 5, "tooltip-apple", _0x15049)
	};
	_0x15003 = "rustySword";
	if (getItem(_0x15003 + "Bought", false) != 1)
	{
		addItemBoxShop(_0x15003, "", "RUSTY SWORD", 15, "tooltip-rustySword", _0x15049)
	};
	_0x15003 = "stardustPickaxe";
	if (getItem(_0x15003 + "Bought", false) != 1)
	{
		addItemBoxShop(_0x15003, "", "STARDUST PICKAXE", 100, "tooltip-stardustPickaxe", _0x15049)
	};
	_0x15003 = "woodenShield";
	if (getItem(_0x15003 + "Bought", false) != 1)
	{
		addItemBoxShop(_0x15003, "", "WOODEN SHIELD", 1500, "tooltip-woodenShield", _0x15049)
	};
	if (getItem("communityCenter") == 1)
	{
		_0x15003 = "carePackage1";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "images/carePackage1.png", "PACKAGE<br /><br />", 150, "tooltip-carePackage", _0x15049)
		};
		_0x15003 = "brewingKitMould";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "", "CRAFTING MOULD", 500, "tooltip-mould", _0x15049)
		};
		_0x15003 = "vial";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "", "5 VIALS", 100, "tooltip-vial", _0x15049)
		};
		_0x15003 = "storeBananas";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "", "10 BANANAS", 50, "tooltip-storeBananas", _0x15049)
		};
		_0x15003 = "logs";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "", "20 LOGS", 100, "tooltip-logs", _0x15049)
		};
		_0x15003 = "oakLogs";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "", "5 OAK LOGS", 250, "tooltip-oakLogs", _0x15049)
		}
	};
	if (getItem("communityCenter2") == 1)
	{
		_0x15003 = "combatLog";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "", "COMBAT TRACKER", 100, "tooltip-combatLog", _0x15049)
		};
		_0x15003 = "tree";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "", "TREE", 150, "", _0x15049)
		};
		_0x15003 = "stardustHammer";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "", "STARDUST HAMMER", 400, "tooltip-stardustHammer", _0x15049)
		};
		_0x15003 = "stardustBox1";
		addItemBoxShop(_0x15003, "", "STARDUST BOX I", 10000, "tooltip-stardustBox1", _0x15049);
		_0x15003 = "stardustBox2";
		addItemBoxShop(_0x15003, "", "STARDUST BOX II", 50000, "tooltip-stardustBox2", _0x15049)
	};
	if (getItem("communityCenter3") == 1)
	{
		_0x15003 = "lumberJack";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "images/lumberJack.png", "LUMBERJACK<br /><br />", 250, "tooltip-lumberJack", _0x15049)
		};
		_0x15003 = "carePackage2";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "images/carePackage2.png", "PACKAGE<br /><br />", 1000, "tooltip-carePackage", _0x15049)
		};
		_0x15003 = "bronzeOven";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "images/bronzeOven.png", "BRONZE OVEN<br /><br />", 10000, "tooltip-bronzeOven", _0x15049)
		}
	};
	if (getItem("communityCenter4") == 1)
	{
		_0x15003 = "carePackage3";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "images/carePackage3.png", "PACKAGE<br /><br />", 85000, "tooltip-carePackage", _0x15049)
		};
		_0x15003 = "pirate";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "images/pirate.png", "PIRATE<br /><br />", 500000, "tooltip-pirate", _0x15049)
		}
	};
	if (getItem("communityCenter5") == 1)
	{
		_0x15003 = "carePackage4";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "images/carePackage4.png", "PACKAGE<br /><br />", 100000, "tooltip-carePackage", _0x15049)
		};
		_0x15003 = "piratesParrot";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "images/piratesParrot.png", "PIRATE\'S PARROT<br />", 500000, "tooltip-piratesParrot", _0x15049)
		}
	}
}