/**
 * clicksSeed extracted from ../../deobfuscated/bundle.js at line 6496-6521
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksSeed.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksSeed(_0x1D03A)
{
	if (getItem("farmingXp") == 0)
	{
		confirmDialogue("images/" + _0x1D03A + ".png", "Select a farming patch to plant your seed.", "Close", "", "")
	};
	if (selectedSeed == "none")
	{
		selectedSeed = _0x1D03A;
		document.getElementById("item-box-" + _0x1D03A).style.border = "5px solid orange"
	}
	else
	{
		if (selectedSeed == _0x1D03A)
		{
			selectedSeed = "none";
			resetSeedItemBoxBorders()
		}
		else
		{
			resetSeedItemBoxBorders();
			selectedSeed = _0x1D03A;
			document.getElementById("item-box-" + _0x1D03A).style.border = "5px solid orange"
		}
	}
}