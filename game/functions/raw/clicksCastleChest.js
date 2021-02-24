/**
 * clicksCastleChest extracted from ../../deobfuscated/bundle.js at line 3299-3309
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksCastleChest.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksCastleChest()
{
	if (getItem("speechKing") == 1)
	{
		confirmDialogue2("images/castleChest.png", "Loot chest?<br /><br /><span style=\'color:grey\'>You have " + getItem("castlePoints") + " points.", "Loot", "Loot History", "Close", "LOOT_CASTLE_CHEST", "REFRESH_LOOT_CASTLE_CHEST_HISTORY")
	}
	else
	{
		confirmDialogue("images/kingIcon.png", "You are quite brave trying to loot my chest.", "Sorry my Lord", "", "")
	}
}