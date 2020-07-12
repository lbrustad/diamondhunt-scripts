'use strict';

function objects_loadEquipment(clusterShardData)
{
	var node = null;
	var args = clusterShardData.split("~");
	var grandParentOrientation = 0;
	var i = 0;
	for (; i < args.length; i = i + 0)
	{
		var source = args[i];
		i++;
		var val = args[i];
		i++;
		var layer = args[i];
		i++;
		var parent = args[i];
		i++;
		var actor = args[i];
		i++;
		var name = args[i];
		i++;
		var oMenuItem = args[i];
		i++;
		var occupant = args[i];
		i++;
		var sqlParam = args[i];
		i++;
		node = new Equipment(source, val, layer, parent, actor, name, oMenuItem, occupant, sqlParam);
		global_equipmentMap[source] = node;
		global_equipmentMap[grandParentOrientation] = node;
		grandParentOrientation++;
	}
};
