/**
 * researchConfirm extracted from ../../deobfuscated/bundle.js at line 4039-4050
 *
 * If this file doesn't contain a function, there is an error in ../raw/researchConfirm.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function researchConfirm(_0x3EFA)
{
	if (getItem(_0x3EFA.toLowerCase() + "Unlocked") == 0)
	{
		confirmDialogue("images/x.png", "You cannot research a skill that is locked.", "Close", "", "")
	}
	else
	{
		var _0x44DE = getResearchPrice(getItem("researcher" + _0x3EFA));
		confirmDialogue("images/" + _0x3EFA.toLowerCase() + "Skill_researcher.png", "Start researching this skill?", "Research", "Cancel", "RESEARCH=" + _0x3EFA.toLowerCase())
	}
}