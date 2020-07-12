/**
 * refreshCraftables extracted from ../../deobfuscated/bundle.js at line 10780-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshCraftables.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshCraftables()
{
	var _0x1C85A = "item-section-crafting-2";
	var _0x1DD92 = [];
	var _0x1DD84 = "";
	document.getElementById(_0x1C85A).innerHTML = "";
	var _0x1C8F4 = "";
	if (global_craftingType == "houseBlueprint")
	{
		_0x1DD84 = "home1";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [1], ["stone", "logs", "houseBlueprint"], [20, 5, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You live a simple life and value friends and family.  You tend to help others before yourself.  You are also too nice and sometimes get taken advantage of.</i>", false, "Cottage"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "home2";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [1], ["stone", "logs", "houseBlueprint"], [100, 5, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You honor leadership and loyalty.  Treason is a crime and is severely punished and you are not afraid to kill for the better of your people.</i>", false, "Castle"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "home3";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [1], ["ironBars", "logs", "coins", "houseBlueprint"], [10, 10, 1000, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You enjoy business and long hours.  You spend most of your time out of the house making sales.</i>", false, "Mansion"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		}
	};
	if (global_craftingType == "museumBlueprint")
	{
		_0x1DD84 = "museum";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["stone", "museumBlueprint"], [100, 1], "A museum to start trade in rare items for coins.", false, "Museum"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		}
	};
	if (global_craftingType == "brewingKitMould")
	{
		_0x1DD84 = "brewingKit";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [4], ["stone", "ironBars", "brewingKitMould"], [10, 5, 1], "Unlocks the brewing skill.", false, "Brewing kit"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		}
	};
	if (global_craftingType == "offhandIronDagger")
	{
		_0x1DD84 = "offhandIronDagger";
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [35], ["daggerHandle", "daggerBlade"], [1, 1], "An offhand iron dagger.", false, "Offhand Dagger"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		}
	};
	if (global_craftingType == "boneAmuletPlus")
	{
		_0x1DD84 = "boneAmuletPlus";
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [50], ["boneAmulet", "skeletonSwordMetal"], [1, 5], "An upgraded bone amulet.", false, "Bone Amulet+"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		}
	};
	if (global_craftingType == "bowBase")
	{
		_0x1DD84 = "bow";
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [40], ["bowBase", "string"], [1, 50], "A bow used for combat.  Requires arrows.", false, "Bow"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		}
	};
	if (global_craftingType == "needle")
	{
		_0x1DD84 = "snakeskin";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskinMask"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "snakeskin";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskinBody"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "snakeskin";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskinLegs"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "snakeskin";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskinBoots"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "snakeskin";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskinGloves"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
	};
	if (global_craftingType == "feather")
	{
		_0x1DD84 = "arrow";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["feather", "logs", "bones"], [1, 1, 1], "Used to with a bow.", true, "Arrow"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
	};
	if (global_craftingType == "fireFeather")
	{
		_0x1DD84 = "fireArrow";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [40], ["fireFeather", "lavaLogs", "bones"], [1, 1, 1], "Used to with a bow.", true, "Fire Arrow"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
	};
	if (global_craftingType == "snakeskin")
	{
		_0x1DD84 = "snakeskinMask";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Mask"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "snakeskinBody";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskin"], [10], "A piece of equipment.", false, "Snakeskin Body"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "snakeskinLegs";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskin"], [6], "A piece of equipment.", false, "Snakeskin Legs"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "snakeskinBoots";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Boots"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "snakeskinGloves";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Gloves"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
	};
	if (global_craftingType == "bearFur")
	{
		_0x1DD84 = "bearFurMask";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Mask"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "bearFurBody";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [20], ["bearFur"], [10], "A piece of equipment.", false, "Bear Body"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "bearFurLegs";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [20], ["bearFur"], [6], "A piece of equipment.", false, "Bear Legs"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "bearFurBoots";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Boots"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "bearFurGloves";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Gloves"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
	};
	if (global_craftingType == "polarBearFur")
	{
		_0x1DD84 = "polarBearFurMask";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Mask"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "polarBearFurBody";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [35], ["polarBearFur"], [10], "A piece of equipment.", false, "Bear Body"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "polarBearFurLegs";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [35], ["polarBearFur"], [6], "A piece of equipment.", false, "Bear Legs"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "polarBearFurBoots";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Boots"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "polarBearFurGloves";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Gloves"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
	};
	if (global_craftingType == "batSkin")
	{
		_0x1DD84 = "batSkinMask";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Mask"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "batSkinBody";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [30], ["batSkin"], [10], "A piece of equipment.", false, "Batskin Body"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "batSkinLegs";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [30], ["batSkin"], [6], "A piece of equipment.", false, "Batskin Legs"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "batSkinBoots";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Boots"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "batSkinGloves";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Gloves"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
	};
	if (global_craftingType == "default")
	{
		_0x1DD84 = "stoneFurnace";
		if (getItem(_0x1DD84) == 0 && getItem("furnaceCapacity") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [1], ["stone"], [5], "Smelt ores into metal bars.", false, "Stone Furnace"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "bronzeOilWell";
		if (getItem(_0x1DD84) == 0 && getItem("ironOilWell") == 0 && getItem("silverOilWell") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [1], ["bronzeBars"], [5], "Gain 1 oil per second.", false, "Bronze Oil Well"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "axe";
		if (getItem(_0x1DD84) == 0 && getItem("bobsPanicQuest") == 3)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [2], ["bronzeBars", "stone"], [2, 20], "Unlocks the woodcutting skill.", false, "Axe"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "communityCenter";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [4], ["logs"], [5], "Upgrades the shop to carry more items.", false, "Community Center"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "vial";
		if (true)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [5], ["glass"], [1], "Vials for making potions.", true, "Vial"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "communityCenter2";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [5], ["oakLogs"], [5], "Upgrades the shop to carry more items.", false, "Community Center 2"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "shovel";
		if (getItem(_0x1DD84) == 0 && getItem("sapphireShovel") == 0 && getItem("emeraldShovel") == 0 && getItem("rubyShovel") == 0 && getItem("diamondShovel") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [7], ["ironBars", "logs"], [5, 10], "Collects sand over time.", false, "Shovel"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "drills";
		if (getItem(_0x1DD84) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x1DD84) < 3))
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["bronzeBars"], [20], "Drill a desired ore at the cost of oil.", false, "Drills"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "bronzeFurnace";
		if (getItem(_0x1DD84) == 0 && getItem("furnaceCapacity") == 10)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [12], ["stone", "bronzeBars", "stoneFurnace"], [200, 100, 1], "Increases your furnace capacity.", false, "Bronze Furnace"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "sapphireGlassHand";
		if (getItem(_0x1DD84) == 0 && getItem(_0x1DD84 + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [12], ["glass", "sapphire"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Sapphire Glass Hand"))
			}
			else
			{
				_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [12], ["glass", "sapphire"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Sapphire Glass Hand"))
			};
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "communityCenter3";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [14], ["willowLogs"], [10], "Upgrades the shop to carry more items.", false, "Community Center 3"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "bonemealBin";
		if (getItem(_0x1DD84) == 0 && getItem("sapphireBonemealBin") == 0 && getItem("emeraldBonemealBin") == 0 && getItem("rubyBonemealBin") == 0 && getItem("diamondBonemealBin") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [15], ["logs"], [50], "Ability to convert bones to bonemeal.", false, "Bonemeal Bin"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "rake";
		if (getItem(_0x1DD84) == 0 && getItem("sapphireRake") == 0 && getItem("emeraldRake") == 0 && getItem("rubyRake") == 0 && getItem("diamondRake") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [17], ["silverBars", "logs", "rakeHead"], [3, 30, 1], "A tool used by bob to find higher tier seeds.", false, "Rake"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "ironFurnace";
		if (getItem(_0x1DD84) == 0 && getItem("furnaceCapacity") <= 30)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [18], ["stone", "ironBars", "bronzeFurnace"], [500, 100, 1], "Increases your furnace capacity.", false, "Iron Furnace"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "oxygenTank";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [19], ["ironBars"], [50, 1], "Allows you to explore the ocean floors.<br /><span style=\'color:grey;font-size:12pt;\'><img src=\'images/atom.png\' class=\'img-20\' /> Research may be needed to use this item.</span>", false, "Oxygen Tank"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "crushers";
		if (getItem(_0x1DD84) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x1DD84) < 3))
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [20], ["goldBars"], [5], "Mine a desired ore at the cost of oil.", false, "Crushers"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "oilStorage1";
		if (getItem(_0x1DD84) == 0 && getItem("oilStorage2") == 0 && getItem("oilStorage3") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [22], ["stone"], [1000], "Increases oil capacity to 5000", false, "Oil Storage I"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "ironOilWell";
		if (getItem(_0x1DD84) == 0 && getItem("silverOilWell") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [23], ["ironBars", "bronzeOilWell"], [25, 1], "Gain 5 oil per second.", false, "Iron Oil Well"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "ironOven";
		if (getItem(_0x1DD84) == 0 && getItem("silverOven") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [25], ["ironBars", "bronzeOven"], [100, 1], "Reduces the oven\'s burn rate.", false, "Iron Oven"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "silverFurnace";
		if (getItem(_0x1DD84) == 0 && getItem("furnaceCapacity") <= 75)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [28], ["silverBars", "stone", "ironFurnace"], [250, 5000, 1], "Increases your furnace capacity.", false, "Silver Furnace"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "silverOilWell";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [30], ["silverBars", "ironOilWell"], [200, 1], "Gain 10 oil per second.", false, "Silver Oil Well"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "largeVial";
		if (getItem("researcherCrafting") >= 4)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [32], ["glass"], [20], "Large vials for making medium level potions.", true, "Large Vial"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "oilStorage2";
		if (getItem(_0x1DD84) == 0 && getItem("oilStorage3") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [33], ["stone", "oilStorage1"], [20000, 1], "Increases oil capacity to 20,000", false, "Oil Storage II"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "silverOven";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [35], ["silverBars", "ironOven"], [300, 1], "Reduces the oven\'s burn rate.", false, "Silver Oven"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "unlitTorch";
		if (getItem(_0x1DD84) == 0 && getItem("torch") == 0 && getItemString("weapon") != "torch" && getItemString("weapon") != "unlitTorch")
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [37], ["goldBars", "bambooLogs"], [3, 50], "An unlit torch.", false, "Unlit Torch"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "emeraldGlassHand";
		if (getItem(_0x1DD84) == 0 && getItem(_0x1DD84 + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [39], ["glass", "emerald"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Emerald Glass Hand"))
			}
			else
			{
				_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [39], ["glass", "emerald"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Emerald Glass Hand"))
			};
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "ironBucket";
		if (getItem("researcherCrafting") >= 3)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [40], ["silverBars"], [50], "Collect a bucket of lava after killing a lava monster.", true, "Silver Bucket"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "goldFurnace";
		if (getItem(_0x1DD84) == 0 && getItem("furnaceCapacity") <= 150)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [42], ["goldBars", "stone", "silverFurnace"], [300, 20000, 1], "Increases your furnace capacity.", false, "Gold Furnace"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "oilStorage3";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [45], ["stone", "oilStorage2"], [50000, 1], "Increases oil capacity to 100,000", false, "Oil Storage III"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		}
	};
	document.getElementById(_0x1C85A).innerHTML += "<table class=\'table-craftables\' width=\'90%\'><tr><th>Name</th><th>Item</th><th>Level</th><th>Materials</th><th width=\'50%\x09\'>Description</th></tr>" + _0x1C8F4 + "</table><br />"
}