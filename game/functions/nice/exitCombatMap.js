'use strict';

function exitCombatMap()
{
	document.getElementById("combat-map-div").style.display = "none";
	document.getElementById("top-bar-skills").style.display = "";
	document.getElementById("table-top-main-items").style.display = "";
	document.getElementById("notification-area").style.display = "";
	document.getElementById("right-panel").style.display = "";
	document.getElementById("navigation-area-buttons").style.display = "";
	navigate("right-combat");
};
