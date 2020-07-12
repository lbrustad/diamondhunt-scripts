'use strict';

function getXpNeeded(inverseDampingFactor)
{
	return parseInt(Math.pow(inverseDampingFactor, 3 + inverseDampingFactor / 200));
};
