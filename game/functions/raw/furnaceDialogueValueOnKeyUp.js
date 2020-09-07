/**
 * furnaceDialogueValueOnKeyUp extracted from ../../deobfuscated/bundle.js at line 10100-10128
 *
 * If this file doesn't contain a function, there is an error in ../raw/furnaceDialogueValueOnKeyUp.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function furnaceDialogueValueOnKeyUp(_0x444D)
{
	document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = "";
	if (isInt(_0x444D))
	{
		if (_0x444D > 0)
		{
			itemNameArray = [];
			itemAmountRequiredArray = [];
			displayNameArray = [];
			itemNameArray[0] = global_tracker_furnaceDialgoue_ore;
			itemAmountRequiredArray[0] = _0x444D;
			displayNameArray[0] = "";
			if (global_tracker_furnaceDialgoue_ore == "titanium")
			{
				itemNameArray[1] = "charcoal";
				itemAmountRequiredArray[1] = getCharcoalCost(global_tracker_furnaceDialgoue_ore) * _0x444D;
				displayNameArray[1] = ""
			}
			else
			{
				itemNameArray[1] = "oil";
				itemAmountRequiredArray[1] = getOilCost(global_tracker_furnaceDialgoue_ore) * _0x444D;
				displayNameArray[1] = ""
			};
			document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = createHTMLBoxCheckOrXCollection(itemNameArray, itemAmountRequiredArray, displayNameArray)
		}
	}
}