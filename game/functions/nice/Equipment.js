'use strict';

function Equipment(name, lifecycle, a, arg, network, magic, oDD, sGroup, iColspan)
{
	this.name = name;
	this.accuracy = lifecycle;
	this.attack = a;
	this.speed = arg;
	this.defence = network;
	this.magic = magic;
	this.slot = oDD;
	this.type = sGroup;
	this.desc = iColspan;
};
