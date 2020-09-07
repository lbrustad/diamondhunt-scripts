/**
 * refreshCraftables extracted from ../../deobfuscated/bundle.js at line 14790-15465
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshCraftables.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshCraftables()
{
	var _0x396D = "item-section-crafting-2";
	var _0x6B28 = [];
	var _0x6B0B = "";
	document.getElementById(_0x396D).innerHTML = "";
	var _0x3AAC = "";
	if (global_craftingType == "houseBlueprint")
	{
		_0x6B0B = "home1";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [1], ["stone", "logs", "houseBlueprint"], [20, 5, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You live a simple life and value friends and family.  You tend to help others before yourself.  You are also too nice and sometimes get taken advantage of.</i>", false, "Cottage"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "home2";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [1], ["stone", "logs", "houseBlueprint"], [100, 5, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You honor leadership and loyalty.  Treason is a crime and is severely punished and you are not afraid to kill for the better of your people.</i>", false, "Castle"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "home3";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [1], ["ironBars", "logs", "coins", "houseBlueprint"], [10, 10, 1000, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You enjoy business and long hours.  You spend most of your time out of the house making sales.</i>", false, "Mansion"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "rowBoatBlueprints")
	{
		_0x6B0B = "rowBoat";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["logs", "oakLogs", "rowBoatBlueprints"], [800, 300, 1], "Can be sent out for more fish.", false, "Row Boat"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "canoeBoatBlueprints")
	{
		_0x6B0B = "canoeBoat";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [60], ["willowLogs", "mapleLogs", "goldBars", "canoeBoatBlueprints"], [400, 200, 50, 1], "Can be sent out for more fish.", false, "Canoe"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "museumBlueprint")
	{
		_0x6B0B = "museum";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["stone", "museumBlueprint"], [100, 1], "A museum to start trade in rare items for coins.", false, "Museum"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "brewingKitMould")
	{
		_0x6B0B = "brewingKit";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [4], ["stone", "ironBars", "brewingKitMould"], [10, 5, 1], "Unlocks the brewing skill.", false, "Brewing kit"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "chainsawMould")
	{
		_0x6B0B = "chainsaw";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["ironBars", "promethiumBars", "oil", "chainsawMould"], [100, 15, 5000, 1], "Gain more logs for every tree.<br/ ><span style=\'color:grey\'>Stacks with axe</span>", false, "Chainsaw"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "wrenchMould")
	{
		_0x6B0B = "wrench";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["ironBars", "wrenchMould", "miner"], [5, 1, 1], "Ability for your miner to use a wrench, allowing him to turn on your mining machines if you run out of oil.<br /><span style=\'color:grey\'>Configure a preset to automatically turn on machines at zero oil)", false, "Wrench"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "trowelMould")
	{
		_0x6B0B = "trowel";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [58], ["ironBars", "mapleLogs", "trowelMould"], [30, 50, 1], "Increases your rate at finding seeds.", false, "Trowel"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "ringMould")
	{
		_0x6B0B = "cooldownRing1";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["silverBars", "limeQuartzMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 1%.", false, "Cooldown Ring (1)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "energyRing1";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["silverBars", "jadeMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 1%.", false, "Energy Ring (1)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "manaRing1";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["silverBars", "amethystMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 1.", false, "Mana Ring (1)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "cooldownRing2";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [40], ["goldBars", "blueMarbleMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 4%.", false, "Cooldown Ring (2)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "energyRing2";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [40], ["goldBars", "limoniteMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 4%.", false, "Energy Ring (2)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "manaRing2";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [40], ["goldBars", "tashmarineMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 2.", false, "Mana Ring (2)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "cooldownRing3";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [60], ["promethiumBars", "denseMarbleMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 10%.", false, "Cooldown Ring (3)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "energyRing3";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [60], ["promethiumBars", "fluoriteMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 10%.", false, "Energy Ring (3)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "manaRing3";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [60], ["promethiumBars", "purpleQuartzMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 3.", false, "Mana Ring (3)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "offhandIronDagger")
	{
		_0x6B0B = "offhandIronDagger";
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [35], ["daggerHandle", "daggerBlade"], [1, 1], "An offhand iron dagger.", false, "Offhand Dagger"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "boneAmuletPlus")
	{
		_0x6B0B = "boneAmuletPlus";
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["boneAmulet", "skeletonSwordMetal"], [1, 3], "An upgraded bone amulet.", false, "Bone Amulet+"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "bowBase")
	{
		_0x6B0B = "bow";
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [40], ["bowBase", "string"], [1, 50], "A bow used for combat.  Requires arrows.", false, "Bow"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
		if (getItem("magicString") > 0)
		{
			_0x6B0B = "magicBow";
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["bowBase", "magicString"], [1, 50], "A bow used for combat.  Requires arrows.<br /><span style=\'color:grey\'>25% chance of getting your arrow back after firing it.</span>", false, "Magic Bow"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "needle")
	{
		_0x6B0B = "snakeskin";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskinMask"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "snakeskin";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskinBody"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "snakeskin";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskinLegs"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "snakeskin";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskinBoots"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "snakeskin";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskinGloves"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "goldKey")
	{
		_0x6B0B = "goldKey";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["goldBars"], [5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>One roll on drop table</span>", false, "Gold Key"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "sapphireGoldKey";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["sapphire", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Two roll on drop table</span>", false, "Sapphire Key"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "emeraldGoldKey";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [40], ["emerald", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Three roll on drop table</span>", false, "Emerald Key"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "rubyGoldKey";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["ruby", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Five roll on drop table</span>", false, "Ruby Key"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "diamondGoldKey";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [60], ["diamond", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Seven roll on drop table</span>", false, "Diamond Key"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "feather")
	{
		_0x6B0B = "arrow";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["feather", "logs", "bones"], [1, 1, 1], "Used with a bow.", true, "Arrow"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "fireFeather")
	{
		_0x6B0B = "fireArrow";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [40], ["fireFeather", "lavaLogs", "bones"], [1, 1, 1], "Used with a bow.", true, "Fire Arrow"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "iceFeather")
	{
		_0x6B0B = "iceArrow";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["iceFeather", "pineLogs", "iceBones"], [1, 1, 1], "Used with a bow.", true, "Ice Arrow"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "cemeterySkeleton")
	{
		_0x6B0B = "cemeterySkeleton";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [55], ["skeletonHead", "skeletonLeftArm", "skeletonRightArm", "skeletonLeftLeg", "skeletonRightLeg", "chain", "bones"], [1, 1, 1, 1, 1, 3, 10], "Assemble the skeleton back into its true form.", false, "Cemetery Skeleton"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "fireCemeterySkeleton";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [55], ["skeletonHead", "skeletonLeftArm", "skeletonRightArm", "skeletonLeftLeg", "skeletonRightLeg", "chain", "ashes"], [1, 1, 1, 1, 1, 3, 10], "Assemble the fire skeleton back into its true form.", false, "Fire Cemetery Skeleton"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "iceCemeterySkeleton";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [55], ["skeletonHead", "skeletonLeftArm", "skeletonRightArm", "skeletonLeftLeg", "skeletonRightLeg", "chain", "iceBones"], [1, 1, 1, 1, 1, 3, 10], "Assemble the ice skeleton back into its true form.", false, "Ice Cemetery Skeleton"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "snowman")
	{
		_0x6B0B = "snowman_monster_idle_0";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [40], ["smallSnowballs", "mediumSnowball", "largeSnowball", "leftBranch", "rightBranch", "carrot", "ironBucket", "stone"], [1, 1, 1, 1, 1, 1, 1, 2], "Make a snowman!", false, "Snowman"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "cemeterySkeletonShield")
	{
		_0x6B0B = "cemeterySkeletonShield";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [65], ["cemeterySkeletonShield1", "cemeterySkeletonShield2", "cemeterySkeletonShield3"], [1, 1, 1], "Combine three shield pieces into one.", false, "Cemetery Skeleton Shield"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "snakeskin")
	{
		_0x6B0B = "snakeskinMask";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Mask"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "snakeskinBody";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskin"], [10], "A piece of equipment.", false, "Snakeskin Body"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "snakeskinLegs";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskin"], [6], "A piece of equipment.", false, "Snakeskin Legs"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "snakeskinBoots";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Boots"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "snakeskinGloves";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Gloves"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "bearFur")
	{
		_0x6B0B = "bearFurMask";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Mask"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "bearFurBody";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["bearFur"], [10], "A piece of equipment.", false, "Bear Body"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "bearFurLegs";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["bearFur"], [6], "A piece of equipment.", false, "Bear Legs"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "bearFurBoots";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Boots"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "bearFurGloves";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Gloves"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "polarBearFur")
	{
		_0x6B0B = "polarBearFurMask";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Mask"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "polarBearFurBody";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [35], ["polarBearFur"], [10], "A piece of equipment.", false, "Bear Body"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "polarBearFurLegs";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [35], ["polarBearFur"], [6], "A piece of equipment.", false, "Bear Legs"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "polarBearFurBoots";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Boots"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "polarBearFurGloves";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Gloves"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "blackSilk")
	{
		_0x6B0B = "reaperHood";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["blackSilk"], [6], "A piece of mage equipment.", false, "Reaper Hood"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "reaperBody";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["blackSilk"], [20], "A piece of mage equipment.", false, "Reaper Body"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "reaperLegs";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["blackSilk"], [12], "A piece of mage equipment.", false, "Reaper Robe"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "reaperBoots";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["blackSilk"], [6], "A piece of mage equipment.", false, "Reaper Boots"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "reaperGloves";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["blackSilk"], [6], "A piece of mage equipment.", false, "Reaper Gloves"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "batSkin")
	{
		_0x6B0B = "batSkinMask";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Mask"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "batSkinBody";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["batSkin"], [10], "A piece of equipment.", false, "Batskin Body"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "batSkinLegs";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["batSkin"], [6], "A piece of equipment.", false, "Batskin Legs"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "batSkinBoots";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Boots"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "batSkinGloves";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Gloves"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "default")
	{
		_0x6B0B = "stoneFurnace";
		if (getItem(_0x6B0B) == 0 && getItem("furnaceCapacity") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [1], ["stone"], [5], "Smelt ores into metal bars.", false, "Stone Furnace"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "bronzeOilWell";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [1], ["bronzeBars"], [5], "Gain 1 oil per second.", false, "Bronze Oil Well"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "axe";
		if (getItem(_0x6B0B) == 0 && getItem("bobsPanicQuest") == 3)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [2], ["bronzeBars", "stone"], [2, 5], "Unlocks the woodcutting skill.", false, "Axe"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "communityCenter";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [4], ["logs"], [5], "Upgrades the shop to carry more items.", false, "Community Center"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B0B = "brewingKit";
			if (getItem(_0x6B0B) == 0)
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [4], ["stone", "ironBars", "brewingKitMould"], [10, 5, 1], "Unlocks the brewing skill.", false, "Brewing kit"));
				_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
			}
		};
		_0x6B0B = "vial";
		if (true)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [5], ["glass"], [1], "Vials for making potions.", true, "Vial"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "communityCenter2";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [5], ["oakLogs"], [5], "Upgrades the shop to carry more items.", false, "Community Center 2"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "shovel";
		if (getItem(_0x6B0B) == 0 && getItem("sapphireShovel") == 0 && getItem("emeraldShovel") == 0 && getItem("rubyShovel") == 0 && getItem("diamondShovel") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [7], ["ironBars", "logs"], [5, 10], "Collects sand over time.", false, "Shovel"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "drills";
		if (getItem(_0x6B0B) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x6B0B) < 3))
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["bronzeBars"], [20], "Drill a desired ore at the cost of oil.", false, "Drills"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "bronzeFurnace";
		if (getItem(_0x6B0B) == 0 && getItem("furnaceCapacity") == 10)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [12], ["stone", "bronzeBars", "stoneFurnace"], [200, 100, 1], "Increases your furnace capacity.", false, "Bronze Furnace"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "sapphireGlassHand";
		if (getItem(_0x6B0B) == 0 && getItem(_0x6B0B + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [12], ["glass", "sapphire"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Sapphire Glass Hand"))
			}
			else
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [12], ["glass", "sapphire"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Sapphire Glass Hand"))
			};
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "communityCenter3";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [14], ["willowLogs"], [10], "Upgrades the shop to carry more items.", false, "Community Center 3"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "bonemealBin";
		if (getItem(_0x6B0B) == 0 && getItem("sapphireBonemealBin") == 0 && getItem("emeraldBonemealBin") == 0 && getItem("rubyBonemealBin") == 0 && getItem("diamondBonemealBin") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [15], ["logs"], [50], "Ability to convert bones to bonemeal.", false, "Bonemeal Bin"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "rake";
		if (getItem(_0x6B0B) == 0 && getItem("sapphireRake") == 0 && getItem("emeraldRake") == 0 && getItem("rubyRake") == 0 && getItem("diamondRake") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [17], ["silverBars", "logs", "rakeHead"], [3, 30, 1], "A tool used by bob to find higher tier seeds.", false, "Rake"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "ironFurnace";
		if (getItem(_0x6B0B) == 0 && getItem("furnaceCapacity") <= 30)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [18], ["stone", "ironBars", "bronzeFurnace"], [500, 100, 1], "Increases your furnace capacity.", false, "Iron Furnace"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "oxygenTank";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [19], ["ironBars"], [50, 1], "Allows you to explore the ocean floors.<br /><span style=\'color:grey;font-size:12pt;\'><img src=\'images/atom.png\' class=\'img-20\' /> Research may be needed to use this item.</span>", false, "Oxygen Tank"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "crushers";
		if (getItem(_0x6B0B) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x6B0B) < 3))
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["goldBars"], [5], "Mine a desired ore at the cost of oil.", false, "Crushers"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "oilStorage1";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [22], ["stone"], [1000], "Increases oil capacity to 5000", false, "Oil Storage I"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "ironOilWell";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [23], ["ironBars", "bronzeOilWell"], [25, 1], "Gain 5 oil per second.", false, "Iron Oil Well"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "ironOven";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [25], ["ironBars", "bronzeOven"], [100, 1], "Reduces the oven\'s burn rate.", false, "Iron Oven"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "silverFurnace";
		if (getItem(_0x6B0B) == 0 && getItem("furnaceCapacity") <= 75)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [28], ["silverBars", "stone", "ironFurnace"], [250, 5000, 1], "Increases your furnace capacity.", false, "Silver Furnace"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "silverOilWell";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["silverBars", "ironOilWell"], [200, 1], "Gain 10 oil per second.", false, "Silver Oil Well"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "wrench";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["ironBars", "wrenchMould", "miner"], [5, 1, 1], "Ability for your miner to use a wrench, allowing him to turn on your mining machines if you run out of oil.<br /><span style=\'color:grey\'>Configure a preset to automatically turn on machines at zero oil)", false, "Wrench"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "largeVial";
		if (getItem("researcherCrafting") >= 4)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [32], ["glass"], [20], "Large vials for making medium level potions.", true, "Large Vial"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "oilStorage2";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [33], ["stone", "oilStorage1"], [20000, 1], "Increases oil capacity to 20,000", false, "Oil Storage II"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "silverOven";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [35], ["silverBars", "ironOven"], [300, 1], "Reduces the oven\'s burn rate.", false, "Silver Oven"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "planter";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [36], ["goldBars", "glass", "tractorTire"], [10, 20, 1], "Ability to harvest and replant a seed on all plots in one click.", false, "Planter"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "unlitTorch";
		if (getItem(_0x6B0B) == 0 && getItem("torch") == 0 && getItemString("weapon") != "torch" && getItemString("weapon") != "unlitTorch")
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [37], ["goldBars", "bambooLogs"], [3, 50], "An unlit torch.", false, "Unlit Torch"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "emeraldGlassHand";
		if (getItem(_0x6B0B) == 0 && getItem(_0x6B0B + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [39], ["glass", "emerald"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Emerald Glass Hand"))
			}
			else
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [39], ["glass", "emerald"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Emerald Glass Hand"))
			};
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "ironBucket";
		if (getItem("researcherCrafting") >= 3)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [40], ["silverBars"], [50], "Collect a bucket of lava after killing a lava monster.", true, "Silver Bucket"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "chisel";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			if (getItem("researcherMining") >= 4)
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [41], ["logs", "ironBars"], [25, 10], "Used to open geodes.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires the ability to mine geodes.</span>", false, "Chisel"))
			}
			else
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [41], ["logs", "ironBars"], [25, 10], "Used to open geodes.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires the ability to mine geodes.</span>", false, "Chisel"))
			};
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "goldFurnace";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [42], ["goldBars", "stone", "silverFurnace"], [300, 20000, 1], "Increases your furnace capacity.", false, "Gold Furnace"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "communityCenter4";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [42], ["mapleLogs"], [10], "Upgrades the shop to carry more items.", false, "Community Center 4"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "goldOilWell";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [43], ["goldBars", "silverOilWell"], [500, 1], "Gain 20 oil per second.", false, "Gold Oil Well"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "oilStorage3";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [45], ["stone", "oilStorage2"], [50000, 1], "Increases oil capacity to 100,000", false, "Oil Storage III"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "goldOven";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [47], ["goldBars", "silverOven"], [600, 1], "Reduces the oven\'s burn rate.", false, "Gold Oven"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "giantDrills";
		if (getItem(_0x6B0B) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x6B0B) < 3))
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["ironBars", "silverBars"], [2000, 500], "Mine a desired ore at the cost of oil.", false, "Giant Drills"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "chainsaw";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["ironBars", "promethiumBars", "oil", "chainsawMould"], [100, 15, 5000, 1], "Gain more logs for every tree.<br/ ><span style=\'color:grey\'>Stacks with axe</span>", false, "Chainsaw"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "promethiumFurnace";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [54], ["promethiumBars", "stone", "goldFurnace"], [25, 80000, 1], "Increases your furnace capacity.", false, "Promethium Furnace"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "promethiumOilWell";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [56], ["promethiumBars", "goldOilWell"], [40, 1], "Gain 35 oil per second.", false, "Promethium Oil Well"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "trowel";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [58], ["ironBars", "mapleLogs", "trowelMould"], [30, 50, 1], "Increases your rate at finding seeds.", false, "Trowel"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "rocket";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [60], ["promethiumBars", "ironBars", "silverBars", "goldBars"], [35, 5000, 2500, 500], "Ability to travel to the moon at the cost of oil.", false, "Rocket"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "oilStorage4";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [61], ["stone", "oilStorage3"], [100000, 1], "Increases oil capacity to 250,000", false, "Oil Storage IV"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "rubyGlassHand";
		if (getItem(_0x6B0B) == 0 && getItem(_0x6B0B + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [62], ["glass", "ruby"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Ruby Glass Hand"))
			}
			else
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [62], ["glass", "ruby"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Ruby Glass Hand"))
			};
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "promethiumOven";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [63], ["promethiumBars", "goldOven"], [100, 1], "Reduces the oven\'s burn rate.", false, "Promethium Oven"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "excavators";
		if (getItem(_0x6B0B) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x6B0B) < 3))
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [65], ["ironBars", "silverBars"], [5000, 2000], "Mine a desired ore at the cost of oil.", false, "Excavator"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "charcoalFoundry";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [67], ["ironBars", "promethiumBars"], [5000, 75], "Converts logs into charcoal at the cost of oil.", false, "Charcoal Foundry"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "titaniumRocketBoosters";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [69], ["titaniumBars", "silverBars", "rocket"], [5, 1000, 1], "Ability to fire titanium boosters during a trip, increasing the rocket\'s speed.", false, "Titanium Boosters"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "titaniumFurnace";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [70], ["titaniumBars", "stone", "promethiumFurnace"], [15, 150000, 1], "Increases your furnace capacity.", false, "Titanium Furnace"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	document.getElementById(_0x396D).innerHTML += "<table class=\'table-craftables\' width=\'90%\'><tr><th>Name</th><th>Item</th><th>Level</th><th>Materials</th><th width=\'50%\x09\'>Description</th></tr>" + _0x3AAC + "</table><br />"
}