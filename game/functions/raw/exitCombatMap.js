/**
 * exitCombatMap extracted from ../../deobfuscated/bundle.js at line 13640-13654
 *
 * If this file doesn't contain a function, there is an error in ../raw/exitCombatMap.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function exitCombatMap()
{
	$(window).scrollTop(0);
	document.getElementById("combat-map-div").style.display = "none";
	document.getElementById("combat-map-thumbnails-div").style.display = "none";
	document.getElementById("top-bar-skills").style.display = "";
	if (document.getElementById("minimize-btn").style.display != "none")
	{
		document.getElementById("table-top-main-items").style.display = ""
	};
	document.getElementById("notification-area").style.display = "";
	document.getElementById("right-panel").style.display = "";
	document.getElementById("navigation-area-buttons").style.display = "";
	navigate("right-combat")
}