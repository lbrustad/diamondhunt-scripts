/**
 * refreshHeroHpBar extracted from ../../deobfuscated/bundle.js at line 7509-7517
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshHeroHpBar.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshHeroHpBar()
{
	var _0x6B9C = parseInt(getItem("heroHp") / getItem("heroMaxHp") * 100);
	if (_0x6B9C > 100)
	{
		_0x6B9C = 100
	};
	document.getElementById("hero-inner-hp-bar").style.minWidth = _0x6B9C + "%"
}