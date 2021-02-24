/**
 * repelMonster extracted from ../../deobfuscated/bundle.js at line 19645-19656
 *
 * If this file doesn't contain a function, there is an error in ../raw/repelMonster.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function repelMonster(_0x166D8)
{
	closeDialogue("dialogue-confirm");
	if (getItemString("repelMonster") == "none")
	{
		confirmDialogue("images/" + _0x166D8 + "_monster_idle_0.png", "Are you sure you want to repel this monster?<br /><br /><span style=\'color:grey\'>You may undo this at any moment.</span>", "Repel", "Cancel", "REPEL=" + _0x166D8)
	}
	else
	{
		confirmDialogue("images/" + _0x166D8 + "_monster_idle_0.png", "Are you sure you want to repel this monster?<br /><br /><span style=\'color:red\'>This will overwrite your previous repelled enemy.</span>", "Repel", "Cancel", "REPEL=" + _0x166D8)
	}
}