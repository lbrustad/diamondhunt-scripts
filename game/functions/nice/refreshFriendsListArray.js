'use strict';

function refreshFriendsListArray(menupath)
{
	var crossfilterable_layers = menupath.split("~");
	var layer_i = 0;
	for (; layer_i < crossfilterable_layers.length; layer_i++)
	{
		global_friendsAndIgnoreList[crossfilterable_layers[layer_i]] = crossfilterable_layers[layer_i + 1];
		layer_i++;
	}
};
