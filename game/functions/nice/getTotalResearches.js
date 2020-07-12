'use strict';

function getTotalResearches()
{
	return getItem("researcherCombat") + getItem("researcherMagic") + getItem("researcherMining") + getItem("researcherCrafting") + getItem("researcherWoodcutting") + getItem("researcherFarming") + getItem("researcherBrewing") + getItem("researcherFishing") + getItem("researcherCooking");
};
