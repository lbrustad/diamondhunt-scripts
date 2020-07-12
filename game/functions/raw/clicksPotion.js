/**
 * clicksPotion extracted from ../../deobfuscated/bundle.js at line 4793-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksPotion.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksPotion(_0x1CFCA)
{
	if (getItem(_0x1CFCA + "Timer") && getItem("warningPotionDrinking") == 0)
	{
		confirmDialogue("images/" + "warning" + ".png", "This potion is already active.  Drinking another one will simply reset the timer.<br /><br /><i style=\'color:grey\'>You won\'t see this warning again.</i>", "Close", "", "");
		sendBytes("DRINKING_POTION_WARNING")
	}
	else
	{
		if (_0x1CFCA == "sapphireStardustPotion")
		{
			confirmDialogue("images/" + _0x1CFCA + ".png", "Pour over a sapphire?<br /><br /><span style=\'color:grey\'>You will lose your sapphire.</span>", "Pour on Sapphire", "Cancel", "DRINK=" + _0x1CFCA)
		}
		else
		{
			confirmDialogue("images/" + _0x1CFCA + ".png", "Drink this potion?", "Drink", "Cancel", "DRINK=" + _0x1CFCA)
		}
	}
}