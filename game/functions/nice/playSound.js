'use strict';

function playSound(settings)
{
	if (global_SoundCache[settings] != null)
	{
		return global_SoundCache[settings].obj.play();
	}
	var wickedGrid = new SoundObject(settings);
	global_SoundCache[settings] = wickedGrid;
	return wickedGrid.obj.play();
};
