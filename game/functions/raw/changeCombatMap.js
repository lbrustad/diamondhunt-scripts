/**
 * changeCombatMap extracted from ../../deobfuscated/bundle.js at line 3206-3292
 *
 * If this file doesn't contain a function, there is an error in ../raw/changeCombatMap.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changeCombatMap(_0x159FE)
{
	if (_0x159FE == 15 && getItem("dungeonKeyUsed") == 1)
	{
		changeCombatMap(16);
		return
	};
	if (_0x159FE == 4 && getItem("lavaAlienKills") == 0)
	{
		confirmDialogue("images/forestAlien.png", "Sorry, I only bring adventurers to the northern fields if they have killed my dumb brother in the lava dungeon below.<br /><br />Besides, it\'s cold up in the north.", "Close", "", "");
		return
	};
	if (_0x159FE == 5 && getItem("weapon") != "torch")
	{
		confirmDialogue("images/torch.png", "You need a light source to go in here.", "Close", "", "");
		return
	};
	if (_0x159FE == 8 && getItem("iceHawkKills") == 0)
	{
		confirmDialogue("images/bossMarker.gif", "There\'s an enemy blocking the way!", "Close", "", "");
		return
	};
	if (_0x159FE == 11 && getItem("boots") != "flippers")
	{
		confirmDialogue("images/waveIcon.png", "You need as pair of flippers to swim out into the ocean.", "Close", "", "");
		return
	};
	if (_0x159FE == 13 && getItem("castleAccess") == 0)
	{
		confirmDialogue("images/castleGuard.png", "\"What do you want?\"", "Can I go through?", "Nevermind, I\'ll be on my way.", "CASTLE_GUARD_1");
		return
	};
	if (_0x159FE == 15)
	{
		if (getItem("dungeonWarning") == 0)
		{
			confirmDialogue("images/kingIcon.png", "The dungeon is a dangerous place with high level monsters. <br /><br />It\'s also easy to get lost, so explore at your one risk.", "I will be careful, my Lord.", "", "DUNGEON_WARNING");
			return
		}
	};
	if (_0x159FE == 16 && getItem("dungeonKeyUsed") == 0)
	{
		if (getItem("dungeonKey") == 0)
		{
			confirmDialogue("images/dungeonKey.png", "You need a dungeon key to go through this door.", "Cancel", "", "");
			return
		};
		if (getItem("dungeonKey") == 1)
		{
			confirmDialogue("images/dungeonKey.png", "Use dungeon key?", "Open Door", "Cancel", "USE_DUNGEON_KEY");
			return
		}
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
	document.getElementById("div-map-14").style.display = "none";
	document.getElementById("div-map-15").style.display = "none";
	document.getElementById("div-map-15-1").style.display = "none";
	document.getElementById("div-map-15-2").style.display = "none";
	document.getElementById("div-map-15-3").style.display = "none";
	document.getElementById("div-map-15-4").style.display = "none";
	document.getElementById("div-map-15-5").style.display = "none";
	document.getElementById("div-map-15-6").style.display = "none";
	document.getElementById("div-map-15-7").style.display = "none";
	document.getElementById("div-map-15-8").style.display = "none";
	document.getElementById("div-map-16").style.display = "none";
	document.getElementById("div-map-" + _0x159FE).style.display = "inline-block";
	if (_0x159FE != getItem("lastCombatMap"))
	{
		if (_0x159FE == "15-1" || _0x159FE == "15-2" || _0x159FE == "15-3" || _0x159FE == "15-4" || _0x159FE == "15-5" || _0x159FE == "15-6" || _0x159FE == "15-7" || _0x159FE == "15-8")
		{
			return
		};
		sendBytes("LAST_COMBAT_MAP=" + _0x159FE)
	}
}