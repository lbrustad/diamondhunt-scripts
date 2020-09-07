'use strict';

function openRakeDialogue()
{
	if (getItem("diamondRake") == 1)
	{
		document.getElementById("dialogue-rake-limeLeafSeeds-check-or-x").src = "images/check.png";
		document.getElementById("dialogue-rake-goldLeafSeeds-check-or-x").src = "images/check.png";
		document.getElementById("dialogue-rake-crystalLeafSeeds-check-or-x").src = "images/check.png";
		document.getElementById("dialogue-rake-stripedGoldLeafSeeds-check-or-x").src = "images/check.png";
		document.getElementById("dialogue-rake-stripedCrystalLeafSeeds-check-or-x").src = "images/check.png";
	}
	else
	{
		if (getItem("rubyRake") == 1)
		{
			document.getElementById("dialogue-rake-limeLeafSeeds-check-or-x").src = "images/check.png";
			document.getElementById("dialogue-rake-goldLeafSeeds-check-or-x").src = "images/check.png";
			document.getElementById("dialogue-rake-crystalLeafSeeds-check-or-x").src = "images/check.png";
		}
		else
		{
			if (getItem("emeraldRake") == 1)
			{
				document.getElementById("dialogue-rake-limeLeafSeeds-check-or-x").src = "images/check.png";
				document.getElementById("dialogue-rake-goldLeafSeeds-check-or-x").src = "images/check.png";
			}
			else
			{
				if (getItem("sapphireRake") == 1)
				{
					document.getElementById("dialogue-rake-limeLeafSeeds-check-or-x").src = "images/check.png";
				}
			}
		}
	}
	if (getItem("researcherFarming") >= 2)
	{
		document.getElementById("dialogue-rake-stardustSeeds-check-or-x").src = "images/check.png";
	}
	if (getItem("researcherFarming") >= 4)
	{
		document.getElementById("dialogue-rake-blewitMushroomSeeds-check-or-x").src = "images/check.png";
	}
	openDialogue("dialogue-rake");
};
