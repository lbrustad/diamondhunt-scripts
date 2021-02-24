/**
 * getItemName extracted from ../../deobfuscated/bundle.js at line 4740-4756
 *
 * If this file doesn't contain a function, there is an error in ../raw/getItemName.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getItemName(_0x15003)
{
	if (_0x15003 == ("stardust1000"))
	{
		return "Stardust x 1000"
	};
	var _0x171A5 = _0x15003.charAt(0).toUpperCase();
	for (var _0x14C0C = 1; _0x14C0C < _0x15003.length; _0x14C0C++)
	{
		if (_0x15003.charAt(_0x14C0C) == _0x15003.charAt(_0x14C0C).toUpperCase() && _0x15003.charAt(_0x14C0C) != "\'")
		{
			_0x171A5 += " "
		};
		_0x171A5 += _0x15003.charAt(_0x14C0C)
	};
	return _0x171A5
}