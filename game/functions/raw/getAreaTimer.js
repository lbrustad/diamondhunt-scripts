/**
 * getAreaTimer extracted from ../../deobfuscated/bundle.js at line 6647-6667
 *
 * If this file doesn't contain a function, there is an error in ../raw/getAreaTimer.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getAreaTimer(_0x16F98)
{
	var _0x16F75 = 1.0;
	if (getItem("cooldownRing1") == 1)
	{
		_0x16F75 -= 0.01
	};
	if (getItem("cooldownRing2") == 1)
	{
		_0x16F75 -= 0.04
	};
	if (getItem("cooldownRing3") == 1)
	{
		_0x16F75 -= 0.10
	};
	if (getItem("cooldownRing4") == 1)
	{
		_0x16F75 -= 0.15
	};
	return parseInt(_0x16F98 * _0x16F75)
}