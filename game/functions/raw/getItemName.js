/**
 * getItemName extracted from ../../deobfuscated/bundle.js at line 3135-3147
 *
 * If this file doesn't contain a function, there is an error in ../raw/getItemName.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getItemName(_0x1C83E)
{
	var _0x1D40E = _0x1C83E.charAt(0).toUpperCase();
	for (var _0x1C6B6 = 1; _0x1C6B6 < _0x1C83E.length; _0x1C6B6++)
	{
		if (_0x1C83E.charAt(_0x1C6B6) == _0x1C83E.charAt(_0x1C6B6).toUpperCase() && _0x1C83E.charAt(_0x1C6B6) != "\'")
		{
			_0x1D40E += " "
		};
		_0x1D40E += _0x1C83E.charAt(_0x1C6B6)
	};
	return _0x1D40E
}