'use strict';

function addLogsCharcoalFoundry(sPrefix)
{
	openInputDialogue("Add Logs", "images/" + sPrefix + ".png", sPrefix, 1, ["charcoal"], [0], [sPrefix, "oil"], [1, 1000], "Add To Foundry", "ADD_CHARCOAL_FOUNDRY", "Burning logs in foundry will produce charcoal.", 100);
};
