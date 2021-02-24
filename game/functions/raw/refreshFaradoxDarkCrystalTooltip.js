/**
 * refreshFaradoxDarkCrystalTooltip extracted from ../../deobfuscated/bundle.js at line 1448-1472
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshFaradoxDarkCrystalTooltip.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshFaradoxDarkCrystalTooltip()
{
	var _0x18FB9 = 0;
	if (getItem("greenCrystalUsed") > 0)
	{
		_0x18FB9++
	};
	if (getItem("cyanCrystalUsed") > 0)
	{
		_0x18FB9++
	};
	if (getItem("redCrystalUsed") > 0)
	{
		_0x18FB9++
	};
	if (getItem("blueCrystalUsed") > 0)
	{
		_0x18FB9++
	};
	if (getItem("yellowCrystalUsed") > 0)
	{
		_0x18FB9++
	};
	document.getElementById("darkCrystalUsed-amm").innerHTML = _0x18FB9
}