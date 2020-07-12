/**
 * refreshHeroManaBar extracted from ../../deobfuscated/bundle.js at line 5769-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshHeroManaBar.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshHeroManaBar()
{
	var _0x1DDBC = parseInt(getItem("heroMana") / getItem("heroMaxMana") * 100);
	if (_0x1DDBC > 100)
	{
		_0x1DDBC = 100
	};
	document.getElementById("hero-inner-mana-bar").style.minWidth = _0x1DDBC + "%"
}