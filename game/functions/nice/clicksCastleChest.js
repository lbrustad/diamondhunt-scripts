'use strict';

function clicksCastleChest()
{
	if (getItem("speechKing") == 1)
	{
		confirmDialogue2("images/castleChest.png", "Loot chest?<br /><br /><span style='color:grey'>You have " + getItem("castlePoints") + " points.", "Loot", "Loot History", "Close", "LOOT_CASTLE_CHEST", "REFRESH_LOOT_CASTLE_CHEST_HISTORY");
	}
	else
	{
		confirmDialogue("images/kingIcon.png", "You are quite brave trying to loot my chest.", "Sorry my Lord", "", "");
	}
};
