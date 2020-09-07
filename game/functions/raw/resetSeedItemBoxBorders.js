/**
 * resetSeedItemBoxBorders extracted from ../../deobfuscated/bundle.js at line 8671-8681
 *
 * If this file doesn't contain a function, there is an error in ../raw/resetSeedItemBoxBorders.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function resetSeedItemBoxBorders()
{
	for (var _0x3607 = 0; _0x3607 < global_seedMap.length; _0x3607++)
	{
		var _0x5A64 = global_seedMap[_0x3607];
		if (document.getElementById("item-box-" + _0x5A64.name) != null)
		{
			document.getElementById("item-box-" + _0x5A64.name).style.border = "1px solid grey"
		}
	}
}