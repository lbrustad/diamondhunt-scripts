/**
 * refreshHeroManaBar extracted from ../../deobfuscated/bundle.js at line 8943-8951
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshHeroManaBar.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshHeroManaBar()
{
	var _0x19068 = parseInt(getItem("heroMana") / getItem("heroMaxMana") * 100);
	if (_0x19068 > 100)
	{
		_0x19068 = 100
	};
	document.getElementById("hero-inner-mana-bar").style.minWidth = _0x19068 + "%"
}