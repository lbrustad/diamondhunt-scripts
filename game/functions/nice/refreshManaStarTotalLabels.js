'use strict';

function refreshManaStarTotalLabels()
{
	document.getElementById("hero-mana-bar-fighting").style.display = "";
	if (document.getElementById("span-manaStarsLabel") != null)
	{
		document.getElementById("span-manaStarsLabel").innerHTML = getTotalManaStarsOwned() + "/" + getTotalManaStarsAvailable();
	}
};
