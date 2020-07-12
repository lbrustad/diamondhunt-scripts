'use strict';

function MarketData(who, playerId, malakh, initialValue, value, opt_pass, opt_nextframe, isSlidingUp, $cont)
{
	this.keyFound = who;
	this.playerId = playerId;
	this.itemName = malakh;
	this.itemAmount = initialValue;
	this.price = value;
	this.itemSlot = opt_pass;
	this.itemCollect = opt_nextframe;
	this.itemCategory = isSlidingUp;
	this.postDate = $cont;
};
