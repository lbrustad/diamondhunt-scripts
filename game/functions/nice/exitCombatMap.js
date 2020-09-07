'use strict';

function exitCombatMap()
{
	$(window).scrollTop(0);
	document.getElementById("combat-map-div").style.display = "none";
	document.getElementById("combat-map-thumbnails-div").style.display = "none";
	document.getElementById("top-bar-skills").style.display = "";
	if (document.getElementById("minimize-btn").style.display != "none")
	{
		document.getElementById("table-top-main-items").style.display = "";
	}
	document.getElementById("notification-area").style.display = "";
	document.getElementById("right-panel").style.display = "";
	document.getElementById("navigation-area-buttons").style.display = "";
	navigate("right-combat");
};
