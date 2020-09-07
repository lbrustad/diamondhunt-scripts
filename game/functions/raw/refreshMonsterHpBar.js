/**
 * refreshMonsterHpBar extracted from ../../deobfuscated/bundle.js at line 8530-8538
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshMonsterHpBar.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshMonsterHpBar()
{
	var _0x6B9C = parseInt(getItem("monsterHp") / getItem("monsterMaxHp") * 100);
	if (_0x6B9C > 100)
	{
		_0x6B9C = 100
	};
	document.getElementById("monster-inner-hp-bar").style.minWidth = _0x6B9C + "%"
}