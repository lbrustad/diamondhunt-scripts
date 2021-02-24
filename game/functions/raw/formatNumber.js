/**
 * formatNumber extracted from ../../deobfuscated/bundle.js at line 1960-1985
 *
 * If this file doesn't contain a function, there is an error in ../raw/formatNumber.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function formatNumber(_0x16D45)
{
	if (_0x16D45 == "INF")
	{
		return "<span style=\'font-size:20pt;vertical-align: middle;\'>&#8734;</span>"
	};
	if (isNaN(_0x16D45))
	{
		return _0x16D45
	};
	var _0x16D22 = "";
	if (_0x16D45 >= 1000000000 && _0x16D45 < 10000000000)
	{
		_0x16D45 /= 1000000;
		_0x16D22 = "M"
	}
	else
	{
		if (_0x16D45 >= 10000000000)
		{
			_0x16D45 /= 1000000000;
			_0x16D22 = "B"
		}
	};
	return Math.floor(_0x16D45).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "" + _0x16D22
}