/**
 * clicksSeed extracted from ../../deobfuscated/bundle.js at line 8541-8566
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksSeed.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksSeed(_0x4B53)
{
	if (getItem("farmingXp") == 0)
	{
		confirmDialogue("images/" + _0x4B53 + ".png", "Select a farming patch to plant your seed.", "Close", "", "")
	};
	if (selectedSeed == "none")
	{
		selectedSeed = _0x4B53;
		document.getElementById("item-box-" + _0x4B53).style.border = "5px solid orange"
	}
	else
	{
		if (selectedSeed == _0x4B53)
		{
			selectedSeed = "none";
			resetSeedItemBoxBorders()
		}
		else
		{
			resetSeedItemBoxBorders();
			selectedSeed = _0x4B53;
			document.getElementById("item-box-" + _0x4B53).style.border = "5px solid orange"
		}
	}
}