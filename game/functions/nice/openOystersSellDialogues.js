'use strict';

function openOystersSellDialogues()
{
	var sPrefix = "oyster";
	openInputDialogue("Sell", "images/" + sPrefix + ".png", sPrefix, 1, ["coins"], [getItemPrice(sPrefix)], [sPrefix], [1], "Sell", "SELL", "Sell this to the shop for some coins.");
};
