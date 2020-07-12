/**
 * getItem extracted from ../../deobfuscated/bundle.js at line 2073-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/getItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getItem(_0x1D400, _0x1D3F2)
{
	if (window["var_" + _0x1D400] == null)
	{
		if (_0x1D3F2)
		{
			return "none"
		}
		else
		{
			return 0
		}
	};
	var _0x1C7B2 = window["var_" + _0x1D400];
	if (isNaN(_0x1C7B2))
	{
		return _0x1C7B2
	}
	else
	{
		return parseInt(_0x1C7B2)
	}
}