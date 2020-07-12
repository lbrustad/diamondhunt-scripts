'use strict';

function ImageObject(data)
{
	this.url = data;
	this.obj = new Image;
	this.obj.src = data;
};
