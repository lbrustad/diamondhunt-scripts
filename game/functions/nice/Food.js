'use strict';

function Food(options, size, id, name, position, width, color)
{
	this.rawFoodName = options;
	this.cookedFoodName = size;
	this.heat = id;
	this.energy = name;
	this.xp = position;
	this.cookLevel = width;
	this.desc = color;
};
