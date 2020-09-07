/**
 * objects_loadShopPrices extracted from ../../deobfuscated/bundle.js at line 4530-4546
 *
 * If this file doesn't contain a function, there is an error in ../raw/objects_loadShopPrices.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function objects_loadShopPrices(_0x3746)
{
	var _0x61C1 = null;
	var _0x3763 = _0x3746.split("~");
	var _0x554B = 0;
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607 += 0)
	{
		var _0x4ED6 = _0x3763[_0x3607];
		_0x3607++;
		var _0x44DE = _0x3763[_0x3607];
		_0x3607++;
		_0x61C1 = new ItemPrice(_0x4ED6, _0x44DE);
		global_itemPriceMap[_0x4ED6] = _0x61C1;
		global_itemPriceMap[_0x554B] = _0x61C1;
		_0x554B++
	}
}