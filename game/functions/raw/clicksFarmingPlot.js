/**
 * clicksFarmingPlot extracted from ../../deobfuscated/bundle.js at line 8581-8606
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksFarmingPlot.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksFarmingPlot(_0x47ED)
{
	if (selectedSeed == "none")
	{
		if (getItem("plotUnlocked" + _0x47ED) == 0)
		{
			confirmDialogue("images/farm_none.png", "Are you sure you want to unlock this patch?", "Unlock", "Cancel", "HARVEST=" + _0x47ED)
		}
		else
		{
			sendBytes("HARVEST=" + _0x47ED)
		}
	}
	else
	{
		sendBytes("PLANT=" + selectedSeed + "~" + _0x47ED);
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