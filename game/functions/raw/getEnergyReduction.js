/**
 * getEnergyReduction extracted from ../../deobfuscated/bundle.js at line 5656-5672
 *
 * If this file doesn't contain a function, there is an error in ../raw/getEnergyReduction.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getEnergyReduction(_0x4FDB)
{
	var _0x521F = 1.0;
	if (getItem("energyRing1") == 1)
	{
		_0x521F -= 0.01
	};
	if (getItem("energyRing2") == 1)
	{
		_0x521F -= 0.04
	};
	if (getItem("energyRing3") == 1)
	{
		_0x521F -= 0.10
	};
	return parseInt(_0x4FDB * _0x521F)
}