/**
 * clicksPotion extracted from ../../deobfuscated/bundle.js at line 7128-7181
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksPotion.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksPotion(_0x165C0)
{
	if (getItem(_0x165C0 + "Timer") && getItem("warningPotionDrinking") == 0)
	{
		confirmDialogue("images/" + "warning" + ".png", "This potion is already active.  Drinking another one will simply reset the timer.<br /><br /><i style=\'color:grey\'>You won\'t see this warning again.</i>", "Close", "", "");
		sendBytes("DRINKING_POTION_WARNING")
	}
	else
	{
		if (_0x165C0 == "repelPotion1")
		{
			clicksRepelPotion(1)
		}
		else
		{
			if (_0x165C0 == "repelPotion2")
			{
				clicksRepelPotion(2)
			}
			else
			{
				if (_0x165C0 == "repelPotion3")
				{
					clicksRepelPotion(3)
				}
				else
				{
					if (_0x165C0 == "sapphireStardustPotion")
					{
						confirmDialogue("images/" + _0x165C0 + ".png", "Pour over a sapphire?<br /><br /><span style=\'color:grey\'>You will lose your sapphire.</span>", "Pour on Sapphire", "Cancel", "DRINK=" + _0x165C0)
					}
					else
					{
						if (_0x165C0 == "largeEmeraldStardustPotion")
						{
							confirmDialogue("images/" + _0x165C0 + ".png", "Pour over a emerald?<br /><br /><span style=\'color:grey\'>You will lose your emerald.</span>", "Pour on Emerald", "Cancel", "DRINK=" + _0x165C0)
						}
						else
						{
							if (_0x165C0 == "largeRubyStardustPotion")
							{
								confirmDialogue("images/" + _0x165C0 + ".png", "Pour over a ruby?<br /><br /><span style=\'color:grey\'>You will lose your ruby.</span>", "Pour on Ruby", "Cancel", "DRINK=" + _0x165C0)
							}
							else
							{
								confirmDialogue("images/" + _0x165C0 + ".png", "Drink this potion?", "Drink", "Cancel", "DRINK=" + _0x165C0)
							}
						}
					}
				}
			}
		}
	}
}