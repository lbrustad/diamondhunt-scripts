'use strict';

function ghostScanRequired()
{
	return getItemString("monsterName") == "knight5" || getItemString("monsterName") == "ghost" || getItemString("monsterName") == "skeletonGhost" || getItemString("monsterName") == "reaper";
};
