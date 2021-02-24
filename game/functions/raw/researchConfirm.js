/**
 * researchConfirm extracted from ../../deobfuscated/bundle.js at line 4727-4738
 *
 * If this file doesn't contain a function, there is an error in ../raw/researchConfirm.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function researchConfirm(_0x156FC)
{
	if (getItem(_0x156FC.toLowerCase() + "Unlocked") == 0)
	{
		confirmDialogue("images/x.png", "You cannot research a skill that is locked.", "Close", "", "")
	}
	else
	{
		var _0x15E18 = getResearchPrice(getItem("researcher" + _0x156FC));
		confirmDialogue("images/" + _0x156FC.toLowerCase() + "Skill_researcher.png", "Start researching this skill?", "Research", "Cancel", "RESEARCH=" + _0x156FC.toLowerCase())
	}
}