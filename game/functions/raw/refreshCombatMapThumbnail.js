/**
 * refreshCombatMapThumbnail extracted from ../../deobfuscated/bundle.js at line 11561-11588
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshCombatMapThumbnail.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshCombatMapThumbnail(_0x6AB4)
{
	for (var _0x3607 = 1; _0x3607 <= 100; _0x3607++)
	{
		if (_0x3607 == 5)
		{
			continue
		};
		var _0x6AD1 = document.getElementById("div-map-" + _0x3607 + "-thumbnail");
		if (_0x6AD1 == null)
		{
			break
		};
		if (getItem("lastCombatMapHistory" + _0x3607) == 0 && _0x3607 > 1)
		{
			_0x6AD1.style.display = "none"
		}
		else
		{
			_0x6AD1.style.display = ""
		};
		_0x6AD1.style.border = "none";
		if (_0x6AB4 == _0x3607)
		{
			_0x6AD1.style.border = "3px solid green"
		}
	}
}