'use strict';

function refreshHeroHpBar()
{
	var minWidth = parseInt(getItem("heroHp") / getItem("heroMaxHp") * 100);
	if (minWidth > 100)
	{
		minWidth = 100;
	}
	document.getElementById("hero-inner-hp-bar").style.minWidth = minWidth + "%";
};
