/**
 * objects_loadShopPrices extracted from ../../deobfuscated/bundle.js at line 3581-3597
 *
 * If this file doesn't contain a function, there is an error in ../raw/objects_loadShopPrices.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function objects_loadShopPrices(_0x1C750)
{
	var _0x1DA20 = null;
	var _0x1C75E = _0x1C750.split("~");
	var _0x1D48C = 0;
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6 += 0)
	{
		var _0x1D1EC = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1CDD2 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		_0x1DA20 = new ItemPrice(_0x1D1EC, _0x1CDD2);
		global_itemPriceMap[_0x1D1EC] = _0x1DA20;
		global_itemPriceMap[_0x1D48C] = _0x1DA20;
		_0x1D48C++
	}
}