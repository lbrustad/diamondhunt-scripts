'use strict';

function getLevel(fn)
{
	if (fn == 0)
	{
		return 1;
	}
	var level = 1;
	for (; level <= 100; level++)
	{
		var size = 3 + level / 200;
		var resizeUrl = Math.pow(level, size);
		if (fn < resizeUrl)
		{
			return level - 1;
		}
	}
	return 100;
};
