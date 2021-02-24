/**
 * getLevel extracted from ../../deobfuscated/bundle.js at line 12371-12392
 *
 * If this file doesn't contain a function, there is an error in ../raw/getLevel.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getLevel(_0x1720E, _0x171EB)
{
	if (_0x1720E == 0)
	{
		return 1
	};
	var _0x171C8 = 100;
	if (_0x171EB)
	{
		_0x171C8 = 1000
	};
	for (var _0x14C0C = 1; _0x14C0C <= _0x171C8; _0x14C0C++)
	{
		var _0x17231 = 3 + (_0x14C0C / 200);
		var _0x15909 = Math.pow(_0x14C0C, _0x17231);
		if (_0x1720E < _0x15909)
		{
			return _0x14C0C - 1
		}
	};
	return _0x171C8
}