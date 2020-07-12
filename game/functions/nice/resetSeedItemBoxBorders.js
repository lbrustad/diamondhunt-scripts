'use strict';

function resetSeedItemBoxBorders()
{
	var layer_i = 0;
	for (; layer_i < global_seedMap.length; layer_i++)
	{
		var layer = global_seedMap[layer_i];
		if (document.getElementById("item-box-" + layer.name) != null)
		{
			document.getElementById("item-box-" + layer.name).style.border = "1px solid grey";
		}
	}
};
