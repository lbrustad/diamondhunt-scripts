/**
 * getLevel extracted from ../../deobfuscated/bundle.js at line 10207-10228
 *
 * If this file doesn't contain a function, there is an error in ../raw/getLevel.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getLevel(_0x5446, _0x5429)
{
	if (_0x5446 == 0)
	{
		return 1
	};
	var _0x540C = 100;
	if (_0x5429)
	{
		_0x540C = 1000
	};
	for (var _0x3607 = 1; _0x3607 <= _0x540C; _0x3607++)
	{
		var _0x5463 = 3 + (_0x3607 / 200);
		var _0x40AD = Math.pow(_0x3607, _0x5463);
		if (_0x5446 < _0x40AD)
		{
			return _0x3607 - 1
		}
	};
	return _0x540C
}