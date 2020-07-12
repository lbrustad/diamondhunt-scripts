/**
 * getTimeFetch extracted from ../../deobfuscated/bundle.js at line 1155-1176
 *
 * If this file doesn't contain a function, there is an error in ../raw/getTimeFetch.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getTimeFetch()
{
	var _0x1D304 = new Date();
	if (_0x1D304.getHours() < 10)
	{
		var _0x1D57A = "0" + _0x1D304.getHours()
	}
	else
	{
		var _0x1D57A = _0x1D304.getHours()
	};
	if (_0x1D304.getMinutes() < 10)
	{
		var _0x1D588 = "0" + _0x1D304.getMinutes()
	}
	else
	{
		var _0x1D588 = _0x1D304.getMinutes()
	};
	var _0x1D56C = "[" + _0x1D57A + ":" + _0x1D588 + "] ";
	return _0x1D56C
}