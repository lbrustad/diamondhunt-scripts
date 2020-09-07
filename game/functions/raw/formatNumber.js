/**
 * formatNumber extracted from ../../deobfuscated/bundle.js at line 1603-1628
 *
 * If this file doesn't contain a function, there is an error in ../raw/formatNumber.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function formatNumber(_0x504F)
{
	if (_0x504F == "INF")
	{
		return "<span style=\'font-size:20pt;vertical-align: middle;\'>&#8734;</span>"
	};
	if (isNaN(_0x504F))
	{
		return _0x504F
	};
	var _0x5032 = "";
	if (_0x504F >= 1000000000 && _0x504F < 10000000000)
	{
		_0x504F /= 1000000;
		_0x5032 = "M"
	}
	else
	{
		if (_0x504F >= 10000000000)
		{
			_0x504F /= 1000000000;
			_0x5032 = "B"
		}
	};
	return Math.floor(_0x504F).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "" + _0x5032
}