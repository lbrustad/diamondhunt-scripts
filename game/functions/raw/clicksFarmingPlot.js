/**
 * clicksFarmingPlot extracted from ../../deobfuscated/bundle.js at line 10338-10363
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksFarmingPlot.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksFarmingPlot(_0x16327)
{
	if (selectedSeed == "none")
	{
		if (getItem("plotUnlocked" + _0x16327) == 0)
		{
			confirmDialogue("images/farm_none.png", "Are you sure you want to unlock this patch?", "Unlock", "Cancel", "HARVEST=" + _0x16327)
		}
		else
		{
			sendBytes("HARVEST=" + _0x16327)
		}
	}
	else
	{
		sendBytes("PLANT=" + selectedSeed + "~" + _0x16327);
		setTimeout(function ()
		{
			if (freePlotsAmount() == 0)
			{
				selectedSeed = "none";
				resetSeedItemBoxBorders()
			}
		}, 1000)
	}
}