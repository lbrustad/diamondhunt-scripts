/**
 * getBrewingTimeAdjusted extracted from ../../deobfuscated/bundle.js at line 21868-21879
 *
 * If this file doesn't contain a function, there is an error in ../raw/getBrewingTimeAdjusted.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getBrewingTimeAdjusted(_0x16DD1)
{
	var _0x16FDE = getBrewingKitDataTypes()[3];
	if (_0x16FDE == "0%")
	{
		return formatTime(_0x16DD1)
	};
	_0x16FDE = parseFloat(_0x16FDE.substr(0, _0x16FDE.length - 1));
	_0x16FDE /= 100;
	_0x16DD1 *= (parseFloat(1) + parseFloat(_0x16FDE));
	return formatTime(_0x16DD1)
}