'use strict';

function clicksWoodcuttingPlot(canCreateDiscussions)
{
	if (getItem("treeUnlocked" + canCreateDiscussions) == 0)
	{
		confirmDialogue("images/woodcuttingSkill.png", "Are you sure you want to unlock this patch?", "Unlock", "Cancel", "CHOP_TREE=" + canCreateDiscussions);
	}
	else
	{
		sendBytes("CHOP_TREE=" + canCreateDiscussions);
	}
};
