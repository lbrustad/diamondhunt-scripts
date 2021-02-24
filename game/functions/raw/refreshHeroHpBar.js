/**
 * refreshHeroHpBar extracted from ../../deobfuscated/bundle.js at line 8933-8941
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshHeroHpBar.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshHeroHpBar()
{
	var _0x19068 = parseInt(getItem("heroHp") / getItem("heroMaxHp") * 100);
	if (_0x19068 > 100)
	{
		_0x19068 = 100
	};
	document.getElementById("hero-inner-hp-bar").style.minWidth = _0x19068 + "%"
}