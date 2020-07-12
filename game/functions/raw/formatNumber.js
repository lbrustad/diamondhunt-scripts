/**
 * formatNumber extracted from ../../deobfuscated/bundle.js at line 1288-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/formatNumber.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function formatNumber(_0x1D2A2)
{
	if (_0x1D2A2 == "INF")
	{
		return "<span style=\'font-size:20pt;vertical-align: middle;\'>&#8734;</span>"
	};
	if (isNaN(_0x1D2A2))
	{
		return _0x1D2A2
	};
	var _0x1D294 = "";
	if (_0x1D2A2 >= 1000000000 && _0x1D2A2 < 10000000000)
	{
		_0x1D2A2 /= 1000000;
		_0x1D294 = "M"
	}
	else
	{
		if (_0x1D2A2 >= 10000000000)
		{
			_0x1D2A2 /= 1000000000;
			_0x1D294 = "B"
		}
	};
	return Math.floor(_0x1D2A2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "" + _0x1D294
}