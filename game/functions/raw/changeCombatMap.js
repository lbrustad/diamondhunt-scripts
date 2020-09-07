/**
 * changeCombatMap extracted from ../../deobfuscated/bundle.js at line 2628-2679
 *
 * If this file doesn't contain a function, there is an error in ../raw/changeCombatMap.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changeCombatMap(_0x4178)
{
	if (_0x4178 == 4 && getItem("lavaAlienKills") == 0)
	{
		confirmDialogue("images/forestAlien.png", "Sorry, I only bring adventurers to the northern fields if they have killed my dumb brother in the lava dungeon below.<br /><br />Besides, it\'s cold up in the north.", "Close", "", "");
		return
	};
	if (_0x4178 == 5 && getItem("weapon") != "torch")
	{
		confirmDialogue("images/torch.png", "You need a light source to go in here.", "Close", "", "");
		return
	};
	if (_0x4178 == 8 && getItem("iceHawkKills") == 0)
	{
		confirmDialogue("images/bossMarker.gif", "There\'s an enemy blocking the way!", "Close", "", "");
		return
	};
	if (_0x4178 == 11 && getItem("boots") != "flippers")
	{
		confirmDialogue("images/waveIcon.png", "You need as pair of flippers to swim out into the ocean.", "Close", "", "");
		return
	};
	if (_0x4178 == 13 && getItem("castleAccess") == 0)
	{
		confirmDialogue("images/castleGuard.png", "\"What do you want?\"", "Can I go through?", "Nevermind, I\'ll be on my way.", "CASTLE_GUARD_1");
		return
	};
	if (_0x4178 == 14)
	{
		confirmDialogue("images/crownIcon.png", "The castle is not ready yet.<br /><br /><span style=\'color:grey\'>To be released at the end of next week.</span>", "Close", "", "");
		return
	};
	document.getElementById("div-map-1").style.display = "none";
	document.getElementById("div-map-2").style.display = "none";
	document.getElementById("div-map-3").style.display = "none";
	document.getElementById("div-map-4").style.display = "none";
	document.getElementById("div-map-5").style.display = "none";
	document.getElementById("div-map-6").style.display = "none";
	document.getElementById("div-map-7").style.display = "none";
	document.getElementById("div-map-8").style.display = "none";
	document.getElementById("div-map-9").style.display = "none";
	document.getElementById("div-map-10").style.display = "none";
	document.getElementById("div-map-11").style.display = "none";
	document.getElementById("div-map-12").style.display = "none";
	document.getElementById("div-map-13").style.display = "none";
	document.getElementById("div-map-" + _0x4178).style.display = "inline-block";
	if (_0x4178 != getItem("lastCombatMap"))
	{
		sendBytes("LAST_COMBAT_MAP=" + _0x4178)
	};
	refreshCombatMapThumbnail(_0x4178)
}