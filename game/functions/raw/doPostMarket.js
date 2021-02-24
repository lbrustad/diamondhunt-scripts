/**
 * doPostMarket extracted from ../../deobfuscated/bundle.js at line 21432-21437
 *
 * If this file doesn't contain a function, there is an error in ../raw/doPostMarket.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function doPostMarket(_0x15003, _0x15DF5, _0x15E18)
{
	_0x15DF5 = convertNumberWithLetrtsKMBToNumber(_0x15DF5);
	_0x15E18 = convertNumberWithLetrtsKMBToNumber(_0x15E18);
	confirmDialogue("images/shop_black.png", "Are you sure you want to post this on the market?<span style=\'color:grey\'><br /><br /><img src=\'images/" + _0x15003 + ".png\' class=\'img-30\' /> <b>Selling: </b>" + formatNumber(_0x15DF5) + "<br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Price each: </b>" + formatNumber(_0x15E18) + "<br /><br /><img src=\'images/coinPile.png\' class=\'img-30\'> <b>Total: </b>" + formatNumber(_0x15DF5 * _0x15E18) + "</span>", "Confirm Post", "Cancel", "POST_MARKET=" + _0x15003 + "~" + _0x15DF5 + "~" + _0x15E18 + "~" + openTradablesDialogue_slot)
}