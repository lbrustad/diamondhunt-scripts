/**
 * doPostMarket extracted from ../../deobfuscated/bundle.js at line 12751-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/doPostMarket.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function doPostMarket(_0x1C83E, _0x1CDC4, _0x1CDD2)
{
	_0x1CDC4 = convertNumberWithLetrtsKMBToNumber(_0x1CDC4);
	_0x1CDD2 = convertNumberWithLetrtsKMBToNumber(_0x1CDD2);
	confirmDialogue("images/shop_black.png", "Are you sure you want to post this on the market?<span style=\'color:grey\'><br /><br /><img src=\'images/" + _0x1C83E + ".png\' class=\'img-30\' /> <b>Selling: </b>" + formatNumber(_0x1CDC4) + "<br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Price each: </b>" + formatNumber(_0x1CDD2) + "<br /><br /><img src=\'images/coinPile.png\' class=\'img-30\'> <b>Total: </b>" + formatNumber(_0x1CDC4 * _0x1CDD2) + "</span>", "Confirm Post", "Cancel", "POST_MARKET=" + _0x1C83E + "~" + _0x1CDC4 + "~" + _0x1CDD2 + "~" + openTradablesDialogue_slot)
}