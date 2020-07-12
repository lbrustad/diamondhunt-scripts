'use strict';

function refreshHeroManaBar()
{
	var minWidth = parseInt(getItem("heroMana") / getItem("heroMaxMana") * 100);
	if (minWidth > 100)
	{
		minWidth = 100;
	}
	document.getElementById("hero-inner-mana-bar").style.minWidth = minWidth + "%";
};
