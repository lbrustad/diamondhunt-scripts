/**
 * refreshTradables extracted from ../../deobfuscated/bundle.js at line 12880-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTradables.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTradables(data)
{
	global_TradablesData = [];
	var _0x1C75E = data.split("~");
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6++)
	{
		var _0x1C83E = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1CA0C = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1CA28 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1C9B8 = _0x1C75E[_0x1C6B6];
		global_TradablesData.push(new Tradables(_0x1C83E, _0x1CA0C, _0x1CA28, _0x1C9B8))
	}
}