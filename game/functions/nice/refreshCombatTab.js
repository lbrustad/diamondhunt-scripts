'use strict';

function refreshCombatTab()
{
	hideOtherInterfacesForCombat(true);
	refeshMagicInCombat();
	if (getItem("researcherCombat") >= 3)
	{
		document.getElementById("fighting-screen-presets-area").style.display = "";
	}
	refreshPotionsCombat();
};
