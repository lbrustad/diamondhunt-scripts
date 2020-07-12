/**
 * clicksFightingButton extracted from ../../deobfuscated/bundle.js at line 8692-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksFightingButton.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksFightingButton(_0x1CF5A)
{
	var _0x1CF68 = "";
	if (getItem("heroHp") < getItem("heroMaxHp"))
	{
		_0x1CF68 = "<br /><br /><img src=\'images/heart.png\' class=\'img-30\' /> <i style=\'color:red\'>Warning, you do not have full heatlh.</i>"
	};
	if (getItemString("arrows") == "arrows" && getItemString("weapon") == "bow")
	{
		_0x1CF68 = "<br /><br /><img src=\'images/bow.png\' class=\'img-30\' /> <i style=\'color:red\'>Warning, no arrows equipped.</i>"
	};
	if (getItem("giantSnakeTimer") > 0 && _0x1CF5A == "forest")
	{
		confirmDialogue2("images/warning.png", "There is currently a giant snake roaming the forest.  If you manage to find it, would you like to fight it?<br /><br /><span style=\'color:grey\'>The giant snake is not 100% guaranteed.</span>", "Yes, I\'m not scared!", "No, fight normal forest monsters", "Cancel", "FIGHT_WITH_GIANT_SNAKE=" + _0x1CF5A, "FIGHT=" + _0x1CF5A)
	}
	else
	{
		if (getItem("honey") > 0 && _0x1CF5A == "caves")
		{
			confirmDialogue2("images/honey.png", "Would you like to bring honey with you?<br /><br /><span style=\'color:grey\'>You will lose the honey when combat begins.</span>", "Bring 1 honey", "No, just find a fight", "Cancel", "FIGHT_WITH_ONE_HONEY=" + _0x1CF5A, "FIGHT=" + _0x1CF5A)
		}
		else
		{
			confirmDialogue("none", "<center><img src=\'images/" + _0x1CF5A + ".png\' /><br /><br />Look for a fight in the <b>" + getItemName(_0x1CF5A) + "</b>?" + _0x1CF68 + "</center>", "Fight", "Run", "FIGHT=" + _0x1CF5A)
		}
	};
	exitCombatMap()
}