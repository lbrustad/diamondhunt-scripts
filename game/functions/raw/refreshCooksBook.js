/**
 * refreshCooksBook extracted from ../../deobfuscated/bundle.js at line 15479-15517
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshCooksBook.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshCooksBook()
{
	var _0x396D = "item-section-cooksBook-1";
	cookingRecipes = [];
	var _0x6AEE = "";
	document.getElementById(_0x396D).innerHTML = "";
	var _0x3AAC = "";
	_0x6AEE = "salad";
	cookingRecipes[_0x6AEE] = (new CooksBookRecipe(_0x6AEE, ["cooking"], [1], ["dottedGreenLeaf", "redMushroom"], [5, 10], "A salad made from farmed ingredients.", true, "Mushroom Salad", 600));
	_0x3AAC += addRecipeToTable(cookingRecipes[_0x6AEE], _0x396D);
	_0x6AEE = "oysterMornay";
	cookingRecipes[_0x6AEE] = (new CooksBookRecipe(_0x6AEE, ["cooking"], [5], ["oyster", "cheese"], [1, 1], "Boiled oyster with melted cheese.", true, "Oyster Mornay", 900));
	_0x3AAC += addRecipeToTable(cookingRecipes[_0x6AEE], _0x396D);
	if (getSmallFishingNetTypeData()[0] != "none")
	{
		_0x6AEE = "snakeSushiShrimp";
		cookingRecipes[_0x6AEE] = (new CooksBookRecipe(_0x6AEE, ["cooking"], [10], ["snakeskin", "rawShrimp"], [2, 10], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x3AAC += addRecipeToTable(cookingRecipes[_0x6AEE], _0x396D)
	};
	if (getFishingRodTypeData()[0] != "none")
	{
		_0x6AEE = "snakeSushiTrout";
		cookingRecipes[_0x6AEE] = (new CooksBookRecipe(_0x6AEE, ["cooking"], [10], ["snakeskin", "rawTrout"], [2, 5], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x3AAC += addRecipeToTable(cookingRecipes[_0x6AEE], _0x396D)
	};
	if (getHarpoonTypeData()[0] != "none")
	{
		_0x6AEE = "snakeSushiTuna";
		cookingRecipes[_0x6AEE] = (new CooksBookRecipe(_0x6AEE, ["cooking"], [10], ["snakeskin", "rawTuna"], [2, 1], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x3AAC += addRecipeToTable(cookingRecipes[_0x6AEE], _0x396D)
	};
	_0x6AEE = "seaweedChicken";
	cookingRecipes[_0x6AEE] = (new CooksBookRecipe(_0x6AEE, ["cooking"], [20], ["seaweed", "chicken"], [10, 1], "A chicken with mixed with seaweed.", true, "Seaweed Chicken", 2700));
	_0x3AAC += addRecipeToTable(cookingRecipes[_0x6AEE], _0x396D);
	_0x6AEE = "batSkinSushi";
	cookingRecipes[_0x6AEE] = (new CooksBookRecipe(_0x6AEE, ["cooking"], [30], ["batSkin", "rawShrimp", "rawTrout", "rawTuna"], [2, 10, 5, 1], "A sushi made with batskin instead of traditional seaweed.", true, "Batskin Sushi", 3600));
	_0x3AAC += addRecipeToTable(cookingRecipes[_0x6AEE], _0x396D);
	document.getElementById(_0x396D).innerHTML += "<table class=\'table-craftables\' width=\'90%\'><tr><th>Name</th><th>Item</th><th>Level</th><th>Ingredients</th><th width=\'50%\'>Description</th><th>Prep Time</th></tr>" + _0x3AAC + "</table><br />"
}