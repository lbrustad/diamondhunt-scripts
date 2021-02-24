'use strict';

function rightClicksItem(solString)
{
	if (global_equipmentMap[solString] != null)
	{
		if (getItem("needle") > 0)
		{
			if (solString.startsWith("snakeskin"))
			{
				confirmDialogue("images/needle.png", "<img src='images/" + solString + ".png' class='img-50' /> Use needle on this? <img src='images/" + solString + ".png' class='img-30' />", "Use Needle", "Cancel", "NEEDLE=" + solString);
				return false;
			}
			else
			{
				if (solString.startsWith("bearFur"))
				{
					confirmDialogue("images/needle.png", "<img src='images/" + solString + ".png' class='img-50' /> Use needle on this? <img src='images/" + solString + ".png' class='img-30' />", "Use Needle", "Cancel", "NEEDLE=" + solString);
					return false;
				}
				else
				{
					if (solString.startsWith("polarBearFur"))
					{
						confirmDialogue("images/needle.png", "<img src='images/" + solString + ".png' class='img-50' /> Use needle on this? <img src='images/" + solString + ".png' class='img-30' />", "Use Needle", "Cancel", "NEEDLE=" + solString);
						return false;
					}
					else
					{
						if (solString.startsWith("batSkin"))
						{
							confirmDialogue("images/needle.png", "<img src='images/" + solString + ".png' class='img-50' /> Use needle on this? <img src='images/" + solString + ".png' class='img-30' />", "Use Needle", "Cancel", "NEEDLE=" + solString);
							return false;
						}
						else
						{
							if (solString.startsWith("reaper"))
							{
								confirmDialogue("images/needle.png", "<img src='images/" + solString + ".png' class='img-50' /> Use needle on this? <img src='images/" + solString + ".png' class='img-30' />", "Use Needle", "Cancel", "NEEDLE=" + solString);
								return false;
							}
						}
					}
				}
			}
		}
	}
	if (global_foodMap[solString] != null)
	{
		if (solString.startsWith("raw"))
		{
			if (global_foodMap[solString].heat != null)
			{
				var _a_ = global_foodMap[solString].heat;
				var item = getItem("heat") / global_foodMap[solString].heat;
				item = parseInt(item);
				if (item > getItem(solString))
				{
					item = getItem(solString);
				}
				if (item > 0)
				{
					sendBytes("COOK=" + solString + "~" + item);
				}
				return false;
			}
		}
	}
	if (solString == "monsterCanvas")
	{
		if (getItem("greenShinyMonsterOrbBound") > 0)
		{
			sendBytes("USE_SHINY_GREEN_ORB=" + "greenShinyMonsterOrbBound~none");
		}
		return false;
	}
	if (solString.startsWith("PLOT_"))
	{
		var _b_ = solString.split("_")[1];
		if (solString.endsWith("WOODCUTTING"))
		{
			if (getItem("greenShinyWoodcuttingOrbBound") > 0)
			{
				sendBytes("USE_SHINY_GREEN_ORB=" + "greenShinyWoodcuttingOrbBound~" + _b_);
			}
		}
		if (solString.endsWith("FARMING"))
		{
			if (getItem("greenShinyFarmingOrbBound") > 0)
			{
				sendBytes("USE_SHINY_GREEN_ORB=" + "greenShinyFarmingOrbBound~" + _b_);
			}
		}
		return false;
	}
	if (solString.endsWith("Seeds") && getItem("planter") == 1)
	{
		sendBytes("PLANTER=" + solString);
		return false;
	}
	switch (solString)
	{
	case "planter":
		sendBytes("HARVEST_PLANTER");
		return false;
	}
};
