/**
 * getEnergyReduction extracted from ../../deobfuscated/bundle.js at line 6625-6645
 *
 * If this file doesn't contain a function, there is an error in ../raw/getEnergyReduction.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getEnergyReduction(_0x16CB9)
{
	var _0x16F75 = 1.0;
	if (getItem("energyRing1") == 1)
	{
		_0x16F75 -= 0.01
	};
	if (getItem("energyRing2") == 1)
	{
		_0x16F75 -= 0.04
	};
	if (getItem("energyRing3") == 1)
	{
		_0x16F75 -= 0.10
	};
	if (getItem("energyRing3") == 1)
	{
		_0x16F75 -= 0.15
	};
	return parseInt(_0x16CB9 * _0x16F75)
}