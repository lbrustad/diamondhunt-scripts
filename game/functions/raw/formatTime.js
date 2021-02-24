/**
 * formatTime extracted from ../../deobfuscated/bundle.js at line 3506-3544
 *
 * If this file doesn't contain a function, there is an error in ../raw/formatTime.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function formatTime(_0x16DD1)
{
	if (_0x16DD1 <= 0)
	{
		return "0"
	};
	var _0x14E82 = _0x16DD1;
	var _0x16D68 = ~~(_0x14E82 / 3600);
	var _0x16D8B = ~~((_0x14E82 % 3600) / 60);
	var _0x16DF4 = (_0x14E82 % 60).toFixed(0);
	var _0x16DAE = "";
	days = 0;
	while (_0x16D68 >= 24)
	{
		_0x16D68 -= 24;
		days++
	};
	if (_0x16D68 > 0)
	{
		_0x16DAE += "" + _0x16D68 + ":" + (_0x16D8B < 10 ? "0" : "")
	};
	_0x16DAE += "" + _0x16D8B + ":" + (_0x16DF4 < 10 ? "0" : "");
	_0x16DAE += "" + _0x16DF4;
	if (days > 1)
	{
		return days + " days, " + _0x16DAE
	}
	else
	{
		if (days == 1)
		{
			return days + " day, " + _0x16DAE
		}
		else
		{
			return _0x16DAE
		}
	}
}