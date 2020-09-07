'use strict';

function getLevel(levelsetIndex, levelIndex)
{
	if (levelsetIndex == 0)
	{
		return 1;
	}
	var logLevel = 100;
	if (levelIndex)
	{
		logLevel = 1000;
	}
	var level = 1;
	for (; level <= logLevel; level++)
	{
		var size = 3 + level / 200;
		var resizeUrl = Math.pow(level, size);
		if (levelsetIndex < resizeUrl)
		{
			return level - 1;
		}
	}
	return logLevel;
};
