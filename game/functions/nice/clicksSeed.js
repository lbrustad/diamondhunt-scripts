'use strict';

function clicksSeed(setting)
{
	if (getItem("farmingXp") == 0)
	{
		confirmDialogue("images/" + setting + ".png", "Select a farming patch to plant your seed.", "Close", "", "");
	}
	if (selectedSeed == "none")
	{
		selectedSeed = setting;
		document.getElementById("item-box-" + setting).style.border = "5px solid orange";
	}
	else
	{
		if (selectedSeed == setting)
		{
			selectedSeed = "none";
			resetSeedItemBoxBorders();
		}
		else
		{
			resetSeedItemBoxBorders();
			selectedSeed = setting;
			document.getElementById("item-box-" + setting).style.border = "5px solid orange";
		}
	}
};
