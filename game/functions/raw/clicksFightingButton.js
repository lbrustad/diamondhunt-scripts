/**
 * clicksFightingButton extracted from ../../deobfuscated/bundle.js at line 11340-11371
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksFightingButton.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksFightingButton(_0x4827)
{
	$(window).scrollTop(0);
	if (getItem("giantSnakeTimer") > 0 && _0x4827 == "forest")
	{
		confirmDialogue2("images/warning.png", "There is currently a giant snake roaming the forest.  If you manage to find it, would you like to fight it?<br /><br /><span style=\'color:grey\'>The giant snake is not 100% guaranteed.</span>", "Yes, I\'m not scared!", "No, fight normal forest monsters", "Cancel", "FIGHT_WITH_GIANT_SNAKE=" + _0x4827, "FIGHT=" + _0x4827)
	}
	else
	{
		if (getItem("honey") > 0 && _0x4827 == "caves")
		{
			confirmDialogue2("images/honey.png", "Would you like to bring honey with you?<br /><br /><span style=\'color:grey\'>You will lose the honey when combat begins.</span>", "Bring 1 honey", "No, just find a fight", "Cancel", "FIGHT_WITH_ONE_HONEY=" + _0x4827, "FIGHT=" + _0x4827)
		}
		else
		{
			if (getItem("telescope") > 0 && _0x4827 == "fields")
			{
				sendBytes("FIGHT=" + _0x4827)
			}
			else
			{
				if (_0x4827 == "fields" && getItem("combatXp") == 0 && getItemString("weapon") == "weapon")
				{
					confirmDialogue("images/rustySword.png", "I should maybe equip a weapon before fighting.", "Close", "", "");
					return
				};
				openConfirmDialogueFighting(_0x4827)
			}
		}
	};
	exitCombatMap()
}