'use strict';

function idleHeroCanvasTickFrame()
{
	this.frameNumber = 0;
	this.tick = function ()
	{
		this.frameNumber++;
		if (this.frameNumber > 1)
		{
			this.frameNumber = 0;
		}
	};
	this.getYValue = function ()
	{
		return this.frameNumber * 3;
	};
};
