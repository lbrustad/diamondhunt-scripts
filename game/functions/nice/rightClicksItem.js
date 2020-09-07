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
