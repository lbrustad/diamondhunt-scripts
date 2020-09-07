/**
 * refreshTradables extracted from ../../deobfuscated/bundle.js at line 17818-17833
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTradables.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTradables(_0x3746)
{
	global_TradablesData = [];
	var _0x3763 = _0x3746.split("~");
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607++)
	{
		var _0x3933 = _0x3763[_0x3607];
		_0x3607++;
		var _0x3D0D = _0x3763[_0x3607];
		_0x3607++;
		var _0x3D47 = _0x3763[_0x3607];
		_0x3607++;
		var _0x3C5F = _0x3763[_0x3607];
		global_TradablesData.push(new Tradables(_0x3933, _0x3D0D, _0x3D47, _0x3C5F))
	}
}