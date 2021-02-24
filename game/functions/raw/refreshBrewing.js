/**
 * refreshBrewing extracted from ../../deobfuscated/bundle.js at line 19189-19385
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshBrewing.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshBrewing()
{
	var _0x15049 = "item-section-brewing-2";
	brewingRecipes = [];
	var _0x18EE7 = "";
	var _0x151CA = "";
	potionItemName = "stardustPotion";
	potionDisplayName = "Stardust Potion";
	potionItemNameDescription = "Gain some stardust over time.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(300) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [1], ["dottedGreenLeaf", "redMushroom", "vial"], [1, 15, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "sandPotion";
	potionDisplayName = "Sand Potion";
	potionItemNameDescription = "Increases the chance of finding sand with a shovel.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(3600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [3], ["dottedGreenLeaf", "redMushroom", "vial"], [2, 20, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "cookingBoostPotion";
	potionDisplayName = "Cooking Boost Potion";
	potionItemNameDescription = "Temporary increases your cooking level by 10 for the next food that you cook.<br /><span style=\'color:grey;font-size:12pt;\'>(Cooldown: 20:00)</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [5], ["greenLeaf", "redMushroom", "vial"], [1, 10, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "combatCooldownPotion";
	potionDisplayName = "Combat Cooldown";
	potionItemNameDescription = "Your hero\'s cooldown will decrease twice as fast.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(10 * 60) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [8], ["dottedGreenLeaf", "greenLeaf", "bones", "vial"], [3, 3, 5, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "compostPotion";
	potionDisplayName = "Compost Potion";
	potionItemNameDescription = "Crops grow twice as fast.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(1800) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [10], ["greenLeaf", "redMushroom", "vial"], [2, 20, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "oilPotion";
	potionDisplayName = "Oil Potion";
	potionItemNameDescription = "Increases oil income by 10.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(1800) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [13], ["dottedGreenLeaf", "oil", "vial"], [4, 1, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "bonePotion";
	potionDisplayName = "Bone Potion";
	potionItemNameDescription = "Passively collects bones over time.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(7200) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [15], ["dottedGreenLeaf", "bones", "vial"], [5, 20, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "treeStarterPotion";
	potionDisplayName = "Tree Starter Potion";
	potionItemNameDescription = "Doubles your chances for a tree to start growing.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [18], ["dottedGreenLeaf", "redMushroom", "logs", "vial"], [3, 50, 1, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	if (getItem("researcherBrewing") >= 5)
	{
		potionItemName = "repelPotion1";
		potionDisplayName = "Repel Potion";
		potionItemNameDescription = "Avoid an enemy in the fields, forest or caves.";
		if (getItem(potionItemName + "Drank") == 0)
		{
			potionItemNameDescription = "???"
		};
		brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [20], ["strangeLeafFix", "blewitMushroom", "vial"], [1, 50, 1], potionItemNameDescription, true, potionDisplayName));
		_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049)
	};
	potionItemName = "barPotion";
	potionDisplayName = "Bar Potion";
	potionItemNameDescription = "20% chance that two bars are smelted instead of one, without using an extra ore.<br /><i style=\'font-size:12pt;\'>Works on: Bronze, iron, silver, gold</i><br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [22], ["greenLeaf", "limeLeaf", "bronzeBars", "ironBars", "silverBars", "goldBars", "vial"], [2, 2, 1, 1, 1, 1, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "sapphireStardustPotion";
	potionDisplayName = "Sapphire Stardust Potion";
	potionItemNameDescription = "Can be poured on a sapphire, converting it into stardust.";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [25], ["limeLeaf", "redMushroom", "vial"], [1, 100, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	if (getItem("researcherBrewing") >= 4)
	{
		potionItemName = "largeManaPotion";
		potionDisplayName = "Mana Potion";
		potionItemNameDescription = "Restore 5 mana instantly in combat.";
		if (getItem(potionItemName + "Drank") == 0)
		{
			potionItemNameDescription = "???"
		};
		brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [30], ["strangeLeafFix", "largeVial"], [5, 1], potionItemNameDescription, true, potionDisplayName));
		_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049)
	};
	potionItemName = "largeStardustPotion";
	potionDisplayName = "Large Stardust Potion";
	potionItemNameDescription = "Gain some stardust over time.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(300) + ").";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [35], ["goldLeaf", "redMushroom", "largeVial"], [5, 450, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "largeFurnacePotion";
	potionDisplayName = "Furnace Potion";
	potionItemNameDescription = "Your furnace will run 3 times as fast.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(1800) + ").";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [38], ["goldLeaf", "greenLeaf", "redMushroom", "largeVial"], [1, 15, 200, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "largePiratePotion";
	potionDisplayName = "Pirate Potion";
	potionItemNameDescription = "Doubles your pirate\'s chance to find a map.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(3600 * 3) + ").";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [40], ["dottedGreenLeaf", "greenLeaf", "redMushroom", "largeVial"], [20, 20, 250, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "largeEmeraldStardustPotion";
	potionDisplayName = "Emerald Stardust Potion";
	potionItemNameDescription = "Can be poured on an emerald, converting it into stardust.";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [45], ["limeLeaf", "redMushroom", "largeVial"], [20, 800, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "largeRocketSpeedPotion";
	potionDisplayName = "Rocket Speed Potion";
	potionItemNameDescription = "Doubles your rocket\'s speed.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(3600 * 2) + ").";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [50], ["dottedGreenLeaf", "greenLeaf", "oil", "largeVial"], [80, 50, 50000, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	if (getItem("researcherBrewing") >= 5)
	{
		potionItemName = "repelPotion2";
		potionDisplayName = "Repel Potion";
		potionItemNameDescription = "Avoid an enemy in the lava dungeon, northern fields or cemetery.";
		if (getItem(potionItemName + "Drank") == 0)
		{
			potionItemNameDescription = "???"
		};
		brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [53], ["strangeLeafFix", "blewitMushroom", "vial"], [5, 200, 1], potionItemNameDescription, true, potionDisplayName));
		_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049)
	};
	potionItemName = "largeBarPotion";
	potionDisplayName = "Large Bar Potion";
	potionItemNameDescription = "20% chance that two bars are smelted instead of one, without using an extra ore.<br /><i style=\'font-size:12pt;\'>Works on: Bronze, iron, silver, gold, promethium</i><br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [55], ["goldLeaf", "limeLeaf", "bronzeBars", "ironBars", "silverBars", "goldBars", "promethiumBars", "largeVial"], [8, 50, 1, 1, 1, 1, 1, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "largeRubyStardustPotion";
	potionDisplayName = "Ruby Stardust Potion";
	potionItemNameDescription = "Can be poured on a ruby, converting it into stardust.";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [60], ["goldLeaf", "redMushroom", "largeVial"], [16, 1500, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	document.getElementById(_0x15049).innerHTML = "<table class=\'table-craftables\' width=\'90%\'><tbody><tr><th>Name</th><th>Item</th><th>Level</th><th>Materials</th><th>Description</th></tr>" + _0x151CA + "</tbody></table><br /><br />"
}