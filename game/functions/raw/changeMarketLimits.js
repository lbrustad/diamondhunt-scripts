/**
 * changeMarketLimits extracted from ../../deobfuscated/bundle.js at line 21439-21444
 *
 * If this file doesn't contain a function, there is an error in ../raw/changeMarketLimits.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changeMarketLimits(_0x15003, _0x15DF5, _0x15E18)
{
	_0x15DF5 = convertNumberWithLetrtsKMBToNumber(_0x15DF5);
	_0x15E18 = convertNumberWithLetrtsKMBToNumber(_0x15E18);
	confirmDialogue("images/" + _0x15003 + ".png", "Are you sure you want to modifiy the price limits?<span style=\'color:grey\'><br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Lower: </b>" + formatNumber(_0x15DF5) + "<br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Upper: </b>" + formatNumber(_0x15E18), "Confirm Price Margins", "Cancel", "CHANGE_MARGIN_MARKET=" + _0x15003 + "~" + _0x15DF5 + "~" + _0x15E18)
}