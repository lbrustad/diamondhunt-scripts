/**
 * browseMarketItem extracted from ../../deobfuscated/bundle.js at line 12686-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/browseMarketItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function browseMarketItem(_0x1C83E)
{
	var _0x1CC74 = getItemName(_0x1C83E);
	document.getElementById("market-filter").value = _0x1CC74;
	marketFilter(_0x1CC74, true)
}