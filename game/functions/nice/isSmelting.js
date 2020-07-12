'use strict';

function isSmelting()
{
	return getItem("smeltingCurrentAmount") < getItem("smeltingRequestedAmount") && getItem("smeltingNeededTimer") > 0;
};
