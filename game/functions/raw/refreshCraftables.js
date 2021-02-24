/**
 * refreshCraftables extracted from ../../deobfuscated/bundle.js at line 18237-19116
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshCraftables.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshCraftables()
{
	var _0x15049 = "item-section-crafting-2";
	var _0x18F50 = [];
	var _0x18F2D = "";
	document.getElementById(_0x15049).innerHTML = "";
	var _0x151CA = "";
	if (global_craftingType == "houseBlueprint")
	{
		_0x18F2D = "home1";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [1], ["stone", "logs", "houseBlueprint"], [20, 5, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You live a simple life and value friends and family.  You tend to help others before yourself.  You are also too nice and sometimes get taken advantage of.</i>", false, "Cottage"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "home2";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [1], ["stone", "logs", "houseBlueprint"], [100, 5, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You honor leadership and loyalty.  Treason is a crime and is severely punished and you are not afraid to kill for the better of your people.</i>", false, "Castle"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "home3";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [1], ["ironBars", "logs", "coins", "houseBlueprint"], [10, 10, 1000, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You enjoy business and long hours.  You spend most of your time out of the house making sales.</i>", false, "Mansion"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "rowBoatBlueprints")
	{
		_0x18F2D = "rowBoat";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["logs", "oakLogs", "rowBoatBlueprints"], [800, 300, 1], "Can be sent out for more fish.", false, "Row Boat"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "canoeBoatBlueprints")
	{
		_0x18F2D = "canoeBoat";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["willowLogs", "mapleLogs", "goldBars", "canoeBoatBlueprints"], [400, 200, 50, 1], "Can be sent out for more fish.", false, "Canoe"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "museumBlueprint")
	{
		_0x18F2D = "museum";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["stone", "museumBlueprint"], [100, 1], "A museum to start trade in rare items for coins.", false, "Museum"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "brewingKitMould")
	{
		_0x18F2D = "brewingKit";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [4], ["stone", "ironBars", "brewingKitMould"], [10, 5, 1], "Unlocks the brewing skill.", false, "Brewing kit"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "watchMould")
	{
		_0x18F2D = "watch";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [43], ["goldBars", "planter", "watchMould"], [100, 1, 1], "Ability for bob the farmer to use the planter for you, automatically planting seeds.", false, "Watch"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType.startsWith("promethium") && global_craftingType.endsWith("Mould"))
	{
		_0x18F2D = "promethiumHelmet";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [70], ["promethiumBars", "promethiumHelmetMould"], [30, 1], "A piece of promethium armour.", false, "Promethium Helmet"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
		_0x18F2D = "promethiumBody";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [70], ["promethiumBars", "promethiumBodyMould"], [80, 1], "A piece of promethium armour.", false, "Promethium Body"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
		_0x18F2D = "promethiumLegs";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [70], ["promethiumBars", "promethiumLegsMould"], [60, 1], "A piece of promethium armour.", false, "Promethium Legs"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
		_0x18F2D = "promethiumBoots";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [70], ["promethiumBars", "promethiumBootsMould"], [20, 1], "A piece of promethium armour.", false, "Promethium Boots"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
		_0x18F2D = "promethiumGloves";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [70], ["promethiumBars", "promethiumGlovesMould"], [20, 1], "A piece of promethium armour.", false, "Promethium Gloves"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "spyglassMould" && getItem("spyglass") == 0)
	{
		_0x18F2D = "spyglass";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [65], ["glass", "mapleLogs", "spyglassMould"], [80, 200, 1], "Ability for your pirate to find green treaure maps.", false, "Spyglass"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "chainsawMould")
	{
		_0x18F2D = "chainsaw";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["ironBars", "promethiumBars", "oil", "chainsawMould"], [100, 15, 5000, 1], "Gain more logs for every tree.<br/ ><span style=\'color:grey\'>Stacks with axe</span>", false, "Chainsaw"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "wrenchMould")
	{
		_0x18F2D = "wrench";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["ironBars", "wrenchMould", "miner"], [5, 1, 1], "Ability for your miner to use a wrench, allowing him to turn on your mining machines if you run out of oil.<br /><span style=\'color:grey\'>Configure a preset to automatically turn on machines at zero oil)", false, "Wrench"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "trowelMould")
	{
		_0x18F2D = "trowel";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [58], ["ironBars", "mapleLogs", "trowelMould"], [30, 50, 1], "Increases your rate at finding seeds.", false, "Trowel"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "ringMould")
	{
		_0x18F2D = "cooldownRing1";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["silverBars", "limeQuartzMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 1%.", false, "Cooldown Ring (1)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "energyRing1";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["silverBars", "jadeMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 1%.", false, "Energy Ring (1)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "manaRing1";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["silverBars", "amethystMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 1.", false, "Mana Ring (1)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "cooldownRing2";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["goldBars", "blueMarbleMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 4%.", false, "Cooldown Ring (2)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "energyRing2";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["goldBars", "limoniteMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 4%.", false, "Energy Ring (2)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "manaRing2";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["goldBars", "tashmarineMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 2.", false, "Mana Ring (2)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "cooldownRing3";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["promethiumBars", "denseMarbleMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 10%.", false, "Cooldown Ring (3)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "energyRing3";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["promethiumBars", "fluoriteMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 10%.", false, "Energy Ring (3)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "manaRing3";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["promethiumBars", "purpleQuartzMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 3.", false, "Mana Ring (3)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "cooldownRing4";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [80], ["titaniumBars", "crystalPrismeMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 15%.", false, "Cooldown Ring (4)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "energyRing4";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [80], ["titaniumBars", "amberMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 15%.", false, "Energy Ring (4)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "manaRing4";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [80], ["titaniumBars", "tanzaniteMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 5.", false, "Mana Ring (4)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "offhandIronDagger")
	{
		_0x18F2D = "offhandIronDagger";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [35], ["daggerHandle", "daggerBlade"], [1, 1], "An offhand iron dagger.", false, "Offhand Dagger"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "offhandScythe")
	{
		_0x18F2D = "offhandScythe";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [35], ["offhandIronDagger", "scytheBlade"], [1, 1], "An upgraded offhand dagger.", false, "Offhand Dagger+"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "boneAmuletPlus")
	{
		_0x18F2D = "boneAmuletPlus";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["boneAmulet", "skeletonSwordMetal"], [1, 3], "An upgraded bone amulet.", false, "Bone Amulet+"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "bowBase")
	{
		_0x18F2D = "bow";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["bowBase", "string"], [1, 50], "A bow used for combat.  Requires arrows.", false, "Bow"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
		if (getItem("magicString") > 0)
		{
			_0x18F2D = "magicBow";
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["bowBase", "magicString"], [1, 50], "A bow used for combat.  Requires arrows.<br /><span style=\'color:grey\'>25% chance of getting your arrow back after firing it.</span>", false, "Magic Bow"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "needle")
	{
		_0x18F2D = "snakeskin";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskinMask"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "snakeskin";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskinBody"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "snakeskin";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskinLegs"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "snakeskin";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskinBoots"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "snakeskin";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskinGloves"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "goldKey")
	{
		_0x18F2D = "goldKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["goldBars"], [5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>One roll on drop table</span>", false, "Gold Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "sapphireGoldKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["sapphire", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Two roll on drop table</span>", false, "Sapphire Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "emeraldGoldKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["emerald", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Three roll on drop table</span>", false, "Emerald Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "rubyGoldKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["ruby", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Five roll on drop table</span>", false, "Ruby Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "diamondGoldKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["diamond", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Seven roll on drop table</span>", false, "Diamond Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "promethiumKey")
	{
		_0x18F2D = "promethiumKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["promethiumBars"], [5], "A key to open a green treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>One roll on drop table</span>", false, "Promethium Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "sapphirePromethiumKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["sapphire", "promethiumBars"], [1, 5], "A key to open a green treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Two roll on drop table</span>", false, "Sapphire Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "emeraldPromethiumKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["emerald", "promethiumBars"], [1, 5], "A key to open a green treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Three roll on drop table</span>", false, "Emerald Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "rubyPromethiumKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [70], ["ruby", "promethiumBars"], [1, 5], "A key to open a green treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Five roll on drop table</span>", false, "Ruby Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "diamondPromethiumKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [80], ["diamond", "promethiumBars"], [1, 5], "A key to open a green treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Seven roll on drop table</span>", false, "Diamond Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "feather")
	{
		_0x18F2D = "arrow";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["feather", "logs", "bones"], [1, 1, 1], "Used with a bow.", true, "Arrow"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "fireFeather")
	{
		_0x18F2D = "fireArrow";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["fireFeather", "lavaLogs", "bones"], [1, 1, 1], "Used with a bow.", true, "Fire Arrow"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "maceSpikes")
	{
		_0x18F2D = "arrowPlus";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["feather", "mapleLogs", "maceSpikes"], [1, 1, 1], "Used with a bow.", true, "Arrow+"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "stoneMacePlus";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["stoneMace", "maceSpikes"], [1, 200], "Upgrades your mace for additional spike damage.", false, "Stone Mace+"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "iceFeather")
	{
		_0x18F2D = "iceArrow";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["iceFeather", "pineLogs", "iceBones"], [1, 1, 1], "Used with a bow.", true, "Ice Arrow"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "cemeterySkeleton")
	{
		_0x18F2D = "cemeterySkeleton";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [55], ["skeletonHead", "skeletonLeftArm", "skeletonRightArm", "skeletonLeftLeg", "skeletonRightLeg", "chain", "bones"], [1, 1, 1, 1, 1, 3, 10], "Assemble the skeleton back into its true form.", false, "Cemetery Skeleton"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "fireCemeterySkeleton";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [55], ["skeletonHead", "skeletonLeftArm", "skeletonRightArm", "skeletonLeftLeg", "skeletonRightLeg", "chain", "ashes"], [1, 1, 1, 1, 1, 3, 10], "Assemble the fire skeleton back into its true form.", false, "Fire Cemetery Skeleton"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "iceCemeterySkeleton";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [55], ["skeletonHead", "skeletonLeftArm", "skeletonRightArm", "skeletonLeftLeg", "skeletonRightLeg", "chain", "iceBones"], [1, 1, 1, 1, 1, 3, 10], "Assemble the ice skeleton back into its true form.", false, "Ice Cemetery Skeleton"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "snowman")
	{
		_0x18F2D = "snowman_monster_idle_0";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["smallSnowballs", "mediumSnowball", "largeSnowball", "leftBranch", "rightBranch", "carrot", "ironBucket", "stone"], [1, 1, 1, 1, 1, 1, 1, 2], "Make a snowman!", false, "Snowman"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "cemeterySkeletonShield")
	{
		_0x18F2D = "cemeterySkeletonShield";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [65], ["cemeterySkeletonShield1", "cemeterySkeletonShield2", "cemeterySkeletonShield3"], [1, 1, 1], "Combine three shield pieces into one.", false, "Cemetery Skeleton Shield"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "snakeskin")
	{
		_0x18F2D = "snakeskinMask";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Mask"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "snakeskinBody";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskin"], [10], "A piece of equipment.", false, "Snakeskin Body"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "snakeskinLegs";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskin"], [6], "A piece of equipment.", false, "Snakeskin Legs"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "snakeskinBoots";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Boots"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "snakeskinGloves";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Gloves"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "bearFur")
	{
		_0x18F2D = "bearFurMask";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Mask"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "bearFurBody";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["bearFur"], [10], "A piece of equipment.", false, "Bear Body"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "bearFurLegs";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["bearFur"], [6], "A piece of equipment.", false, "Bear Legs"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "bearFurBoots";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Boots"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "bearFurGloves";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Gloves"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "polarBearFur")
	{
		_0x18F2D = "polarBearFurMask";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Mask"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "polarBearFurBody";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [35], ["polarBearFur"], [10], "A piece of equipment.", false, "Bear Body"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "polarBearFurLegs";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [35], ["polarBearFur"], [6], "A piece of equipment.", false, "Bear Legs"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "polarBearFurBoots";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Boots"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "polarBearFurGloves";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Gloves"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "blackSilk")
	{
		_0x18F2D = "reaperHood";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["blackSilk"], [6], "A piece of mage equipment.", false, "Reaper Hood"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "reaperBody";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["blackSilk"], [20], "A piece of mage equipment.", false, "Reaper Body"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "reaperLegs";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["blackSilk"], [12], "A piece of mage equipment.", false, "Reaper Robe"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "reaperBoots";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["blackSilk"], [6], "A piece of mage equipment.", false, "Reaper Boots"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "reaperGloves";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["blackSilk"], [6], "A piece of mage equipment.", false, "Reaper Gloves"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "oilFactoryBlueprint")
	{
		_0x18F2D = "oilFactory";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [55], ["ironBars", "silverBars", "goldBars", "oilFactoryBlueprint"], [1000, 500, 250, 1], "Ability to hire workers for additional oil prodcution.", false, "Oil Factory"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "promethiumOilFactory";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [64], ["oilFactory", "promethiumBars", "promethiumOilFactoryBlueprint"], [1, 120, 1], "Increases capacity workers by 10.", false, "Promethium Oil Factory"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "titaniumOilFactory";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [72], ["promethiumOilFactory", "titaniumBars", "titaniumOilFactoryBlueprint"], [1, 30, 1], "Increases capacity workers by 10.", false, "Titanium Oil Factory"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "batSkin")
	{
		_0x18F2D = "batSkinMask";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Mask"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "batSkinBody";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["batSkin"], [10], "A piece of equipment.", false, "Batskin Body"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "batSkinLegs";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["batSkin"], [6], "A piece of equipment.", false, "Batskin Legs"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "batSkinBoots";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Boots"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "batSkinGloves";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Gloves"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "default")
	{
		_0x18F2D = "stoneFurnace";
		if (getItem(_0x18F2D) == 0 && getItem("furnaceCapacity") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [1], ["stone"], [5], "Smelt ores into metal bars.", false, "Stone Furnace"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "bronzeOilWell";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [1], ["bronzeBars"], [5], "Gain 1 oil per second.", false, "Bronze Oil Well"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "axe";
		if (getItem(_0x18F2D) == 0 && getItem("bobsPanicQuest") == 3)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [2], ["bronzeBars", "stone"], [2, 5], "Unlocks the woodcutting skill.", false, "Axe"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "communityCenter";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [4], ["logs"], [5], "Upgrades the shop to carry more items.", false, "Community Center"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F2D = "brewingKit";
			if (getItem(_0x18F2D) == 0)
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [4], ["stone", "ironBars", "brewingKitMould"], [10, 5, 1], "Unlocks the brewing skill.", false, "Brewing kit"));
				_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
			}
		};
		_0x18F2D = "vial";
		if (true)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [5], ["glass"], [1], "Vials for making potions.", true, "Vial"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "communityCenter2";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [5], ["oakLogs"], [5], "Upgrades the shop to carry more items.", false, "Community Center 2"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "shovel";
		if (getItem(_0x18F2D) == 0 && getItem("sapphireShovel") == 0 && getItem("emeraldShovel") == 0 && getItem("rubyShovel") == 0 && getItem("diamondShovel") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [7], ["ironBars", "logs"], [5, 10], "Collects sand over time.", false, "Shovel"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "drills";
		if (getItem(_0x18F2D) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x18F2D) < 3))
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["bronzeBars"], [20], "Drill a desired ore at the cost of oil.", false, "Drills"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "bronzeFurnace";
		if (getItem(_0x18F2D) == 0 && getItem("furnaceCapacity") == 10)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [12], ["stone", "bronzeBars", "stoneFurnace"], [200, 100, 1], "Increases your furnace capacity.", false, "Bronze Furnace"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "sapphireGlassHand";
		if (getItem(_0x18F2D) == 0 && getItem(_0x18F2D + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [12], ["glass", "sapphire"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Sapphire Glass Hand"))
			}
			else
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [12], ["glass", "sapphire"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Sapphire Glass Hand"))
			};
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "communityCenter3";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [14], ["willowLogs"], [10], "Upgrades the shop to carry more items.", false, "Community Center 3"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "bonemealBin";
		if (getItem(_0x18F2D) == 0 && getItem("sapphireBonemealBin") == 0 && getItem("emeraldBonemealBin") == 0 && getItem("rubyBonemealBin") == 0 && getItem("diamondBonemealBin") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [15], ["logs"], [50], "Ability to convert bones to bonemeal.", false, "Bonemeal Bin"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "rake";
		if (getItem(_0x18F2D) == 0 && getItem("sapphireRake") == 0 && getItem("emeraldRake") == 0 && getItem("rubyRake") == 0 && getItem("diamondRake") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [17], ["silverBars", "logs", "rakeHead"], [3, 30, 1], "A tool used by bob to find higher tier seeds.", false, "Rake"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "ironFurnace";
		if (getItem(_0x18F2D) == 0 && getItem("furnaceCapacity") <= 30)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [18], ["stone", "ironBars", "bronzeFurnace"], [500, 100, 1], "Increases your furnace capacity.", false, "Iron Furnace"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "oxygenTank";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [19], ["ironBars"], [50, 1], "Allows you to explore the ocean floors.<br /><span style=\'color:grey;font-size:12pt;\'><img src=\'images/atom.png\' class=\'img-20\' /> Research may be needed to use this item.</span>", false, "Oxygen Tank"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "crushers";
		if (getItem(_0x18F2D) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x18F2D) < 3))
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["goldBars"], [5], "Mine a desired ore at the cost of oil.", false, "Crushers"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "oilStorage1";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [22], ["stone"], [1000], "Increases oil capacity to 5000", false, "Oil Storage I"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "ironOilWell";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [23], ["ironBars", "bronzeOilWell"], [25, 1], "Gain 5 oil per second.", false, "Iron Oil Well"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "ironOven";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [25], ["ironBars", "bronzeOven"], [100, 1], "Reduces the oven\'s burn rate.", false, "Iron Oven"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "silverFurnace";
		if (getItem(_0x18F2D) == 0 && getItem("furnaceCapacity") <= 75)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [28], ["silverBars", "stone", "ironFurnace"], [250, 5000, 1], "Increases your furnace capacity.", false, "Silver Furnace"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "silverOilWell";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["silverBars", "ironOilWell"], [200, 1], "Gain 10 oil per second.", false, "Silver Oil Well"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "wrench";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["ironBars", "wrenchMould", "miner"], [5, 1, 1], "Ability for your miner to use a wrench, allowing him to turn on your mining machines if you run out of oil.<br /><span style=\'color:grey\'>Configure a preset to automatically turn on machines at zero oil)", false, "Wrench"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "largeVial";
		if (getItem("researcherCrafting") >= 4)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [32], ["glass"], [20], "Large vials for making medium level potions.", true, "Large Vial"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "oilStorage2";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [33], ["stone", "oilStorage1"], [20000, 1], "Increases oil capacity to 20,000", false, "Oil Storage II"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "silverOven";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [35], ["silverBars", "ironOven"], [300, 1], "Reduces the oven\'s burn rate.", false, "Silver Oven"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "planter";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [36], ["goldBars", "glass", "tractorTire"], [10, 20, 1], "Ability to harvest and replant a seed on all plots in one click.", false, "Planter"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "unlitTorch";
		if (getItem(_0x18F2D) == 0 && getItem("torch") == 0 && getItemString("weapon") != "torch" && getItemString("weapon") != "unlitTorch")
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [37], ["goldBars", "bambooLogs"], [3, 50], "An unlit torch.", false, "Unlit Torch"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "emeraldGlassHand";
		if (getItem(_0x18F2D) == 0 && getItem(_0x18F2D + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [39], ["glass", "emerald"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Emerald Glass Hand"))
			}
			else
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [39], ["glass", "emerald"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Emerald Glass Hand"))
			};
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "ironBucket";
		if (getItem("researcherCrafting") >= 3)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["silverBars"], [50], "Collect a bucket of lava after killing a lava monster.", true, "Silver Bucket"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "chisel";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			if (getItem("researcherMining") >= 4)
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [41], ["logs", "ironBars"], [25, 10], "Used to open geodes.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires the ability to mine geodes.</span>", false, "Chisel"))
			}
			else
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [41], ["logs", "ironBars"], [25, 10], "Used to open geodes.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires the ability to mine geodes.</span>", false, "Chisel"))
			};
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "goldFurnace";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [42], ["goldBars", "stone", "silverFurnace"], [300, 20000, 1], "Increases your furnace capacity.", false, "Gold Furnace"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "communityCenter4";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [42], ["mapleLogs"], [10], "Upgrades the shop to carry more items.", false, "Community Center 4"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "watch";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [43], ["goldBars", "planter", "watchMould"], [100, 1, 1], "Ability for bob the farmer to use the planter for you, automatically planting seeds.", false, "Watch"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "goldOilWell";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [43], ["goldBars", "silverOilWell"], [500, 1], "Gain 20 oil per second.", false, "Gold Oil Well"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "oilStorage3";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [45], ["stone", "oilStorage2"], [50000, 1], "Increases oil capacity to 100,000", false, "Oil Storage III"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "goldOven";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [47], ["goldBars", "silverOven"], [600, 1], "Reduces the oven\'s burn rate.", false, "Gold Oven"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "giantDrills";
		if (getItem(_0x18F2D) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x18F2D) < 3))
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["ironBars", "silverBars"], [2000, 500], "Mine a desired ore at the cost of oil.", false, "Giant Drills"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "chainsaw";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["ironBars", "promethiumBars", "oil", "chainsawMould"], [100, 15, 5000, 1], "Gain more logs for every tree.<br/ ><span style=\'color:grey\'>Stacks with axe</span>", false, "Chainsaw"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "promethiumFurnace";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [54], ["promethiumBars", "stone", "goldFurnace"], [25, 80000, 1], "Increases your furnace capacity.", false, "Promethium Furnace"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "oilFactory";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [55], ["ironBars", "silverBars", "goldBars", "oilFactoryBlueprint"], [1000, 500, 250, 1], "Ability to hire workers for additional oil prodcution.", false, "Oil Factory"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "promethiumOilWell";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [56], ["promethiumBars", "goldOilWell"], [40, 1], "Gain 35 oil per second.", false, "Promethium Oil Well"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "trowel";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [58], ["ironBars", "mapleLogs", "trowelMould"], [30, 50, 1], "Increases your rate at finding seeds.", false, "Trowel"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "communityCenter5";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [59], ["lavaLogs"], [10], "Upgrades the shop to carry more items.", false, "Community Center 5"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "rocket";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["promethiumBars", "ironBars", "silverBars", "goldBars"], [35, 5000, 2500, 500], "Ability to travel to the moon at the cost of oil.", false, "Rocket"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "oilStorage4";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [61], ["stone", "oilStorage3"], [100000, 1], "Increases oil capacity to 250,000", false, "Oil Storage IV"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "rubyGlassHand";
		if (getItem(_0x18F2D) == 0 && getItem(_0x18F2D + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [62], ["glass", "ruby"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Ruby Glass Hand"))
			}
			else
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [62], ["glass", "ruby"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Ruby Glass Hand"))
			};
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "promethiumOven";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [63], ["promethiumBars", "goldOven"], [100, 1], "Reduces the oven\'s burn rate.", false, "Promethium Oven"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "promethiumOilFactory";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [64], ["oilFactory", "promethiumBars", "promethiumOilFactoryBlueprint"], [1, 120, 1], "Increases capacity workers by 10.", false, "Promethium Oil Factory"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "excavators";
		if (getItem(_0x18F2D) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x18F2D) < 3))
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [65], ["ironBars", "silverBars"], [5000, 2000], "Mine a desired ore at the cost of oil.", false, "Excavator"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "spyglass";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [65], ["glass", "mapleLogs", "spyglassMould"], [80, 200, 1], "Ability for your pirate to find green treaure maps.", false, "Spyglass"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "charcoalFoundry";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [67], ["ironBars", "promethiumBars"], [5000, 75], "Converts logs into charcoal at the cost of oil.", false, "Charcoal Foundry"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "titaniumRocketBoosters";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [69], ["titaniumBars", "silverBars", "rocket"], [5, 1000, 1], "Ability to fire titanium boosters during a trip, increasing the rocket\'s speed.", false, "Titanium Boosters"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "titaniumFurnace";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [70], ["titaniumBars", "stone", "promethiumFurnace"], [15, 150000, 1], "Increases your furnace capacity.", false, "Titanium Furnace"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "titaniumOilFactory";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [72], ["promethiumOilFactory", "titaniumBars", "titaniumOilFactoryBlueprint"], [1, 30, 1], "Increases capacity workers by 10.", false, "Titanium Oil Factory"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "titaniumOven";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [75], ["titaniumBars", "promethiumOven"], [75, 1], "Cook food perfectly.", false, "Titanium Oven"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "oilStorage5";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [77], ["stone", "oilStorage4"], [400000, 1], "Increases oil capacity to 600,000", false, "Oil Storage V"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "titaniumCharcoalFoundry";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [78], ["ironBars", "titaniumBars", "charcoalFoundry"], [10000, 75, 1], "Increases the chance of getting charcoal for each log.", false, "Titanium Charcoal Foundry"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "diamondGlassHand";
		if (getItem(_0x18F2D) == 0 && getItem(_0x18F2D + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [80], ["glass", "diamond"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Diamond Glass Hand"))
			}
			else
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [80], ["glass", "diamond"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Diamond Glass Hand"))
			};
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "robot";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [80], ["bronzeBars", "goldBars", "promethiumBars"], [10000, 2000, 225], "A robot controlled using AI to dig through the earth for additional ore.", false, "Robot"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "shieldedRobot";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [82], ["diamondRobot", "charcoal", "lava"], [1, 1000, 100], "Ability to send your robot even deeper, where the temperature is high due to the earth\'s heat.", false, "Robot Heatshield"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "tnt";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [85], ["gunPowder", "string", "thickString", "logs"], [20, 50, 20, 20], "Can produce a powerful explosion. Should be used with care to avoid injuries.", false, "TNT"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	document.getElementById(_0x15049).innerHTML += "<table class=\'table-craftables\' width=\'90%\'><tr><th>Name</th><th>Item</th><th>Level</th><th>Materials</th><th width=\'50%\x09\'>Description</th></tr>" + _0x151CA + "</table><br />"
}