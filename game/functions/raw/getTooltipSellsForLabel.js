/**
 * getTooltipSellsForLabel extracted from ../../deobfuscated/bundle.js at line 12131-12138
 *
 * If this file doesn't contain a function, there is an error in ../raw/getTooltipSellsForLabel.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getTooltipSellsForLabel(_0x16255)
{
	if (global_itemPriceMap[_0x16255] != null)
	{
		return "<br /><br /><div class=\'sell-tooltip-container\'><img src=\'images/shop_black.png\' class=\'img-20\' /> <b>Sells for:</b> <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(global_itemPriceMap[_0x16255].price) + "</div>"
	};
	return ""
}