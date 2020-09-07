'use strict';

function refreshCooksBook()
{
	var SCROLL_ID = "item-section-cooksBook-1";
	cookingRecipes = [];
	var th_field = "";
	document.getElementById(SCROLL_ID).innerHTML = "";
	var pix_color = "";
	th_field = "salad";
	cookingRecipes[th_field] = new CooksBookRecipe(th_field, ["cooking"], [1], ["dottedGreenLeaf", "redMushroom"], [5, 10], "A salad made from farmed ingredients.", true, "Mushroom Salad", 600);
	pix_color = pix_color + addRecipeToTable(cookingRecipes[th_field], SCROLL_ID);
	th_field = "oysterMornay";
	cookingRecipes[th_field] = new CooksBookRecipe(th_field, ["cooking"], [5], ["oyster", "cheese"], [1, 1], "Boiled oyster with melted cheese.", true, "Oyster Mornay", 900);
	pix_color = pix_color + addRecipeToTable(cookingRecipes[th_field], SCROLL_ID);
	if (getSmallFishingNetTypeData()[0] != "none")
	{
		th_field = "snakeSushiShrimp";
		cookingRecipes[th_field] = new CooksBookRecipe(th_field, ["cooking"], [10], ["snakeskin", "rawShrimp"], [2, 10], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800);
		pix_color = pix_color + addRecipeToTable(cookingRecipes[th_field], SCROLL_ID);
	}
	if (getFishingRodTypeData()[0] != "none")
	{
		th_field = "snakeSushiTrout";
		cookingRecipes[th_field] = new CooksBookRecipe(th_field, ["cooking"], [10], ["snakeskin", "rawTrout"], [2, 5], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800);
		pix_color = pix_color + addRecipeToTable(cookingRecipes[th_field], SCROLL_ID);
	}
	if (getHarpoonTypeData()[0] != "none")
	{
		th_field = "snakeSushiTuna";
		cookingRecipes[th_field] = new CooksBookRecipe(th_field, ["cooking"], [10], ["snakeskin", "rawTuna"], [2, 1], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800);
		pix_color = pix_color + addRecipeToTable(cookingRecipes[th_field], SCROLL_ID);
	}
	th_field = "seaweedChicken";
	cookingRecipes[th_field] = new CooksBookRecipe(th_field, ["cooking"], [20], ["seaweed", "chicken"], [10, 1], "A chicken with mixed with seaweed.", true, "Seaweed Chicken", 2700);
	pix_color = pix_color + addRecipeToTable(cookingRecipes[th_field], SCROLL_ID);
	th_field = "batSkinSushi";
	cookingRecipes[th_field] = new CooksBookRecipe(th_field, ["cooking"], [30], ["batSkin", "rawShrimp", "rawTrout", "rawTuna"], [2, 10, 5, 1], "A sushi made with batskin instead of traditional seaweed.", true, "Batskin Sushi", 3600);
	pix_color = pix_color + addRecipeToTable(cookingRecipes[th_field], SCROLL_ID);
	document.getElementById(SCROLL_ID).innerHTML += "<table class='table-craftables' width='90%'><tr><th>Name</th><th>Item</th><th>Level</th><th>Ingredients</th><th width='50%'>Description</th><th>Prep Time</th></tr>" + pix_color + "</table><br />";
};
