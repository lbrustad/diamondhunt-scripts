/**
 * getTimeFetch extracted from ../../deobfuscated/bundle.js at line 1483-1504
 *
 * If this file doesn't contain a function, there is an error in ../raw/getTimeFetch.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getTimeFetch()
{
	var _0x511A = new Date();
	if (_0x511A.getHours() < 10)
	{
		var _0x5738 = "0" + _0x511A.getHours()
	}
	else
	{
		var _0x5738 = _0x511A.getHours()
	};
	if (_0x511A.getMinutes() < 10)
	{
		var _0x5755 = "0" + _0x511A.getMinutes()
	}
	else
	{
		var _0x5755 = _0x511A.getMinutes()
	};
	var _0x571B = "[" + _0x5738 + ":" + _0x5755 + "] ";
	return _0x571B
}