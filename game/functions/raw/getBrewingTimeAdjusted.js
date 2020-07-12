/**
 * getBrewingTimeAdjusted extracted from ../../deobfuscated/bundle.js at line 13061-13072
 *
 * If this file doesn't contain a function, there is an error in ../raw/getBrewingTimeAdjusted.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getBrewingTimeAdjusted(_0x1D2DA)
{
	var _0x1D374 = getBrewingKitDataTypes()[3];
	if (_0x1D374 == "0%")
	{
		return formatTime(_0x1D2DA)
	};
	_0x1D374 = parseFloat(_0x1D374.substr(0, _0x1D374.length - 1));
	_0x1D374 /= 100;
	_0x1D2DA *= (parseFloat(1) + parseFloat(_0x1D374));
	return formatTime(_0x1D2DA)
}