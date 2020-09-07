/**
 * refreshFaradoxDarkCrystalTooltip extracted from ../../deobfuscated/bundle.js at line 1200-1220
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshFaradoxDarkCrystalTooltip.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshFaradoxDarkCrystalTooltip()
{
	var _0x6B7F = 0;
	if (getItem("greenCrystalUsed") > 0)
	{
		_0x6B7F++
	};
	if (getItem("cyanCrystalUsed") > 0)
	{
		_0x6B7F++
	};
	if (getItem("redCrystalUsed") > 0)
	{
		_0x6B7F++
	};
	if (getItem("blueCrystalUsed") > 0)
	{
		_0x6B7F++
	};
	document.getElementById("darkCrystalUsed-amm").innerHTML = _0x6B7F
}