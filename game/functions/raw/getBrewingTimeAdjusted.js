/**
 * getBrewingTimeAdjusted extracted from ../../deobfuscated/bundle.js at line 18041-18052
 *
 * If this file doesn't contain a function, there is an error in ../raw/getBrewingTimeAdjusted.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getBrewingTimeAdjusted(_0x50C3)
{
	var _0x5293 = getBrewingKitDataTypes()[3];
	if (_0x5293 == "0%")
	{
		return formatTime(_0x50C3)
	};
	_0x5293 = parseFloat(_0x5293.substr(0, _0x5293.length - 1));
	_0x5293 /= 100;
	_0x50C3 *= (parseFloat(1) + parseFloat(_0x5293));
	return formatTime(_0x50C3)
}