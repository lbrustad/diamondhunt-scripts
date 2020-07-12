'use strict';

function refreshMonsterHpBar()
{
	var minWidth = parseInt(getItem("monsterHp") / getItem("monsterMaxHp") * 100);
	if (minWidth > 100)
	{
		minWidth = 100;
	}
	document.getElementById("monster-inner-hp-bar").style.minWidth = minWidth + "%";
};
