'use strict';

function idleFightingHeroCanvasTickFrame()
{
	this.frameNumber = 0;
	this.fps = 25;
	this.fpsAt = 0;
	this.tick = function ()
	{
		if (this.fpsAt == this.fps)
		{
			this.frameNumber++;
			if (this.frameNumber > 1)
			{
				this.frameNumber = 0;
			}
			this.fpsAt = 0;
		}
		this.fpsAt++;
	};
	this.getYValue = function ()
	{
		return this.frameNumber * 3;
	};
};
