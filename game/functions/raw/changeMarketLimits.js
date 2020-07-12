/**
 * changeMarketLimits extracted from ../../deobfuscated/bundle.js at line 12746-12751
 *
 * If this file doesn't contain a function, there is an error in ../raw/changeMarketLimits.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changeMarketLimits(_0x1C83E, _0x1CDC4, _0x1CDD2)
{
	_0x1CDC4 = convertNumberWithLetrtsKMBToNumber(_0x1CDC4);
	_0x1CDD2 = convertNumberWithLetrtsKMBToNumber(_0x1CDD2);
	confirmDialogue("images/" + _0x1C83E + ".png", "Are you sure you want to modifiy the price limits?<span style=\'color:grey\'><br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Lower: </b>" + formatNumber(_0x1CDC4) + "<br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Upper: </b>" + formatNumber(_0x1CDD2), "Confirm Price Margins", "Cancel", "CHANGE_MARGIN_MARKET=" + _0x1C83E + "~" + _0x1CDC4 + "~" + _0x1CDD2)
}