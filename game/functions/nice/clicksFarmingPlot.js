'use strict';

function clicksFarmingPlot(canCreateDiscussions)
{
	if (selectedSeed == "none")
	{
		sendBytes("HARVEST=" + canCreateDiscussions);
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
