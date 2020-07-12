'use strict';

function openBrewingKitDialogue()
{
	var labelArrowSplit = getBrewingKitDataTypes();
	if (labelArrowSplit[0] != "none")
	{
		if (labelArrowSplit[0] == "diamondBrewingKit")
		{
			confirmDialogue("images/" + labelArrowSplit[0] + ".png", "<b>Bonus Potion Time: </b>" + labelArrowSplit[3], "Close", "", "");
		}
		else
		{
			confirmDialogue("images/" + labelArrowSplit[0] + ".png", "<b>Bonus Potion Time: </b>" + labelArrowSplit[3] + "<br /><br /><span style='color:grey'>Socket a <img src='images/" + labelArrowSplit[2] + ".png' class='img-30' /> <b>" + labelArrowSplit[2] + "</b> to increase the timer for all potions.</span>", "Socket a " + labelArrowSplit[2], "Close", "SOCKET=brewingKit");
		}
	}
};
