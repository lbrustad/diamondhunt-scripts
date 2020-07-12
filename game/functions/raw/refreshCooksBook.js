/**
 * refreshCooksBook extracted from ../../deobfuscated/bundle.js at line 11146-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshCooksBook.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshCooksBook()
{
	var _0x1C85A = "item-section-cooksBook-1";
	cookingRecipes = [];
	var _0x1DD76 = "";
	document.getElementById(_0x1C85A).innerHTML = "";
	var _0x1C8F4 = "";
	_0x1DD76 = "salad";
	cookingRecipes[_0x1DD76] = (new CooksBookRecipe(_0x1DD76, ["cooking"], [1], ["dottedGreenLeaf", "redMushroom"], [5, 10], "A salad made from farmed ingredients.", true, "Mushroom Salad", 600));
	_0x1C8F4 += addRecipeToTable(cookingRecipes[_0x1DD76], _0x1C85A);
	_0x1DD76 = "oysterMornay";
	cookingRecipes[_0x1DD76] = (new CooksBookRecipe(_0x1DD76, ["cooking"], [5], ["oyster", "cheese"], [1, 1], "Boiled oyster with melted cheese.", true, "Oyster Mornay", 900));
	_0x1C8F4 += addRecipeToTable(cookingRecipes[_0x1DD76], _0x1C85A);
	if (getSmallFishingNetTypeData()[0] != "none")
	{
		_0x1DD76 = "snakeSushiShrimp";
		cookingRecipes[_0x1DD76] = (new CooksBookRecipe(_0x1DD76, ["cooking"], [10], ["snakeskin", "rawShrimp"], [2, 10], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x1C8F4 += addRecipeToTable(cookingRecipes[_0x1DD76], _0x1C85A)
	};
	if (getFishingRodTypeData()[0] != "none")
	{
		_0x1DD76 = "snakeSushiTrout";
		cookingRecipes[_0x1DD76] = (new CooksBookRecipe(_0x1DD76, ["cooking"], [10], ["snakeskin", "rawTrout"], [2, 5], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x1C8F4 += addRecipeToTable(cookingRecipes[_0x1DD76], _0x1C85A)
	};
	if (getHarpoonTypeData()[0] != "none")
	{
		_0x1DD76 = "snakeSushiTuna";
		cookingRecipes[_0x1DD76] = (new CooksBookRecipe(_0x1DD76, ["cooking"], [10], ["snakeskin", "rawTuna"], [2, 1], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x1C8F4 += addRecipeToTable(cookingRecipes[_0x1DD76], _0x1C85A)
	};
	_0x1DD76 = "seaweedChicken";
	cookingRecipes[_0x1DD76] = (new CooksBookRecipe(_0x1DD76, ["cooking"], [20], ["seaweed", "chicken"], [10, 1], "A chicken with mixed with seaweed.", true, "Seaweed Chicken", 2700));
	_0x1C8F4 += addRecipeToTable(cookingRecipes[_0x1DD76], _0x1C85A);
	document.getElementById(_0x1C85A).innerHTML += "<table class=\'table-craftables\' width=\'90%\'><tr><th>Name</th><th>Item</th><th>Level</th><th>Ingredients</th><th width=\'50%\'>Description</th><th>Prep Time</th></tr>" + _0x1C8F4 + "</table>"
}