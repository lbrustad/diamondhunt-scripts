'use strict';

function clicksFarmingPlot(canCreateDiscussions)
{
	if (selectedSeed == "none")
	{
		if (getItem("plotUnlocked" + canCreateDiscussions) == 0)
		{
			confirmDialogue("images/farm_none.png", "Are you sure you want to unlock this patch?", "Unlock", "Cancel", "HARVEST=" + canCreateDiscussions);
		}
		else
		{
			sendBytes("HARVEST=" + canCreateDiscussions);
		}
	}
	else
	{
		sendBytes("PLANT=" + selectedSeed + "~" + canCreateDiscussions);
		setTimeout(function ()
		{
			if (freePlotsAmount() == 0)
			{
				selectedSeed = "none";
				resetSeedItemBoxBorders();
			}
		}, 1000);
	}
};
