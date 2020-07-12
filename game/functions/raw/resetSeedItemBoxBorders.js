/**
 * resetSeedItemBoxBorders extracted from ../../deobfuscated/bundle.js at line 6569-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/resetSeedItemBoxBorders.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function resetSeedItemBoxBorders()
{
	for (var _0x1C6B6 = 0; _0x1C6B6 < global_seedMap.length; _0x1C6B6++)
	{
		var _0x1D6E6 = global_seedMap[_0x1C6B6];
		if (document.getElementById("item-box-" + _0x1D6E6.name) != null)
		{
			document.getElementById("item-box-" + _0x1D6E6.name).style.border = "1px solid grey"
		}
	}
}