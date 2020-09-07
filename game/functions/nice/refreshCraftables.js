'use strict';

function refreshCraftables()
{
	var SCROLL_ID = "item-section-crafting-2";
	var panels = [];
	var id = "";
	document.getElementById(SCROLL_ID).innerHTML = "";
	var pix_color = "";
	if (global_craftingType == "houseBlueprint")
	{
		id = "home1";
		if (getItem(id) == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [1], ["stone", "logs", "houseBlueprint"], [20, 5, 1], "A new home to live in.<br /><br /><i style='font-size:12pt'>You live a simple life and value friends and family.  You tend to help others before yourself.  You are also too nice and sometimes get taken advantage of.</i>", false, "Cottage");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "home2";
		if (getItem(id) == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [1], ["stone", "logs", "houseBlueprint"], [100, 5, 1], "A new home to live in.<br /><br /><i style='font-size:12pt'>You honor leadership and loyalty.  Treason is a crime and is severely punished and you are not afraid to kill for the better of your people.</i>", false, "Castle");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "home3";
		if (getItem(id) == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [1], ["ironBars", "logs", "coins", "houseBlueprint"], [10, 10, 1000, 1], "A new home to live in.<br /><br /><i style='font-size:12pt'>You enjoy business and long hours.  You spend most of your time out of the house making sales.</i>", false, "Mansion");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
	}
	if (global_craftingType == "rowBoatBlueprints")
	{
		id = "rowBoat";
		if (getItem(id) == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [20], ["logs", "oakLogs", "rowBoatBlueprints"], [800, 300, 1], "Can be sent out for more fish.", false, "Row Boat");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
	}
	if (global_craftingType == "canoeBoatBlueprints")
	{
		id = "canoeBoat";
		if (getItem(id) == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [60], ["willowLogs", "mapleLogs", "goldBars", "canoeBoatBlueprints"], [400, 200, 50, 1], "Can be sent out for more fish.", false, "Canoe");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
	}
	if (global_craftingType == "museumBlueprint")
	{
		id = "museum";
		if (getItem(id) == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [10], ["stone", "museumBlueprint"], [100, 1], "A museum to start trade in rare items for coins.", false, "Museum");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
	}
	if (global_craftingType == "brewingKitMould")
	{
		id = "brewingKit";
		if (getItem(id) == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [4], ["stone", "ironBars", "brewingKitMould"], [10, 5, 1], "Unlocks the brewing skill.", false, "Brewing kit");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
	}
	if (global_craftingType == "chainsawMould")
	{
		id = "chainsaw";
		if (getItem(id) == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [50], ["ironBars", "promethiumBars", "oil", "chainsawMould"], [100, 15, 5000, 1], "Gain more logs for every tree.<br/ ><span style='color:grey'>Stacks with axe</span>", false, "Chainsaw");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
	}
	if (global_craftingType == "wrenchMould")
	{
		id = "wrench";
		if (getItem(id) == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [30], ["ironBars", "wrenchMould", "miner"], [5, 1, 1], "Ability for your miner to use a wrench, allowing him to turn on your mining machines if you run out of oil.<br /><span style='color:grey'>Configure a preset to automatically turn on machines at zero oil)", false, "Wrench");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
	}
	if (global_craftingType == "trowelMould")
	{
		id = "trowel";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [58], ["ironBars", "mapleLogs", "trowelMould"], [30, 50, 1], "Increases your rate at finding seeds.", false, "Trowel");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
	}
	if (global_craftingType == "ringMould")
	{
		id = "cooldownRing1";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [20], ["silverBars", "limeQuartzMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 1%.", false, "Cooldown Ring (1)");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "energyRing1";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [20], ["silverBars", "jadeMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 1%.", false, "Energy Ring (1)");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "manaRing1";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [20], ["silverBars", "amethystMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 1.", false, "Mana Ring (1)");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "cooldownRing2";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [40], ["goldBars", "blueMarbleMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 4%.", false, "Cooldown Ring (2)");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "energyRing2";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [40], ["goldBars", "limoniteMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 4%.", false, "Energy Ring (2)");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "manaRing2";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [40], ["goldBars", "tashmarineMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 2.", false, "Mana Ring (2)");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "cooldownRing3";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [60], ["promethiumBars", "denseMarbleMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 10%.", false, "Cooldown Ring (3)");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "energyRing3";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [60], ["promethiumBars", "fluoriteMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 10%.", false, "Energy Ring (3)");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "manaRing3";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [60], ["promethiumBars", "purpleQuartzMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 3.", false, "Mana Ring (3)");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
	}
	if (global_craftingType == "offhandIronDagger")
	{
		id = "offhandIronDagger";
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [35], ["daggerHandle", "daggerBlade"], [1, 1], "An offhand iron dagger.", false, "Offhand Dagger");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
	}
	if (global_craftingType == "boneAmuletPlus")
	{
		id = "boneAmuletPlus";
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [50], ["boneAmulet", "skeletonSwordMetal"], [1, 3], "An upgraded bone amulet.", false, "Bone Amulet+");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
	}
	if (global_craftingType == "bowBase")
	{
		id = "bow";
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [40], ["bowBase", "string"], [1, 50], "A bow used for combat.  Requires arrows.", false, "Bow");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		if (getItem("magicString") > 0)
		{
			id = "magicBow";
			panels[id] = new CraftingRecipe(id, ["crafting"], [50], ["bowBase", "magicString"], [1, 50], "A bow used for combat.  Requires arrows.<br /><span style='color:grey'>25% chance of getting your arrow back after firing it.</span>", false, "Magic Bow");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
	}
	if (global_craftingType == "needle")
	{
		id = "snakeskin";
		panels[id] = new CraftingRecipe(id, ["crafting"], [10], ["snakeskinMask"], [1], "Undo snakeskin armour.", false, "Snakeskin");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "snakeskin";
		panels[id] = new CraftingRecipe(id, ["crafting"], [10], ["snakeskinBody"], [1], "Undo snakeskin armour.", false, "Snakeskin");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "snakeskin";
		panels[id] = new CraftingRecipe(id, ["crafting"], [10], ["snakeskinLegs"], [1], "Undo snakeskin armour.", false, "Snakeskin");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "snakeskin";
		panels[id] = new CraftingRecipe(id, ["crafting"], [10], ["snakeskinBoots"], [1], "Undo snakeskin armour.", false, "Snakeskin");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "snakeskin";
		panels[id] = new CraftingRecipe(id, ["crafting"], [10], ["snakeskinGloves"], [1], "Undo snakeskin armour.", false, "Snakeskin");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
	}
	if (global_craftingType == "goldKey")
	{
		id = "goldKey";
		panels[id] = new CraftingRecipe(id, ["crafting"], [20], ["goldBars"], [5], "A key to open a treasure chest.<br /><span style='color:silver;font-size:10pt'>One roll on drop table</span>", false, "Gold Key");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "sapphireGoldKey";
		panels[id] = new CraftingRecipe(id, ["crafting"], [30], ["sapphire", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style='color:silver;font-size:10pt'>Two roll on drop table</span>", false, "Sapphire Key");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "emeraldGoldKey";
		panels[id] = new CraftingRecipe(id, ["crafting"], [40], ["emerald", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style='color:silver;font-size:10pt'>Three roll on drop table</span>", false, "Emerald Key");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "rubyGoldKey";
		panels[id] = new CraftingRecipe(id, ["crafting"], [50], ["ruby", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style='color:silver;font-size:10pt'>Five roll on drop table</span>", false, "Ruby Key");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "diamondGoldKey";
		panels[id] = new CraftingRecipe(id, ["crafting"], [60], ["diamond", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style='color:silver;font-size:10pt'>Seven roll on drop table</span>", false, "Diamond Key");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
	}
	if (global_craftingType == "feather")
	{
		id = "arrow";
		panels[id] = new CraftingRecipe(id, ["crafting"], [10], ["feather", "logs", "bones"], [1, 1, 1], "Used with a bow.", true, "Arrow");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
	}
	if (global_craftingType == "fireFeather")
	{
		id = "fireArrow";
		panels[id] = new CraftingRecipe(id, ["crafting"], [40], ["fireFeather", "lavaLogs", "bones"], [1, 1, 1], "Used with a bow.", true, "Fire Arrow");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
	}
	if (global_craftingType == "iceFeather")
	{
		id = "iceArrow";
		panels[id] = new CraftingRecipe(id, ["crafting"], [50], ["iceFeather", "pineLogs", "iceBones"], [1, 1, 1], "Used with a bow.", true, "Ice Arrow");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
	}
	if (global_craftingType == "cemeterySkeleton")
	{
		id = "cemeterySkeleton";
		panels[id] = new CraftingRecipe(id, ["crafting"], [55], ["skeletonHead", "skeletonLeftArm", "skeletonRightArm", "skeletonLeftLeg", "skeletonRightLeg", "chain", "bones"], [1, 1, 1, 1, 1, 3, 10], "Assemble the skeleton back into its true form.", false, "Cemetery Skeleton");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "fireCemeterySkeleton";
		panels[id] = new CraftingRecipe(id, ["crafting"], [55], ["skeletonHead", "skeletonLeftArm", "skeletonRightArm", "skeletonLeftLeg", "skeletonRightLeg", "chain", "ashes"], [1, 1, 1, 1, 1, 3, 10], "Assemble the fire skeleton back into its true form.", false, "Fire Cemetery Skeleton");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "iceCemeterySkeleton";
		panels[id] = new CraftingRecipe(id, ["crafting"], [55], ["skeletonHead", "skeletonLeftArm", "skeletonRightArm", "skeletonLeftLeg", "skeletonRightLeg", "chain", "iceBones"], [1, 1, 1, 1, 1, 3, 10], "Assemble the ice skeleton back into its true form.", false, "Ice Cemetery Skeleton");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
	}
	if (global_craftingType == "snowman")
	{
		id = "snowman_monster_idle_0";
		panels[id] = new CraftingRecipe(id, ["crafting"], [40], ["smallSnowballs", "mediumSnowball", "largeSnowball", "leftBranch", "rightBranch", "carrot", "ironBucket", "stone"], [1, 1, 1, 1, 1, 1, 1, 2], "Make a snowman!", false, "Snowman");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
	}
	if (global_craftingType == "cemeterySkeletonShield")
	{
		id = "cemeterySkeletonShield";
		panels[id] = new CraftingRecipe(id, ["crafting"], [65], ["cemeterySkeletonShield1", "cemeterySkeletonShield2", "cemeterySkeletonShield3"], [1, 1, 1], "Combine three shield pieces into one.", false, "Cemetery Skeleton Shield");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
	}
	if (global_craftingType == "snakeskin")
	{
		id = "snakeskinMask";
		panels[id] = new CraftingRecipe(id, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Mask");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "snakeskinBody";
		panels[id] = new CraftingRecipe(id, ["crafting"], [10], ["snakeskin"], [10], "A piece of equipment.", false, "Snakeskin Body");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "snakeskinLegs";
		panels[id] = new CraftingRecipe(id, ["crafting"], [10], ["snakeskin"], [6], "A piece of equipment.", false, "Snakeskin Legs");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "snakeskinBoots";
		panels[id] = new CraftingRecipe(id, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Boots");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "snakeskinGloves";
		panels[id] = new CraftingRecipe(id, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Gloves");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
	}
	if (global_craftingType == "bearFur")
	{
		id = "bearFurMask";
		panels[id] = new CraftingRecipe(id, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Mask");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "bearFurBody";
		panels[id] = new CraftingRecipe(id, ["crafting"], [20], ["bearFur"], [10], "A piece of equipment.", false, "Bear Body");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "bearFurLegs";
		panels[id] = new CraftingRecipe(id, ["crafting"], [20], ["bearFur"], [6], "A piece of equipment.", false, "Bear Legs");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "bearFurBoots";
		panels[id] = new CraftingRecipe(id, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Boots");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "bearFurGloves";
		panels[id] = new CraftingRecipe(id, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Gloves");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
	}
	if (global_craftingType == "polarBearFur")
	{
		id = "polarBearFurMask";
		panels[id] = new CraftingRecipe(id, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Mask");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "polarBearFurBody";
		panels[id] = new CraftingRecipe(id, ["crafting"], [35], ["polarBearFur"], [10], "A piece of equipment.", false, "Bear Body");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "polarBearFurLegs";
		panels[id] = new CraftingRecipe(id, ["crafting"], [35], ["polarBearFur"], [6], "A piece of equipment.", false, "Bear Legs");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "polarBearFurBoots";
		panels[id] = new CraftingRecipe(id, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Boots");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "polarBearFurGloves";
		panels[id] = new CraftingRecipe(id, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Gloves");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
	}
	if (global_craftingType == "blackSilk")
	{
		id = "reaperHood";
		panels[id] = new CraftingRecipe(id, ["crafting"], [50], ["blackSilk"], [6], "A piece of mage equipment.", false, "Reaper Hood");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "reaperBody";
		panels[id] = new CraftingRecipe(id, ["crafting"], [50], ["blackSilk"], [20], "A piece of mage equipment.", false, "Reaper Body");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "reaperLegs";
		panels[id] = new CraftingRecipe(id, ["crafting"], [50], ["blackSilk"], [12], "A piece of mage equipment.", false, "Reaper Robe");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "reaperBoots";
		panels[id] = new CraftingRecipe(id, ["crafting"], [50], ["blackSilk"], [6], "A piece of mage equipment.", false, "Reaper Boots");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "reaperGloves";
		panels[id] = new CraftingRecipe(id, ["crafting"], [50], ["blackSilk"], [6], "A piece of mage equipment.", false, "Reaper Gloves");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
	}
	if (global_craftingType == "batSkin")
	{
		id = "batSkinMask";
		panels[id] = new CraftingRecipe(id, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Mask");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "batSkinBody";
		panels[id] = new CraftingRecipe(id, ["crafting"], [30], ["batSkin"], [10], "A piece of equipment.", false, "Batskin Body");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "batSkinLegs";
		panels[id] = new CraftingRecipe(id, ["crafting"], [30], ["batSkin"], [6], "A piece of equipment.", false, "Batskin Legs");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "batSkinBoots";
		panels[id] = new CraftingRecipe(id, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Boots");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		id = "batSkinGloves";
		panels[id] = new CraftingRecipe(id, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Gloves");
		pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
	}
	if (global_craftingType == "default")
	{
		id = "stoneFurnace";
		if (getItem(id) == 0 && getItem("furnaceCapacity") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [1], ["stone"], [5], "Smelt ores into metal bars.", false, "Stone Furnace");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "bronzeOilWell";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [1], ["bronzeBars"], [5], "Gain 1 oil per second.", false, "Bronze Oil Well");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "axe";
		if (getItem(id) == 0 && getItem("bobsPanicQuest") == 3)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [2], ["bronzeBars", "stone"], [2, 5], "Unlocks the woodcutting skill.", false, "Axe");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "communityCenter";
		if (getItem(id) == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [4], ["logs"], [5], "Upgrades the shop to carry more items.", false, "Community Center");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		if (getItem(id + "Total") == 0)
		{
			id = "brewingKit";
			if (getItem(id) == 0)
			{
				panels[id] = new CraftingRecipe(id, ["crafting"], [4], ["stone", "ironBars", "brewingKitMould"], [10, 5, 1], "Unlocks the brewing skill.", false, "Brewing kit");
				pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
			}
		}
		id = "vial";
		if (true)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [5], ["glass"], [1], "Vials for making potions.", true, "Vial");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "communityCenter2";
		if (getItem(id) == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [5], ["oakLogs"], [5], "Upgrades the shop to carry more items.", false, "Community Center 2");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "shovel";
		if (getItem(id) == 0 && getItem("sapphireShovel") == 0 && getItem("emeraldShovel") == 0 && getItem("rubyShovel") == 0 && getItem("diamondShovel") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [7], ["ironBars", "logs"], [5, 10], "Collects sand over time.", false, "Shovel");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "drills";
		if (getItem(id) == 0 || getItem("researcherMining") >= 3 && getItem(id) < 3)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [10], ["bronzeBars"], [20], "Drill a desired ore at the cost of oil.", false, "Drills");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "bronzeFurnace";
		if (getItem(id) == 0 && getItem("furnaceCapacity") == 10)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [12], ["stone", "bronzeBars", "stoneFurnace"], [200, 100, 1], "Increases your furnace capacity.", false, "Bronze Furnace");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "sapphireGlassHand";
		if (getItem(id) == 0 && getItem(id + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				panels[id] = new CraftingRecipe(id, ["crafting"], [12], ["glass", "sapphire"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style='color:green'><img src='images/atom.png' class='img-20' /> Requires a Museum</span>", false, "Sapphire Glass Hand");
			}
			else
			{
				panels[id] = new CraftingRecipe(id, ["crafting"], [12], ["glass", "sapphire"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style='color:red'><img src='images/atom.png' class='img-20' /> Requires a Museum</span>", false, "Sapphire Glass Hand");
			}
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "communityCenter3";
		if (getItem(id) == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [14], ["willowLogs"], [10], "Upgrades the shop to carry more items.", false, "Community Center 3");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "bonemealBin";
		if (getItem(id) == 0 && getItem("sapphireBonemealBin") == 0 && getItem("emeraldBonemealBin") == 0 && getItem("rubyBonemealBin") == 0 && getItem("diamondBonemealBin") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [15], ["logs"], [50], "Ability to convert bones to bonemeal.", false, "Bonemeal Bin");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "rake";
		if (getItem(id) == 0 && getItem("sapphireRake") == 0 && getItem("emeraldRake") == 0 && getItem("rubyRake") == 0 && getItem("diamondRake") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [17], ["silverBars", "logs", "rakeHead"], [3, 30, 1], "A tool used by bob to find higher tier seeds.", false, "Rake");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "ironFurnace";
		if (getItem(id) == 0 && getItem("furnaceCapacity") <= 30)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [18], ["stone", "ironBars", "bronzeFurnace"], [500, 100, 1], "Increases your furnace capacity.", false, "Iron Furnace");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "oxygenTank";
		if (getItem(id) == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [19], ["ironBars"], [50, 1], "Allows you to explore the ocean floors.<br /><span style='color:grey;font-size:12pt;'><img src='images/atom.png' class='img-20' /> Research may be needed to use this item.</span>", false, "Oxygen Tank");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "crushers";
		if (getItem(id) == 0 || getItem("researcherMining") >= 3 && getItem(id) < 3)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [20], ["goldBars"], [5], "Mine a desired ore at the cost of oil.", false, "Crushers");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "oilStorage1";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [22], ["stone"], [1000], "Increases oil capacity to 5000", false, "Oil Storage I");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "ironOilWell";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [23], ["ironBars", "bronzeOilWell"], [25, 1], "Gain 5 oil per second.", false, "Iron Oil Well");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "ironOven";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [25], ["ironBars", "bronzeOven"], [100, 1], "Reduces the oven's burn rate.", false, "Iron Oven");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "silverFurnace";
		if (getItem(id) == 0 && getItem("furnaceCapacity") <= 75)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [28], ["silverBars", "stone", "ironFurnace"], [250, 5000, 1], "Increases your furnace capacity.", false, "Silver Furnace");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "silverOilWell";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [30], ["silverBars", "ironOilWell"], [200, 1], "Gain 10 oil per second.", false, "Silver Oil Well");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "wrench";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [30], ["ironBars", "wrenchMould", "miner"], [5, 1, 1], "Ability for your miner to use a wrench, allowing him to turn on your mining machines if you run out of oil.<br /><span style='color:grey'>Configure a preset to automatically turn on machines at zero oil)", false, "Wrench");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "largeVial";
		if (getItem("researcherCrafting") >= 4)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [32], ["glass"], [20], "Large vials for making medium level potions.", true, "Large Vial");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "oilStorage2";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [33], ["stone", "oilStorage1"], [20000, 1], "Increases oil capacity to 20,000", false, "Oil Storage II");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "silverOven";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [35], ["silverBars", "ironOven"], [300, 1], "Reduces the oven's burn rate.", false, "Silver Oven");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "planter";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [36], ["goldBars", "glass", "tractorTire"], [10, 20, 1], "Ability to harvest and replant a seed on all plots in one click.", false, "Planter");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "unlitTorch";
		if (getItem(id) == 0 && getItem("torch") == 0 && getItemString("weapon") != "torch" && getItemString("weapon") != "unlitTorch")
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [37], ["goldBars", "bambooLogs"], [3, 50], "An unlit torch.", false, "Unlit Torch");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "emeraldGlassHand";
		if (getItem(id) == 0 && getItem(id + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				panels[id] = new CraftingRecipe(id, ["crafting"], [39], ["glass", "emerald"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style='color:green'><img src='images/atom.png' class='img-20' /> Requires a Museum</span>", false, "Emerald Glass Hand");
			}
			else
			{
				panels[id] = new CraftingRecipe(id, ["crafting"], [39], ["glass", "emerald"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style='color:red'><img src='images/atom.png' class='img-20' /> Requires a Museum</span>", false, "Emerald Glass Hand");
			}
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "ironBucket";
		if (getItem("researcherCrafting") >= 3)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [40], ["silverBars"], [50], "Collect a bucket of lava after killing a lava monster.", true, "Silver Bucket");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "chisel";
		if (getItem(id + "Total") == 0)
		{
			if (getItem("researcherMining") >= 4)
			{
				panels[id] = new CraftingRecipe(id, ["crafting"], [41], ["logs", "ironBars"], [25, 10], "Used to open geodes.<br /><span style='color:green'><img src='images/atom.png' class='img-20' /> Requires the ability to mine geodes.</span>", false, "Chisel");
			}
			else
			{
				panels[id] = new CraftingRecipe(id, ["crafting"], [41], ["logs", "ironBars"], [25, 10], "Used to open geodes.<br /><span style='color:red'><img src='images/atom.png' class='img-20' /> Requires the ability to mine geodes.</span>", false, "Chisel");
			}
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "goldFurnace";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [42], ["goldBars", "stone", "silverFurnace"], [300, 20000, 1], "Increases your furnace capacity.", false, "Gold Furnace");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "communityCenter4";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [42], ["mapleLogs"], [10], "Upgrades the shop to carry more items.", false, "Community Center 4");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "goldOilWell";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [43], ["goldBars", "silverOilWell"], [500, 1], "Gain 20 oil per second.", false, "Gold Oil Well");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "oilStorage3";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [45], ["stone", "oilStorage2"], [50000, 1], "Increases oil capacity to 100,000", false, "Oil Storage III");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "goldOven";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [47], ["goldBars", "silverOven"], [600, 1], "Reduces the oven's burn rate.", false, "Gold Oven");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "giantDrills";
		if (getItem(id) == 0 || getItem("researcherMining") >= 3 && getItem(id) < 3)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [50], ["ironBars", "silverBars"], [2000, 500], "Mine a desired ore at the cost of oil.", false, "Giant Drills");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "chainsaw";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [50], ["ironBars", "promethiumBars", "oil", "chainsawMould"], [100, 15, 5000, 1], "Gain more logs for every tree.<br/ ><span style='color:grey'>Stacks with axe</span>", false, "Chainsaw");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "promethiumFurnace";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [54], ["promethiumBars", "stone", "goldFurnace"], [25, 80000, 1], "Increases your furnace capacity.", false, "Promethium Furnace");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "promethiumOilWell";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [56], ["promethiumBars", "goldOilWell"], [40, 1], "Gain 35 oil per second.", false, "Promethium Oil Well");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "trowel";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [58], ["ironBars", "mapleLogs", "trowelMould"], [30, 50, 1], "Increases your rate at finding seeds.", false, "Trowel");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "rocket";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [60], ["promethiumBars", "ironBars", "silverBars", "goldBars"], [35, 5000, 2500, 500], "Ability to travel to the moon at the cost of oil.", false, "Rocket");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "oilStorage4";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [61], ["stone", "oilStorage3"], [100000, 1], "Increases oil capacity to 250,000", false, "Oil Storage IV");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "rubyGlassHand";
		if (getItem(id) == 0 && getItem(id + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				panels[id] = new CraftingRecipe(id, ["crafting"], [62], ["glass", "ruby"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style='color:green'><img src='images/atom.png' class='img-20' /> Requires a Museum</span>", false, "Ruby Glass Hand");
			}
			else
			{
				panels[id] = new CraftingRecipe(id, ["crafting"], [62], ["glass", "ruby"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style='color:red'><img src='images/atom.png' class='img-20' /> Requires a Museum</span>", false, "Ruby Glass Hand");
			}
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "promethiumOven";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [63], ["promethiumBars", "goldOven"], [100, 1], "Reduces the oven's burn rate.", false, "Promethium Oven");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "excavators";
		if (getItem(id) == 0 || getItem("researcherMining") >= 3 && getItem(id) < 3)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [65], ["ironBars", "silverBars"], [5000, 2000], "Mine a desired ore at the cost of oil.", false, "Excavator");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "charcoalFoundry";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [67], ["ironBars", "promethiumBars"], [5000, 75], "Converts logs into charcoal at the cost of oil.", false, "Charcoal Foundry");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "titaniumRocketBoosters";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [69], ["titaniumBars", "silverBars", "rocket"], [5, 1000, 1], "Ability to fire titanium boosters during a trip, increasing the rocket's speed.", false, "Titanium Boosters");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
		id = "titaniumFurnace";
		if (getItem(id + "Total") == 0)
		{
			panels[id] = new CraftingRecipe(id, ["crafting"], [70], ["titaniumBars", "stone", "promethiumFurnace"], [15, 150000, 1], "Increases your furnace capacity.", false, "Titanium Furnace");
			pix_color = pix_color + addRecipeToTable(panels[id], SCROLL_ID);
		}
	}
	document.getElementById(SCROLL_ID).innerHTML += "<table class='table-craftables' width='90%'><tr><th>Name</th><th>Item</th><th>Level</th><th>Materials</th><th width='50%\t'>Description</th></tr>" + pix_color + "</table><br />";
};
