/**
 * refreshMarket extracted from ../../deobfuscated/bundle.js at line 12897-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshMarket.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshMarket(data)
{
	if (data == "")
	{
		return
	};
	global_MarketData = [];
	var _0x1C75E = data.split("~");
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6++)
	{
		var _0x1D96A = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D978 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1C83E = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D932 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1DD22 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D95C = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D94E = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D940 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D986 = _0x1C75E[_0x1C6B6];
		global_MarketData.push(new MarketData(_0x1D96A, _0x1D978, _0x1C83E, _0x1D932, _0x1DD22, _0x1D95C, _0x1D94E, _0x1D940, _0x1D986))
	}
}