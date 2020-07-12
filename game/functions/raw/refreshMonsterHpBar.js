/**
 * refreshMonsterHpBar extracted from ../../deobfuscated/bundle.js at line 6485-6493
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshMonsterHpBar.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshMonsterHpBar()
{
	var _0x1DDBC = parseInt(getItem("monsterHp") / getItem("monsterMaxHp") * 100);
	if (_0x1DDBC > 100)
	{
		_0x1DDBC = 100
	};
	document.getElementById("monster-inner-hp-bar").style.minWidth = _0x1DDBC + "%"
}