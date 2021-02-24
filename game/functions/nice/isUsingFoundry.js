'use strict';

function isUsingFoundry()
{
	return getItem("charcoalFoundryCurrentAmount") < getItem("charcoalFoundryRequestedAmount") && getItem("charcoalFoundryNeededTimer") > 0;
};
