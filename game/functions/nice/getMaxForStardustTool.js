'use strict';

function getMaxForStardustTool()
{
	var nextChildID = document.getElementById("dialogue-stardustTool2-item-hidden").value;
	var vulnData = document.getElementById("dialogue-stardustTool2-tool-hidden").value;
	var isofac = parseInt(document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value);
	var theH = 0;
	var crossfilterable_layers = global_stardustToolsMap[vulnData].arrayItemsToConvertArray;
	var _a_ = global_stardustToolsMap[vulnData].arrayItemsConvetXpArray;
	var layer_i = 0;
	for (; layer_i < crossfilterable_layers.length; layer_i++)
	{
		if (crossfilterable_layers[layer_i] == nextChildID)
		{
			theH = _a_[layer_i];
			break;
		}
	}
	var nextChild = getItem(nextChildID);
	var isox = theH * nextChild * isofac;
	if (getItem("stardust") >= isox)
	{
		return nextChild;
	}
	else
	{
		return parseInt(getItem("stardust") / (theH * isofac));
	}
};
