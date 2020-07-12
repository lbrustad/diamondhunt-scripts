/**
 * furnaceDialogueValueOnKeyUp extracted from ../../deobfuscated/bundle.js at line 7729-7748
 *
 * If this file doesn't contain a function, there is an error in ../raw/furnaceDialogueValueOnKeyUp.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function furnaceDialogueValueOnKeyUp(_0x1CD8C)
{
	document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = "";
	if (isInt(_0x1CD8C))
	{
		if (_0x1CD8C > 0)
		{
			itemNameArray = [];
			itemAmountRequiredArray = [];
			displayNameArray = [];
			itemNameArray[0] = global_tracker_furnaceDialgoue_ore;
			itemAmountRequiredArray[0] = _0x1CD8C;
			displayNameArray[0] = "";
			itemNameArray[1] = "oil";
			itemAmountRequiredArray[1] = getOilCost(global_tracker_furnaceDialgoue_ore) * _0x1CD8C;
			displayNameArray[1] = "";
			document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = createHTMLBoxCheckOrXCollection(itemNameArray, itemAmountRequiredArray, displayNameArray)
		}
	}
}