/**
 * resetSeedItemBoxBorders extracted from ../../deobfuscated/bundle.js at line 10428-10438
 *
 * If this file doesn't contain a function, there is an error in ../raw/resetSeedItemBoxBorders.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function resetSeedItemBoxBorders()
{
	for (var _0x14C0C = 0; _0x14C0C < global_seedMap.length; _0x14C0C++)
	{
		var _0x17ACE = global_seedMap[_0x14C0C];
		if (document.getElementById("item-box-" + _0x17ACE.name) != null)
		{
			document.getElementById("item-box-" + _0x17ACE.name).style.border = "1px solid grey"
		}
	}
}