'use strict';

function getItemPrice(unit)
{
	if (global_itemPriceMap[unit] != null)
	{
		return global_itemPriceMap[unit].price;
	}
	return 0;
};
