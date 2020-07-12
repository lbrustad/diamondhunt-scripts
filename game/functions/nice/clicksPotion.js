'use strict';

function clicksPotion(name)
{
	if (getItem(name + "Timer") && getItem("warningPotionDrinking") == 0)
	{
		confirmDialogue("images/" + "warning" + ".png", "This potion is already active.  Drinking another one will simply reset the timer.<br /><br /><i style='color:grey'>You won't see this warning again.</i>", "Close", "", "");
		sendBytes("DRINKING_POTION_WARNING");
	}
	else
	{
		if (name == "sapphireStardustPotion")
		{
			confirmDialogue("images/" + name + ".png", "Pour over a sapphire?<br /><br /><span style='color:grey'>You will lose your sapphire.</span>", "Pour on Sapphire", "Cancel", "DRINK=" + name);
		}
		else
		{
			confirmDialogue("images/" + name + ".png", "Drink this potion?", "Drink", "Cancel", "DRINK=" + name);
		}
	}
};
