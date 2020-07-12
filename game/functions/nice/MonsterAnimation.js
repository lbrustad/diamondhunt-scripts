'use strict';

function MonsterAnimation(_at_name, tag, arg)
{
	this.name = _at_name;
	this.framesArray = tag;
	this.speed = arg;
	this.getNumberOfFrames = function ()
	{
		return this.framesArray.length;
	};
};
