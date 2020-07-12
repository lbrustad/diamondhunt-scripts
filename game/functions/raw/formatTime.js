/**
 * formatTime extracted from ../../deobfuscated/bundle.js at line 2221-2259
 *
 * If this file doesn't contain a function, there is an error in ../raw/formatTime.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function formatTime(_0x1D2DA)
{
	if (_0x1D2DA <= 0)
	{
		return "0"
	};
	var _0x1C7A4 = _0x1D2DA;
	var _0x1D2B0 = ~~(_0x1C7A4 / 3600);
	var _0x1D2BE = ~~((_0x1C7A4 % 3600) / 60);
	var _0x1D2E8 = (_0x1C7A4 % 60).toFixed(0);
	var _0x1D2CC = "";
	days = 0;
	while (_0x1D2B0 >= 24)
	{
		_0x1D2B0 -= 24;
		days++
	};
	if (_0x1D2B0 > 0)
	{
		_0x1D2CC += "" + _0x1D2B0 + ":" + (_0x1D2BE < 10 ? "0" : "")
	};
	_0x1D2CC += "" + _0x1D2BE + ":" + (_0x1D2E8 < 10 ? "0" : "");
	_0x1D2CC += "" + _0x1D2E8;
	if (days > 1)
	{
		return days + " days, " + _0x1D2CC
	}
	else
	{
		if (days == 1)
		{
			return days + " day, " + _0x1D2CC
		}
		else
		{
			return _0x1D2CC
		}
	}
}