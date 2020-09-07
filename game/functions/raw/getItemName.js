/**
 * getItemName extracted from ../../deobfuscated/bundle.js at line 4052-4068
 *
 * If this file doesn't contain a function, there is an error in ../raw/getItemName.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getItemName(_0x3933)
{
	if (_0x3933 == ("stardust1000"))
	{
		return "Stardust x 1000"
	};
	var _0x53EF = _0x3933.charAt(0).toUpperCase();
	for (var _0x3607 = 1; _0x3607 < _0x3933.length; _0x3607++)
	{
		if (_0x3933.charAt(_0x3607) == _0x3933.charAt(_0x3607).toUpperCase() && _0x3933.charAt(_0x3607) != "\'")
		{
			_0x53EF += " "
		};
		_0x53EF += _0x3933.charAt(_0x3607)
	};
	return _0x53EF
}