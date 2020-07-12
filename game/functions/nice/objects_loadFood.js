'use strict';

function objects_loadFood(clusterShardData)
{
	var newFood = null;
	var args = clusterShardData.split("~");
	var expectedSiteKey = 0;
	var i = 0;
	for (; i < args.length; i = i + 0)
	{
		var id = args[i];
		i++;
		var data = args[i];
		i++;
		var sqlParam = args[i];
		i++;
		var color = args[i];
		i++;
		var width = args[i];
		i++;
		var yPos = args[i];
		i++;
		var size = args[i];
		i++;
		newFood = new Food(id, data, sqlParam, color, width, yPos, size);
		global_foodMap[id] = newFood;
		global_foodMap[data] = newFood;
		global_foodMap[expectedSiteKey] = newFood;
		expectedSiteKey++;
	}
};
