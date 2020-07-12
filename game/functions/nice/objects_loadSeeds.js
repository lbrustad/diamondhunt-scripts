'use strict';

function objects_loadSeeds(clusterShardData)
{
	var action = null;
	var self = clusterShardData.split("~");
	var PENDING_ACTION = 0;
	var i = 0;
	for (; i < self.length; i = i + 0)
	{
		var type = self[i];
		i++;
		var suffix = self[i];
		i++;
		var value = self[i];
		i++;
		var mnu = self[i];
		i++;
		var icon = self[i];
		i++;
		var cmp = self[i];
		i++;
		var feature = self[i];
		i++;
		var component = self[i];
		i++;
		var f = self[i];
		i++;
		action = new Seed(type, suffix, value, mnu, icon, cmp, feature, component, f);
		global_seedMap[type] = action;
		global_seedMap[PENDING_ACTION] = action;
		PENDING_ACTION++;
	}
};
