/**
 * getTooltipSellsForLabel extracted from ../../deobfuscated/bundle.js at line 7641-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/getTooltipSellsForLabel.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getTooltipSellsForLabel(_0x1CF30)
{
	if (global_itemPriceMap[_0x1CF30] != null)
	{
		return "<br /><br /><div class=\'sell-tooltip-container\'><img src=\'images/shop_black.png\' class=\'img-20\' /> <b>Sells for:</b> <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(global_itemPriceMap[_0x1CF30].price) + "</div>"
	};
	return ""
}