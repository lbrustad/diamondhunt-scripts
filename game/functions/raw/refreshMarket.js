/**
 * refreshMarket extracted from ../../deobfuscated/bundle.js at line 17835-17864
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshMarket.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshMarket(_0x3746)
{
	if (_0x3746 == "")
	{
		return
	};
	global_MarketData = [];
	var _0x3763 = _0x3746.split("~");
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607++)
	{
		var _0x5FD4 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5FF1 = _0x3763[_0x3607];
		_0x3607++;
		var _0x3933 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5F60 = _0x3763[_0x3607];
		_0x3607++;
		var _0x69E9 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5FB7 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5F9A = _0x3763[_0x3607];
		_0x3607++;
		var _0x5F7D = _0x3763[_0x3607];
		_0x3607++;
		var _0x600E = _0x3763[_0x3607];
		global_MarketData.push(new MarketData(_0x5FD4, _0x5FF1, _0x3933, _0x5F60, _0x69E9, _0x5FB7, _0x5F9A, _0x5F7D, _0x600E))
	}
}