/**
 * refreshManaStarTotalLabels extracted from ../../deobfuscated/bundle.js at line 2429-2436
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshManaStarTotalLabels.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshManaStarTotalLabels()
{
	document.getElementById("hero-mana-bar-fighting").style.display = "";
	if (document.getElementById("span-manaStarsLabel") != null)
	{
		document.getElementById("span-manaStarsLabel").innerHTML = getTotalManaStarsOwned() + "/" + getTotalManaStarsAvailable()
	}
}