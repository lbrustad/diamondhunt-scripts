/**
 * combatTutorial extracted from ../../deobfuscated/bundle.js at line 611-651
 *
 * If this file doesn't contain a function, there is an error in ../raw/combatTutorial.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function combatTutorial(_0x4178)
{
	if (_0x4178 == "1")
	{
		document.getElementById("back-button-fighting").style.display = "none";
		changeBodyBackground("images/cemetery_background.png");
		setTimeout(function ()
		{
			confirmDialogue("images/combatSkill.png", "Welcome to the Combat interface.", "Continue", "", "COMBAT_TUTORIAL_" + _0x4178)
		}, 2000)
	};
	if (_0x4178 == "2")
	{
		document.getElementById("combat-fight-hint-1").style.display = ""
	};
	if (_0x4178 == "3")
	{
		document.getElementById("combat-fight-hint-1").style.display = "none";
		document.getElementById("combat-fight-hint-2").style.display = ""
	};
	if (_0x4178 == "4")
	{
		document.getElementById("combat-fight-hint-2").style.display = "none";
		document.getElementById("combat-fight-hint-3").style.display = ""
	};
	if (_0x4178 == "5")
	{
		document.getElementById("main-panel").style.display = "none";
		document.getElementById("navigation-area-buttons").style.display = "none";
		document.getElementById("chat-area").style.display = "none";
		document.getElementById("combat-fight-hint-5").style.display = ""
	};
	if (_0x4178 == "6")
	{
		document.getElementById("main-panel").style.display = "";
		document.getElementById("navigation-area-buttons").style.display = "";
		document.getElementById("chat-area").style.display = "";
		document.getElementById("combat-fight-hint-5").style.display = "none";
		document.getElementById("notification-hint").style.display = ""
	}
}