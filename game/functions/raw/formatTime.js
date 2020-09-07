/**
 * formatTime extracted from ../../deobfuscated/bundle.js at line 2876-2914
 *
 * If this file doesn't contain a function, there is an error in ../raw/formatTime.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function formatTime(_0x50C3)
{
	if (_0x50C3 <= 0)
	{
		return "0"
	};
	var _0x37F4 = _0x50C3;
	var _0x506C = ~~(_0x37F4 / 3600);
	var _0x5089 = ~~((_0x37F4 % 3600) / 60);
	var _0x50E0 = (_0x37F4 % 60).toFixed(0);
	var _0x50A6 = "";
	days = 0;
	while (_0x506C >= 24)
	{
		_0x506C -= 24;
		days++
	};
	if (_0x506C > 0)
	{
		_0x50A6 += "" + _0x506C + ":" + (_0x5089 < 10 ? "0" : "")
	};
	_0x50A6 += "" + _0x5089 + ":" + (_0x50E0 < 10 ? "0" : "");
	_0x50A6 += "" + _0x50E0;
	if (days > 1)
	{
		return days + " days, " + _0x50A6
	}
	else
	{
		if (days == 1)
		{
			return days + " day, " + _0x50A6
		}
		else
		{
			return _0x50A6
		}
	}
}