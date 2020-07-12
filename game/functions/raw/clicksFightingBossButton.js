/**
 * clicksFightingBossButton extracted from ../../deobfuscated/bundle.js at line 8721-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksFightingBossButton.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksFightingBossButton(_0x1CF4C)
{
	if (_0x1CF4C == "fireHawk")
	{
		confirmDialogue("none", "<center><img src=\'images/bossMarker.gif\' /><br /><br />Fight this boss?<br /><br /><span style=\'color:red\'>It is extremely hot in here.</span></center>", "Fight", "Run", "FIGHT_BOSS=" + _0x1CF4C)
	}
	else
	{
		confirmDialogue("none", "<center><img src=\'images/bossMarker.gif\' /><br /><br />Fight this boss?</center>", "Fight", "Run", "FIGHT_BOSS=" + _0x1CF4C)
	};
	exitCombatMap()
}