/**
 * hideOtherInterfacesForCombat extracted from ../../deobfuscated/bundle.js at line 10518-10543
 *
 * If this file doesn't contain a function, there is an error in ../raw/hideOtherInterfacesForCombat.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function hideOtherInterfacesForCombat(_0x1D5A4)
{
	if (_0x1D5A4)
	{
		document.getElementById("table-top-main-items").style.display = "none";
		document.getElementById("top-bar-skills").style.display = "none";
		document.getElementById("main-panel").style.display = "none";
		document.getElementById("navigation-area-buttons").style.display = "none";
		document.getElementById("chat-area").style.display = "none";
		document.getElementById("notification-area").style.display = "none";
		if (getItemString("currentFighingArea") != "none")
		{
			changeBodyBackground("images/" + getItemString("currentFighingArea") + "_background.png")
		}
	}
	else
	{
		document.getElementById("table-top-main-items").style.display = "";
		document.getElementById("top-bar-skills").style.display = "";
		document.getElementById("main-panel").style.display = "";
		document.getElementById("navigation-area-buttons").style.display = "";
		document.getElementById("notification-area").style.display = "";
		document.getElementById("chat-area").style.display = "";
		resetBodyBackground()
	}
}