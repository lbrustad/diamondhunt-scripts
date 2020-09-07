/**
 * getTotalResearches extracted from ../../deobfuscated/bundle.js at line 5782-5785
 *
 * If this file doesn't contain a function, there is an error in ../raw/getTotalResearches.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getTotalResearches()
{
	return getItem("researcherCombat") + getItem("researcherMagic") + getItem("researcherMining") + getItem("researcherCrafting") + getItem("researcherWoodcutting") + getItem("researcherFarming") + getItem("researcherBrewing") + getItem("researcherFishing") + getItem("researcherCooking")
}