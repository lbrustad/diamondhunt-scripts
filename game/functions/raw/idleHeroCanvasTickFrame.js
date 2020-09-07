/**
 * idleHeroCanvasTickFrame extracted from ../../deobfuscated/bundle.js at line 2916-2931
 *
 * If this file doesn't contain a function, there is an error in ../raw/idleHeroCanvasTickFrame.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function idleHeroCanvasTickFrame()
{
	this.frameNumber = 0;
	this.tick = function ()
	{
		this.frameNumber++;
		if (this.frameNumber > 1)
		{
			this.frameNumber = 0
		}
	};
	this.getYValue = function ()
	{
		return this.frameNumber * 3
	}
}