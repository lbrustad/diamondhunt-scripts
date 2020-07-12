/**
 * refreshCombatTab extracted from ../../deobfuscated/bundle.js at line 10653-10662
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshCombatTab.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshCombatTab()
{
	hideOtherInterfacesForCombat(true);
	refeshMagicInCombat();
	if (getItem("researcherCombat") >= 3)
	{
		document.getElementById("fighting-screen-presets-area").style.display = ""
	};
	refreshPotionsCombat()
}