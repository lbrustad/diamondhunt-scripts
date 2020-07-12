/**
 * getLevel extracted from ../../deobfuscated/bundle.js at line 7829-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/getLevel.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getLevel(_0x1D41C)
{
	if (_0x1D41C == 0)
	{
		return 1
	};
	for (var _0x1C6B6 = 1; _0x1C6B6 <= 100; _0x1C6B6++)
	{
		var _0x1D42A = 3 + (_0x1C6B6 / 200);
		var _0x1CBCC = Math.pow(_0x1C6B6, _0x1D42A);
		if (_0x1D41C < _0x1CBCC)
		{
			return _0x1C6B6 - 1
		}
	};
	return 100
}