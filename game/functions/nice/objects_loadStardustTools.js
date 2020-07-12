'use strict';

function objects_loadStardustTools(clusterShardData)
{
	var _a_ = null;
	var files = clusterShardData.split("~");
	var _b_ = 0;
	var key = files[0];
	var p = [];
	var options = [];
	var i = 1;
	for (; i < files.length; i = i + 0)
	{
		p.push(files[i]);
		i++;
		options.push(files[i]);
		i++;
	}
	global_stardustToolsMap[key] = new StardustTool(key, p, options);
};
