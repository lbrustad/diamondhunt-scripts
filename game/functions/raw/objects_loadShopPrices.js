/**
 * objects_loadShopPrices extracted from ../../deobfuscated/bundle.js at line 5233-5249
 *
 * If this file doesn't contain a function, there is an error in ../raw/objects_loadShopPrices.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function objects_loadShopPrices(_0x14DB0)
{
	var _0x1841A = null;
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x17349 = 0;
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C += 0)
	{
		var _0x14D47 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x15E18 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		_0x1841A = new ItemPrice(_0x14D47, _0x15E18);
		global_itemPriceMap[_0x14D47] = _0x1841A;
		global_itemPriceMap[_0x17349] = _0x1841A;
		_0x17349++
	}
}