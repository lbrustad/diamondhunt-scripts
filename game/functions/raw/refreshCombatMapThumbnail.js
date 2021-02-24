/**
 * refreshCombatMapThumbnail extracted from ../../deobfuscated/bundle.js at line 11981-12008
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshCombatMapThumbnail.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshCombatMapThumbnail(_0x2F5C7)
{
	for (var _0x25403 = 1; _0x25403 <= 100; _0x25403++)
	{
		if (_0x25403 == 5)
		{
			continue
		};
		var _0x2F61E = document.getElementById("div-map-" + _0x25403 + "-thumbnail");
		if (_0x2F61E == null)
		{
			break
		};
		if (getItem("lastCombatMapHistory" + _0x25403) == 0 && _0x25403 > 1)
		{
			_0x2F61E.style.display = "none"
		}
		else
		{
			_0x2F61E.style.display = ""
		};
		_0x2F61E.style.border = "none";
		if (_0x2F5C7 == _0x25403)
		{
			_0x2F61E.style.border = "3px solid green"
		}
	}
}