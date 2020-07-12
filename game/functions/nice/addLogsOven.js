'use strict';

function addLogsOven(sPrefix)
{
	openInputDialogue("Add Logs", "images/" + sPrefix + ".png", sPrefix, 1, ["heat"], [getHeat(sPrefix)], [sPrefix], [1], "Add Heat", "ADD_HEAT", "Adding logs to your oven will increase its heat.  Heat is used to cook food.");
};
