/**
 * clicksWoodcuttingPlot extracted from ../../deobfuscated/bundle.js at line 8646-8656
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksWoodcuttingPlot.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksWoodcuttingPlot(_0x47ED)
{
	if (getItem("treeUnlocked" + _0x47ED) == 0)
	{
		confirmDialogue("images/woodcuttingSkill.png", "Are you sure you want to unlock this patch?", "Unlock", "Cancel", "CHOP_TREE=" + _0x47ED)
	}
	else
	{
		sendBytes("CHOP_TREE=" + _0x47ED)
	}
}