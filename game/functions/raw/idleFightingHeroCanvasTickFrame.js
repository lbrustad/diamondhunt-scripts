/**
 * idleFightingHeroCanvasTickFrame extracted from ../../deobfuscated/bundle.js at line 2278-2300
 *
 * If this file doesn't contain a function, there is an error in ../raw/idleFightingHeroCanvasTickFrame.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

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
				this.frameNumber = 0
			};
			this.fpsAt = 0
		};
		this.fpsAt++
	};
	this.getYValue = function ()
	{
		return this.frameNumber * 3
	}
}