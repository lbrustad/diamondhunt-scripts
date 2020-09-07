/**
 * browseMarketItem extracted from ../../deobfuscated/bundle.js at line 17617-17622
 *
 * If this file doesn't contain a function, there is an error in ../raw/browseMarketItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function browseMarketItem(_0x3933)
{
	var _0x4209 = getItemName(_0x3933);
	document.getElementById("market-filter").value = _0x4209;
	marketFilter(_0x4209, true)
}