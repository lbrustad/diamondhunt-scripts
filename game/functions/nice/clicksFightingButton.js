'use strict';

function clicksFightingButton(step)
{
	var th_field = "";
	if (getItem("heroHp") < getItem("heroMaxHp"))
	{
		th_field = "<br /><br /><img src='images/heart.png' class='img-30' /> <i style='color:red'>Warning, you do not have full heatlh.</i>";
	}
	if (getItemString("arrows") == "arrows" && getItemString("weapon") == "bow")
	{
		th_field = "<br /><br /><img src='images/bow.png' class='img-30' /> <i style='color:red'>Warning, no arrows equipped.</i>";
	}
	if (getItem("giantSnakeTimer") > 0 && step == "forest")
	{
		confirmDialogue2("images/warning.png", "There is currently a giant snake roaming the forest.  If you manage to find it, would you like to fight it?<br /><br /><span style='color:grey'>The giant snake is not 100% guaranteed.</span>", "Yes, I'm not scared!", "No, fight normal forest monsters", "Cancel", "FIGHT_WITH_GIANT_SNAKE=" + step, "FIGHT=" + step);
	}
	else
	{
		if (getItem("honey") > 0 && step == "caves")
		{
			confirmDialogue2("images/honey.png", "Would you like to bring honey with you?<br /><br /><span style='color:grey'>You will lose the honey when combat begins.</span>", "Bring 1 honey", "No, just find a fight", "Cancel", "FIGHT_WITH_ONE_HONEY=" + step, "FIGHT=" + step);
		}
		else
		{
			confirmDialogue("none", "<center><img src='images/" + step + ".png' /><br /><br />Look for a fight in the <b>" + getItemName(step) + "</b>?" + th_field + "</center>", "Fight", "Run", "FIGHT=" + step);
		}
	}
	exitCombatMap();
};
