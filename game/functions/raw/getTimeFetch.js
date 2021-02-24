/**
 * getTimeFetch extracted from ../../deobfuscated/bundle.js at line 1780-1801
 *
 * If this file doesn't contain a function, there is an error in ../raw/getTimeFetch.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getTimeFetch()
{
	var _0x16E3A = new Date();
	if (_0x16E3A.getHours() < 10)
	{
		var _0x17605 = "0" + _0x16E3A.getHours()
	}
	else
	{
		var _0x17605 = _0x16E3A.getHours()
	};
	if (_0x16E3A.getMinutes() < 10)
	{
		var _0x17628 = "0" + _0x16E3A.getMinutes()
	}
	else
	{
		var _0x17628 = _0x16E3A.getMinutes()
	};
	var _0x175E2 = "[" + _0x17605 + ":" + _0x17628 + "] ";
	return _0x175E2
}