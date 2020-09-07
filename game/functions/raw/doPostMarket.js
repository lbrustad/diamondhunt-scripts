/**
 * doPostMarket extracted from ../../deobfuscated/bundle.js at line 17682-17687
 *
 * If this file doesn't contain a function, there is an error in ../raw/doPostMarket.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function doPostMarket(_0x3933, _0x44C1, _0x44DE)
{
	_0x44C1 = convertNumberWithLetrtsKMBToNumber(_0x44C1);
	_0x44DE = convertNumberWithLetrtsKMBToNumber(_0x44DE);
	confirmDialogue("images/shop_black.png", "Are you sure you want to post this on the market?<span style=\'color:grey\'><br /><br /><img src=\'images/" + _0x3933 + ".png\' class=\'img-30\' /> <b>Selling: </b>" + formatNumber(_0x44C1) + "<br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Price each: </b>" + formatNumber(_0x44DE) + "<br /><br /><img src=\'images/coinPile.png\' class=\'img-30\'> <b>Total: </b>" + formatNumber(_0x44C1 * _0x44DE) + "</span>", "Confirm Post", "Cancel", "POST_MARKET=" + _0x3933 + "~" + _0x44C1 + "~" + _0x44DE + "~" + openTradablesDialogue_slot)
}