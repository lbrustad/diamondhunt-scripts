'use strict';

function MagicTransformRecipe(oSettings, iLevel, sMesg, boardManager, isSlidingUp, $cont, $slides, callback, scopeIn)
{
	this.itemName = oSettings;
	this.level = iLevel;
	this.stardust = boardManager;
	this.output1 = isSlidingUp;
	this.output2 = $slides;
	this.output1Amount = $cont;
	this.output2Amount = callback;
	this.obtainedItemVar = scopeIn;
	this.xp = sMesg;
};
