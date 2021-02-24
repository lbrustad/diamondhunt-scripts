/**
 * refreshCooksBook extracted from ../../deobfuscated/bundle.js at line 19130-19168
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshCooksBook.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshCooksBook()
{
	var _0x15049 = "item-section-cooksBook-1";
	cookingRecipes = [];
	var _0x18F0A = "";
	document.getElementById(_0x15049).innerHTML = "";
	var _0x151CA = "";
	_0x18F0A = "salad";
	cookingRecipes[_0x18F0A] = (new CooksBookRecipe(_0x18F0A, ["cooking"], [1], ["dottedGreenLeaf", "redMushroom"], [5, 10], "A salad made from farmed ingredients.", true, "Mushroom Salad", 600));
	_0x151CA += addRecipeToTable(cookingRecipes[_0x18F0A], _0x15049);
	_0x18F0A = "oysterMornay";
	cookingRecipes[_0x18F0A] = (new CooksBookRecipe(_0x18F0A, ["cooking"], [5], ["oyster", "cheese"], [1, 1], "Boiled oyster with melted cheese.", true, "Oyster Mornay", 900));
	_0x151CA += addRecipeToTable(cookingRecipes[_0x18F0A], _0x15049);
	if (getSmallFishingNetTypeData()[0] != "none")
	{
		_0x18F0A = "snakeSushiShrimp";
		cookingRecipes[_0x18F0A] = (new CooksBookRecipe(_0x18F0A, ["cooking"], [10], ["snakeskin", "rawShrimp"], [2, 10], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x151CA += addRecipeToTable(cookingRecipes[_0x18F0A], _0x15049)
	};
	if (getFishingRodTypeData()[0] != "none")
	{
		_0x18F0A = "snakeSushiTrout";
		cookingRecipes[_0x18F0A] = (new CooksBookRecipe(_0x18F0A, ["cooking"], [10], ["snakeskin", "rawTrout"], [2, 5], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x151CA += addRecipeToTable(cookingRecipes[_0x18F0A], _0x15049)
	};
	if (getHarpoonTypeData()[0] != "none")
	{
		_0x18F0A = "snakeSushiTuna";
		cookingRecipes[_0x18F0A] = (new CooksBookRecipe(_0x18F0A, ["cooking"], [10], ["snakeskin", "rawTuna"], [2, 1], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x151CA += addRecipeToTable(cookingRecipes[_0x18F0A], _0x15049)
	};
	_0x18F0A = "seaweedChicken";
	cookingRecipes[_0x18F0A] = (new CooksBookRecipe(_0x18F0A, ["cooking"], [20], ["seaweed", "chicken"], [10, 1], "A chicken with mixed with seaweed.", true, "Seaweed Chicken", 2700));
	_0x151CA += addRecipeToTable(cookingRecipes[_0x18F0A], _0x15049);
	_0x18F0A = "batSkinSushi";
	cookingRecipes[_0x18F0A] = (new CooksBookRecipe(_0x18F0A, ["cooking"], [30], ["batSkin", "rawShrimp", "rawTrout", "rawTuna"], [2, 10, 5, 1], "A sushi made with batskin instead of traditional seaweed.", true, "Batskin Sushi", 3600));
	_0x151CA += addRecipeToTable(cookingRecipes[_0x18F0A], _0x15049);
	document.getElementById(_0x15049).innerHTML += "<table class=\'table-craftables\' width=\'90%\'><tr><th>Name</th><th>Item</th><th>Level</th><th>Ingredients</th><th width=\'50%\'>Description</th><th>Prep Time</th></tr>" + _0x151CA + "</table><br />"
}