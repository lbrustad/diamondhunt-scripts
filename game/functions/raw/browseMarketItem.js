/**
 * browseMarketItem extracted from ../../deobfuscated/bundle.js at line 21367-21372
 *
 * If this file doesn't contain a function, there is an error in ../raw/browseMarketItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function browseMarketItem(_0x15003)
{
	var _0x15AAD = getItemName(_0x15003);
	document.getElementById("market-filter").value = _0x15AAD;
	marketFilter(_0x15AAD, true)
}