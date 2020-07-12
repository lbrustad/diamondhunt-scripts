'use strict';

function refreshBrewing()
{
	var SCROLL_ID = "item-section-brewing-2";
	brewingRecipes = [];
	var th_field = "";
	var pix_color = "";
	potionItemName = "stardustPotion";
	potionDisplayName = "Stardust Potion";
	potionItemNameDescription = "Gain some stardust over time.<br /><span style='color:grey;font-size:12pt;'>(Lasts for " + getBrewingTimeAdjusted(300) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???";
	}
	brewingRecipes[potionItemName] = new CraftingRecipe(potionItemName, ["brewing"], [1], ["dottedGreenLeaf", "redMushroom", "vial"], [1, 15, 1], potionItemNameDescription, true, potionDisplayName);
	pix_color = pix_color + addRecipeToTable(brewingRecipes[potionItemName], SCROLL_ID);
	potionItemName = "sandPotion";
	potionDisplayName = "Sand Potion";
	potionItemNameDescription = "Increases the chance of finding sand with a shovel.<br /><span style='color:grey;font-size:12pt;'>(Lasts for " + getBrewingTimeAdjusted(3600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???";
	}
	brewingRecipes[potionItemName] = new CraftingRecipe(potionItemName, ["brewing"], [3], ["dottedGreenLeaf", "redMushroom", "vial"], [2, 20, 1], potionItemNameDescription, true, potionDisplayName);
	pix_color = pix_color + addRecipeToTable(brewingRecipes[potionItemName], SCROLL_ID);
	potionItemName = "cookingBoostPotion";
	potionDisplayName = "Cooking Boost Potion";
	potionItemNameDescription = "Temporary increases your cooking level by 10 for the next food that you cook.<br /><span style='color:grey;font-size:12pt;'>(Cooldown 20:00)</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???";
	}
	brewingRecipes[potionItemName] = new CraftingRecipe(potionItemName, ["brewing"], [5], ["greenLeaf", "redMushroom", "vial"], [1, 10, 1], potionItemNameDescription, true, potionDisplayName);
	pix_color = pix_color + addRecipeToTable(brewingRecipes[potionItemName], SCROLL_ID);
	potionItemName = "combatCooldownPotion";
	potionDisplayName = "Combat Cooldown";
	potionItemNameDescription = "Your hero's cooldown will decrease twice as fast.<br /><span style='color:grey;font-size:12pt;'>(Lasts for " + getBrewingTimeAdjusted(10 * 60) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???";
	}
	brewingRecipes[potionItemName] = new CraftingRecipe(potionItemName, ["brewing"], [8], ["dottedGreenLeaf", "greenLeaf", "bones", "vial"], [3, 3, 5, 1], potionItemNameDescription, true, potionDisplayName);
	pix_color = pix_color + addRecipeToTable(brewingRecipes[potionItemName], SCROLL_ID);
	potionItemName = "compostPotion";
	potionDisplayName = "Compost Potion";
	potionItemNameDescription = "Crops grow twice as fast.<br /><span style='color:grey;font-size:12pt;'>(Lasts for " + getBrewingTimeAdjusted(1800) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???";
	}
	brewingRecipes[potionItemName] = new CraftingRecipe(potionItemName, ["brewing"], [10], ["greenLeaf", "redMushroom", "vial"], [2, 20, 1], potionItemNameDescription, true, potionDisplayName);
	pix_color = pix_color + addRecipeToTable(brewingRecipes[potionItemName], SCROLL_ID);
	potionItemName = "oilPotion";
	potionDisplayName = "Oil Potion";
	potionItemNameDescription = "Increases oil income by 10.<br /><span style='color:grey;font-size:12pt;'>(Lasts for " + getBrewingTimeAdjusted(1800) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???";
	}
	brewingRecipes[potionItemName] = new CraftingRecipe(potionItemName, ["brewing"], [13], ["dottedGreenLeaf", "oil", "vial"], [4, 1, 1], potionItemNameDescription, true, potionDisplayName);
	pix_color = pix_color + addRecipeToTable(brewingRecipes[potionItemName], SCROLL_ID);
	potionItemName = "bonePotion";
	potionDisplayName = "Bone Potion";
	potionItemNameDescription = "Passively collects bones over time.<br /><span style='color:grey;font-size:12pt;'>(Lasts for " + getBrewingTimeAdjusted(7200) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???";
	}
	brewingRecipes[potionItemName] = new CraftingRecipe(potionItemName, ["brewing"], [15], ["dottedGreenLeaf", "bones", "vial"], [5, 20, 1], potionItemNameDescription, true, potionDisplayName);
	pix_color = pix_color + addRecipeToTable(brewingRecipes[potionItemName], SCROLL_ID);
	potionItemName = "treeStarterPotion";
	potionDisplayName = "Tree Starter Potion";
	potionItemNameDescription = "Doubles your chances for a tree to start growing.<br /><span style='color:grey;font-size:12pt;'>(Lasts for " + getBrewingTimeAdjusted(600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???";
	}
	brewingRecipes[potionItemName] = new CraftingRecipe(potionItemName, ["brewing"], [18], ["dottedGreenLeaf", "redMushroom", "logs", "vial"], [3, 50, 1, 1], potionItemNameDescription, true, potionDisplayName);
	pix_color = pix_color + addRecipeToTable(brewingRecipes[potionItemName], SCROLL_ID);
	potionItemName = "barPotion";
	potionDisplayName = "Bar Potion";
	potionItemNameDescription = "20% chance that two bars are smelted instead of one, without using an extra ore.<br /><i style='font-size:12pt;'>Works on: Bronze, iron, silver, gold</i><br /><span style='color:grey;font-size:12pt;'>(Lasts for " + getBrewingTimeAdjusted(600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???";
	}
	brewingRecipes[potionItemName] = new CraftingRecipe(potionItemName, ["brewing"], [22], ["greenLeaf", "limeLeaf", "bronzeBars", "ironBars", "silverBars", "goldBars", "vial"], [2, 2, 1, 1, 1, 1, 1], potionItemNameDescription, true, potionDisplayName);
	pix_color = pix_color + addRecipeToTable(brewingRecipes[potionItemName], SCROLL_ID);
	potionItemName = "sapphireStardustPotion";
	potionDisplayName = "Sapphire Stardust Potion";
	potionItemNameDescription = "Can be poured on a sapphire, converting it into stardust.";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???";
	}
	brewingRecipes[potionItemName] = new CraftingRecipe(potionItemName, ["brewing"], [25], ["limeLeaf", "redMushroom", "vial"], [1, 100, 1], potionItemNameDescription, true, potionDisplayName);
	pix_color = pix_color + addRecipeToTable(brewingRecipes[potionItemName], SCROLL_ID);
	if (getItem("researcherBrewing") >= 4)
	{
		potionItemName = "largeManaPotion";
		potionDisplayName = "Mana Potion";
		potionItemNameDescription = "Restore 5 mana instantly in combat.";
		if (getItem(potionItemName + "Drank") == 0)
		{
			potionItemNameDescription = "???";
		}
		brewingRecipes[potionItemName] = new CraftingRecipe(potionItemName, ["brewing"], [30], ["strangeLeafFix", "largeVial"], [5, 1], potionItemNameDescription, true, potionDisplayName);
		pix_color = pix_color + addRecipeToTable(brewingRecipes[potionItemName], SCROLL_ID);
	}
	document.getElementById(SCROLL_ID).innerHTML = "<table class='table-craftables' width='90%'><tbody><tr><th>Name</th><th>Item</th><th>Level</th><th>Materials</th><th>Description</th></tr>" + pix_color + "</tbody></table><br /><br />";
};
