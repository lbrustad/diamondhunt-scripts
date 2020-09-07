'use strict';

function clicksFightingButton(name)
{
	$(window).scrollTop(0);
	if (getItem("giantSnakeTimer") > 0 && name == "forest")
	{
		confirmDialogue2("images/warning.png", "There is currently a giant snake roaming the forest.  If you manage to find it, would you like to fight it?<br /><br /><span style='color:grey'>The giant snake is not 100% guaranteed.</span>", "Yes, I'm not scared!", "No, fight normal forest monsters", "Cancel", "FIGHT_WITH_GIANT_SNAKE=" + name, "FIGHT=" + name);
	}
	else
	{
		if (getItem("honey") > 0 && name == "caves")
		{
			confirmDialogue2("images/honey.png", "Would you like to bring honey with you?<br /><br /><span style='color:grey'>You will lose the honey when combat begins.</span>", "Bring 1 honey", "No, just find a fight", "Cancel", "FIGHT_WITH_ONE_HONEY=" + name, "FIGHT=" + name);
		}
		else
		{
			if (getItem("telescope") > 0 && name == "fields")
			{
				sendBytes("FIGHT=" + name);
			}
			else
			{
				if (name == "fields" && getItem("combatXp") == 0 && getItemString("weapon") == "weapon")
				{
					confirmDialogue("images/rustySword.png", "I should maybe equip a weapon before fighting.", "Close", "", "");
					return;
				}
				openConfirmDialogueFighting(name);
			}
		}
	}
	exitCombatMap();
};
