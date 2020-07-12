'use strict';

function Machinery(comment, oil, weight, motionQueueEnt, isSlidingUp, $cont, $slides, callback)
{
	this.machineryName = comment;
	this.oil = oil;
	this.stoneChance = weight;
	this.copperChance = motionQueueEnt;
	this.ironChance = isSlidingUp;
	this.silverChance = $cont;
	this.goldChance = $slides;
	this.promethiumChance = callback;
};
