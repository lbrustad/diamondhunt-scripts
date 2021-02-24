/**
 * refreshTradables extracted from ../../deobfuscated/bundle.js at line 21568-21583
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTradables.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTradables(_0x14DB0)
{
	global_TradablesData = [];
	var _0x14DD3 = _0x14DB0.split("~");
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C++)
	{
		var _0x15003 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x154A9 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x154EF = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x153D7 = _0x14DD3[_0x14C0C];
		global_TradablesData.push(new Tradables(_0x15003, _0x154A9, _0x154EF, _0x153D7))
	}
}