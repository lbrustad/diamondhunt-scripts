'use strict';

function objects_loadMachinery(clusterShardData)
{
	var polygon = null;
	var data = clusterShardData.split("~");
	var i = 0;
	var level = 0;
	for (; level < data.length; level = level + 0)
	{
		var map = data[level];
		level++;
		var code = data[level];
		level++;
		var rows = data[level];
		level++;
		var speed = data[level];
		level++;
		var color = data[level];
		level++;
		var val = data[level];
		level++;
		var start = data[level];
		level++;
		var max = data[level];
		level++;
		polygon = new Machinery(map, code, rows, speed, color, val, start, max);
		global_machineryMap[i] = polygon;
		i++;
	}
};
