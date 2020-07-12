/**
 * clicksFarmingPlot extracted from ../../deobfuscated/bundle.js at line 6536-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksFarmingPlot.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksFarmingPlot(_0x1CF3E)
{
	if (selectedSeed == "none")
	{
		sendBytes("HARVEST=" + _0x1CF3E)
	}
	else
	{
		sendBytes("PLANT=" + selectedSeed + "~" + _0x1CF3E);
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