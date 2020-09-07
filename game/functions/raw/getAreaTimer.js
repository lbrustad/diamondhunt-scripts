/**
 * getAreaTimer extracted from ../../deobfuscated/bundle.js at line 5674-5690
 *
 * If this file doesn't contain a function, there is an error in ../raw/getAreaTimer.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getAreaTimer(_0x523C)
{
	var _0x521F = 1.0;
	if (getItem("cooldownRing1") == 1)
	{
		_0x521F -= 0.01
	};
	if (getItem("cooldownRing2") == 1)
	{
		_0x521F -= 0.04
	};
	if (getItem("cooldownRing3") == 1)
	{
		_0x521F -= 0.10
	};
	return parseInt(_0x523C * _0x521F)
}