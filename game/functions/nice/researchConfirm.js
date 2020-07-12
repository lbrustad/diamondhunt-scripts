'use strict';

function researchConfirm(boolStr)
{
	if (getItem(boolStr.toLowerCase() + "Unlocked") == 0)
	{
		confirmDialogue("images/x.png", "You cannot research a skill that is locked.", "Close", "", "");
	}
	else
	{
		var _a_ = getResearchPrice(getItem("researcher" + boolStr));
		confirmDialogue("images/" + boolStr.toLowerCase() + "Skill_researcher.png", "Start researching this skill?", "Research", "Cancel", "RESEARCH=" + boolStr.toLowerCase());
	}
};
