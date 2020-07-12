'use strict';

function clicksFightingBossButton(canCreateDiscussions)
{
	if (canCreateDiscussions == "fireHawk")
	{
		confirmDialogue("none", "<center><img src='images/bossMarker.gif' /><br /><br />Fight this boss?<br /><br /><span style='color:red'>It is extremely hot in here.</span></center>", "Fight", "Run", "FIGHT_BOSS=" + canCreateDiscussions);
	}
	else
	{
		confirmDialogue("none", "<center><img src='images/bossMarker.gif' /><br /><br />Fight this boss?</center>", "Fight", "Run", "FIGHT_BOSS=" + canCreateDiscussions);
	}
	exitCombatMap();
};
