'use strict';

function repelMonster(shortPath)
{
	closeDialogue("dialogue-confirm");
	if (getItemString("repelMonster") == "none")
	{
		confirmDialogue("images/" + shortPath + "_monster_idle_0.png", "Are you sure you want to repel this monster?<br /><br /><span style='color:grey'>You may undo this at any moment.</span>", "Repel", "Cancel", "REPEL=" + shortPath);
	}
	else
	{
		confirmDialogue("images/" + shortPath + "_monster_idle_0.png", "Are you sure you want to repel this monster?<br /><br /><span style='color:red'>This will overwrite your previous repelled enemy.</span>", "Repel", "Cancel", "REPEL=" + shortPath);
	}
};
