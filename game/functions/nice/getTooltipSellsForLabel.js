'use strict';

function getTooltipSellsForLabel(unit)
{
	if (global_itemPriceMap[unit] != null)
	{
		return "<br /><br /><div class='sell-tooltip-container'><img src='images/shop_black.png' class='img-20' /> <b>Sells for:</b> <img src='images/coins.png' class='img-20' /> " + formatNumber(global_itemPriceMap[unit].price) + "</div>";
	}
	return "";
};
