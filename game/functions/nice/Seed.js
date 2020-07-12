'use strict';

function Seed(data, level, options, val, diff, element, disable_center, ceTitle, ceDescription)
{
	this.name = data;
	this.level = level;
	this.stopsDieingAtLevel = options;
	this.bonemeal = val;
	this.xp = diff;
	this.timer = element;
	this.droprate = disable_center;
	this.isTreeSeed = ceTitle;
	this.desc = ceDescription;
};
