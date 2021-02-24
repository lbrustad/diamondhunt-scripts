'use strict';

function showCombatMap()
{
	document.getElementById("combat-map-div").style.display = "";
	document.getElementById("combat-map-thumbnails-div").style.display = "";
	document.getElementById("right-panel").style.display = "none";
	document.getElementById("notification-area").style.display = "none";
	document.getElementById("top-bar-skills").style.display = "none";
	document.getElementById("table-top-main-items").style.display = "none";
	document.getElementById("navigation-area-buttons").style.display = "none";
	refreshCombatThumbnails();
};
