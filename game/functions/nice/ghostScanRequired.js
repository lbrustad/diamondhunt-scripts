'use strict';

function ghostScanRequired()
{
	return getItemString("monsterName") == "ghost" || getItemString("monsterName") == "skeletonGhost" || getItemString("monsterName") == "reaper";
};
