'use strict';

function furnaceDialogueValueOnKeyUp(typeFieldWidth)
{
	document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = "";
	if (isInt(typeFieldWidth))
	{
		if (typeFieldWidth > 0)
		{
			itemNameArray = [];
			itemAmountRequiredArray = [];
			displayNameArray = [];
			itemNameArray[0] = global_tracker_furnaceDialgoue_ore;
			itemAmountRequiredArray[0] = typeFieldWidth;
			displayNameArray[0] = "";
			if (global_tracker_furnaceDialgoue_ore == "titanium")
			{
				itemNameArray[1] = "charcoal";
				itemAmountRequiredArray[1] = getCharcoalCost(global_tracker_furnaceDialgoue_ore) * typeFieldWidth;
				displayNameArray[1] = "";
			}
			else
			{
				itemNameArray[1] = "oil";
				itemAmountRequiredArray[1] = getOilCost(global_tracker_furnaceDialgoue_ore) * typeFieldWidth;
				displayNameArray[1] = "";
			}
			document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = createHTMLBoxCheckOrXCollection(itemNameArray, itemAmountRequiredArray, displayNameArray);
		}
	}
};
