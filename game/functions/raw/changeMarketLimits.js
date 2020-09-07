/**
 * changeMarketLimits extracted from ../../deobfuscated/bundle.js at line 17689-17694
 *
 * If this file doesn't contain a function, there is an error in ../raw/changeMarketLimits.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changeMarketLimits(_0x3933, _0x44C1, _0x44DE)
{
	_0x44C1 = convertNumberWithLetrtsKMBToNumber(_0x44C1);
	_0x44DE = convertNumberWithLetrtsKMBToNumber(_0x44DE);
	confirmDialogue("images/" + _0x3933 + ".png", "Are you sure you want to modifiy the price limits?<span style=\'color:grey\'><br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Lower: </b>" + formatNumber(_0x44C1) + "<br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Upper: </b>" + formatNumber(_0x44DE), "Confirm Price Margins", "Cancel", "CHANGE_MARGIN_MARKET=" + _0x3933 + "~" + _0x44C1 + "~" + _0x44DE)
}