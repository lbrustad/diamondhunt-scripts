/**
 * researchConfirm extracted from ../../deobfuscated/bundle.js at line 3135-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/researchConfirm.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function researchConfirm(_0x1CAFA)
{
	if (getItem(_0x1CAFA.toLowerCase() + "Unlocked") == 0)
	{
		confirmDialogue("images/x.png", "You cannot research a skill that is locked.", "Close", "", "")
	}
	else
	{
		var _0x1CDD2 = getResearchPrice(getItem("researcher" + _0x1CAFA));
		confirmDialogue("images/" + _0x1CAFA.toLowerCase() + "Skill_researcher.png", "Start researching this skill?", "Research", "Cancel", "RESEARCH=" + _0x1CAFA.toLowerCase())
	}
}