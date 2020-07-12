'use strict';

function SoundObject(url)
{
	this.url = url;
	this.obj = new Audio(url);
	this.obj.volume = 0.2;
};
