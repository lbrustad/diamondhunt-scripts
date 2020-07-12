'use strict';

function refreshCraftables()
{
	var SCROLL_ID = "item-section-crafting-2";
	var clocks = [];
	var class_name = "";
	document.getElementById(SCROLL_ID).innerHTML = "";
	var pix_color = "";
	if (global_craftingType == "houseBlueprint")
	{
		class_name = "home1";
		if (getItem(class_name) == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [1], ["stone", "logs", "houseBlueprint"], [20, 5, 1], "A new home to live in.<br /><br /><i style='font-size:12pt'>You live a simple life and value friends and family.  You tend to help others before yourself.  You are also too nice and sometimes get taken advantage of.</i>", false, "Cottage");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "home2";
		if (getItem(class_name) == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [1], ["stone", "logs", "houseBlueprint"], [100, 5, 1], "A new home to live in.<br /><br /><i style='font-size:12pt'>You honor leadership and loyalty.  Treason is a crime and is severely punished and you are not afraid to kill for the better of your people.</i>", false, "Castle");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "home3";
		if (getItem(class_name) == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [1], ["ironBars", "logs", "coins", "houseBlueprint"], [10, 10, 1000, 1], "A new home to live in.<br /><br /><i style='font-size:12pt'>You enjoy business and long hours.  You spend most of your time out of the house making sales.</i>", false, "Mansion");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
	}
	if (global_craftingType == "museumBlueprint")
	{
		class_name = "museum";
		if (getItem(class_name) == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [10], ["stone", "museumBlueprint"], [100, 1], "A museum to start trade in rare items for coins.", false, "Museum");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
	}
	if (global_craftingType == "brewingKitMould")
	{
		class_name = "brewingKit";
		if (getItem(class_name) == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [4], ["stone", "ironBars", "brewingKitMould"], [10, 5, 1], "Unlocks the brewing skill.", false, "Brewing kit");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
	}
	if (global_craftingType == "offhandIronDagger")
	{
		class_name = "offhandIronDagger";
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [35], ["daggerHandle", "daggerBlade"], [1, 1], "An offhand iron dagger.", false, "Offhand Dagger");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
	}
	if (global_craftingType == "boneAmuletPlus")
	{
		class_name = "boneAmuletPlus";
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [50], ["boneAmulet", "skeletonSwordMetal"], [1, 5], "An upgraded bone amulet.", false, "Bone Amulet+");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
	}
	if (global_craftingType == "bowBase")
	{
		class_name = "bow";
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [40], ["bowBase", "string"], [1, 50], "A bow used for combat.  Requires arrows.", false, "Bow");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
	}
	if (global_craftingType == "needle")
	{
		class_name = "snakeskin";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [10], ["snakeskinMask"], [1], "Undo snakeskin armour.", false, "Snakeskin");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "snakeskin";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [10], ["snakeskinBody"], [1], "Undo snakeskin armour.", false, "Snakeskin");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "snakeskin";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [10], ["snakeskinLegs"], [1], "Undo snakeskin armour.", false, "Snakeskin");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "snakeskin";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [10], ["snakeskinBoots"], [1], "Undo snakeskin armour.", false, "Snakeskin");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "snakeskin";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [10], ["snakeskinGloves"], [1], "Undo snakeskin armour.", false, "Snakeskin");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
	}
	if (global_craftingType == "feather")
	{
		class_name = "arrow";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [10], ["feather", "logs", "bones"], [1, 1, 1], "Used to with a bow.", true, "Arrow");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
	}
	if (global_craftingType == "fireFeather")
	{
		class_name = "fireArrow";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [40], ["fireFeather", "lavaLogs", "bones"], [1, 1, 1], "Used to with a bow.", true, "Fire Arrow");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
	}
	if (global_craftingType == "snakeskin")
	{
		class_name = "snakeskinMask";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Mask");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "snakeskinBody";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [10], ["snakeskin"], [10], "A piece of equipment.", false, "Snakeskin Body");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "snakeskinLegs";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [10], ["snakeskin"], [6], "A piece of equipment.", false, "Snakeskin Legs");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "snakeskinBoots";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Boots");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "snakeskinGloves";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Gloves");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
	}
	if (global_craftingType == "bearFur")
	{
		class_name = "bearFurMask";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Mask");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "bearFurBody";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [20], ["bearFur"], [10], "A piece of equipment.", false, "Bear Body");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "bearFurLegs";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [20], ["bearFur"], [6], "A piece of equipment.", false, "Bear Legs");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "bearFurBoots";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Boots");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "bearFurGloves";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Gloves");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
	}
	if (global_craftingType == "polarBearFur")
	{
		class_name = "polarBearFurMask";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Mask");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "polarBearFurBody";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [35], ["polarBearFur"], [10], "A piece of equipment.", false, "Bear Body");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "polarBearFurLegs";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [35], ["polarBearFur"], [6], "A piece of equipment.", false, "Bear Legs");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "polarBearFurBoots";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Boots");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "polarBearFurGloves";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Gloves");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
	}
	if (global_craftingType == "batSkin")
	{
		class_name = "batSkinMask";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Mask");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "batSkinBody";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [30], ["batSkin"], [10], "A piece of equipment.", false, "Batskin Body");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "batSkinLegs";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [30], ["batSkin"], [6], "A piece of equipment.", false, "Batskin Legs");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "batSkinBoots";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Boots");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		class_name = "batSkinGloves";
		clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Gloves");
		pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
	}
	if (global_craftingType == "default")
	{
		class_name = "stoneFurnace";
		if (getItem(class_name) == 0 && getItem("furnaceCapacity") == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [1], ["stone"], [5], "Smelt ores into metal bars.", false, "Stone Furnace");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "bronzeOilWell";
		if (getItem(class_name) == 0 && getItem("ironOilWell") == 0 && getItem("silverOilWell") == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [1], ["bronzeBars"], [5], "Gain 1 oil per second.", false, "Bronze Oil Well");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "axe";
		if (getItem(class_name) == 0 && getItem("bobsPanicQuest") == 3)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [2], ["bronzeBars", "stone"], [2, 20], "Unlocks the woodcutting skill.", false, "Axe");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "communityCenter";
		if (getItem(class_name) == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [4], ["logs"], [5], "Upgrades the shop to carry more items.", false, "Community Center");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "vial";
		if (true)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [5], ["glass"], [1], "Vials for making potions.", true, "Vial");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "communityCenter2";
		if (getItem(class_name) == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [5], ["oakLogs"], [5], "Upgrades the shop to carry more items.", false, "Community Center 2");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "shovel";
		if (getItem(class_name) == 0 && getItem("sapphireShovel") == 0 && getItem("emeraldShovel") == 0 && getItem("rubyShovel") == 0 && getItem("diamondShovel") == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [7], ["ironBars", "logs"], [5, 10], "Collects sand over time.", false, "Shovel");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "drills";
		if (getItem(class_name) == 0 || getItem("researcherMining") >= 3 && getItem(class_name) < 3)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [10], ["bronzeBars"], [20], "Drill a desired ore at the cost of oil.", false, "Drills");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "bronzeFurnace";
		if (getItem(class_name) == 0 && getItem("furnaceCapacity") == 10)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [12], ["stone", "bronzeBars", "stoneFurnace"], [200, 100, 1], "Increases your furnace capacity.", false, "Bronze Furnace");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "sapphireGlassHand";
		if (getItem(class_name) == 0 && getItem(class_name + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [12], ["glass", "sapphire"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style='color:green'><img src='images/atom.png' class='img-20' /> Requires a Museum</span>", false, "Sapphire Glass Hand");
			}
			else
			{
				clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [12], ["glass", "sapphire"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style='color:red'><img src='images/atom.png' class='img-20' /> Requires a Museum</span>", false, "Sapphire Glass Hand");
			}
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "communityCenter3";
		if (getItem(class_name) == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [14], ["willowLogs"], [10], "Upgrades the shop to carry more items.", false, "Community Center 3");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "bonemealBin";
		if (getItem(class_name) == 0 && getItem("sapphireBonemealBin") == 0 && getItem("emeraldBonemealBin") == 0 && getItem("rubyBonemealBin") == 0 && getItem("diamondBonemealBin") == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [15], ["logs"], [50], "Ability to convert bones to bonemeal.", false, "Bonemeal Bin");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "rake";
		if (getItem(class_name) == 0 && getItem("sapphireRake") == 0 && getItem("emeraldRake") == 0 && getItem("rubyRake") == 0 && getItem("diamondRake") == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [17], ["silverBars", "logs", "rakeHead"], [3, 30, 1], "A tool used by bob to find higher tier seeds.", false, "Rake");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "ironFurnace";
		if (getItem(class_name) == 0 && getItem("furnaceCapacity") <= 30)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [18], ["stone", "ironBars", "bronzeFurnace"], [500, 100, 1], "Increases your furnace capacity.", false, "Iron Furnace");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "oxygenTank";
		if (getItem(class_name) == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [19], ["ironBars"], [50, 1], "Allows you to explore the ocean floors.<br /><span style='color:grey;font-size:12pt;'><img src='images/atom.png' class='img-20' /> Research may be needed to use this item.</span>", false, "Oxygen Tank");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "crushers";
		if (getItem(class_name) == 0 || getItem("researcherMining") >= 3 && getItem(class_name) < 3)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [20], ["goldBars"], [5], "Mine a desired ore at the cost of oil.", false, "Crushers");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "oilStorage1";
		if (getItem(class_name) == 0 && getItem("oilStorage2") == 0 && getItem("oilStorage3") == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [22], ["stone"], [1000], "Increases oil capacity to 5000", false, "Oil Storage I");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "ironOilWell";
		if (getItem(class_name) == 0 && getItem("silverOilWell") == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [23], ["ironBars", "bronzeOilWell"], [25, 1], "Gain 5 oil per second.", false, "Iron Oil Well");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "ironOven";
		if (getItem(class_name) == 0 && getItem("silverOven") == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [25], ["ironBars", "bronzeOven"], [100, 1], "Reduces the oven's burn rate.", false, "Iron Oven");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "silverFurnace";
		if (getItem(class_name) == 0 && getItem("furnaceCapacity") <= 75)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [28], ["silverBars", "stone", "ironFurnace"], [250, 5000, 1], "Increases your furnace capacity.", false, "Silver Furnace");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "silverOilWell";
		if (getItem(class_name) == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [30], ["silverBars", "ironOilWell"], [200, 1], "Gain 10 oil per second.", false, "Silver Oil Well");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "largeVial";
		if (getItem("researcherCrafting") >= 4)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [32], ["glass"], [20], "Large vials for making medium level potions.", true, "Large Vial");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "oilStorage2";
		if (getItem(class_name) == 0 && getItem("oilStorage3") == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [33], ["stone", "oilStorage1"], [20000, 1], "Increases oil capacity to 20,000", false, "Oil Storage II");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "silverOven";
		if (getItem(class_name) == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [35], ["silverBars", "ironOven"], [300, 1], "Reduces the oven's burn rate.", false, "Silver Oven");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "unlitTorch";
		if (getItem(class_name) == 0 && getItem("torch") == 0 && getItemString("weapon") != "torch" && getItemString("weapon") != "unlitTorch")
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [37], ["goldBars", "bambooLogs"], [3, 50], "An unlit torch.", false, "Unlit Torch");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "emeraldGlassHand";
		if (getItem(class_name) == 0 && getItem(class_name + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [39], ["glass", "emerald"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style='color:green'><img src='images/atom.png' class='img-20' /> Requires a Museum</span>", false, "Emerald Glass Hand");
			}
			else
			{
				clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [39], ["glass", "emerald"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style='color:red'><img src='images/atom.png' class='img-20' /> Requires a Museum</span>", false, "Emerald Glass Hand");
			}
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "ironBucket";
		if (getItem("researcherCrafting") >= 3)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [40], ["silverBars"], [50], "Collect a bucket of lava after killing a lava monster.", true, "Silver Bucket");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "goldFurnace";
		if (getItem(class_name) == 0 && getItem("furnaceCapacity") <= 150)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [42], ["goldBars", "stone", "silverFurnace"], [300, 20000, 1], "Increases your furnace capacity.", false, "Gold Furnace");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
		class_name = "oilStorage3";
		if (getItem(class_name) == 0)
		{
			clocks[class_name] = new CraftingRecipe(class_name, ["crafting"], [45], ["stone", "oilStorage2"], [50000, 1], "Increases oil capacity to 100,000", false, "Oil Storage III");
			pix_color = pix_color + addRecipeToTable(clocks[class_name], SCROLL_ID);
		}
	}
	document.getElementById(SCROLL_ID).innerHTML += "<table class='table-craftables' width='90%'><tr><th>Name</th><th>Item</th><th>Level</th><th>Materials</th><th width='50%\t'>Description</th></tr>" + pix_color + "</table><br />";
};
