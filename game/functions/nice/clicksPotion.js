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
		if (name == "repelPotion1")
		{
			clicksRepelPotion(1);
		}
		else
		{
			if (name == "repelPotion2")
			{
				clicksRepelPotion(2);
			}
			else
			{
				if (name == "repelPotion3")
				{
					clicksRepelPotion(3);
				}
				else
				{
					if (name == "sapphireStardustPotion")
					{
						confirmDialogue("images/" + name + ".png", "Pour over a sapphire?<br /><br /><span style='color:grey'>You will lose your sapphire.</span>", "Pour on Sapphire", "Cancel", "DRINK=" + name);
					}
					else
					{
						if (name == "largeEmeraldStardustPotion")
						{
							confirmDialogue("images/" + name + ".png", "Pour over a emerald?<br /><br /><span style='color:grey'>You will lose your emerald.</span>", "Pour on Emerald", "Cancel", "DRINK=" + name);
						}
						else
						{
							if (name == "largeRubyStardustPotion")
							{
								confirmDialogue("images/" + name + ".png", "Pour over a ruby?<br /><br /><span style='color:grey'>You will lose your ruby.</span>", "Pour on Ruby", "Cancel", "DRINK=" + name);
							}
							else
							{
								confirmDialogue("images/" + name + ".png", "Drink this potion?", "Drink", "Cancel", "DRINK=" + name);
							}
						}
					}
				}
			}
		}
	}
};
