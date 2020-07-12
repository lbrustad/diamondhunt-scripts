'use strict';

function hideOtherInterfacesForCombat(canCreateDiscussions)
{
	if (canCreateDiscussions)
	{
		document.getElementById("table-top-main-items").style.display = "none";
		document.getElementById("top-bar-skills").style.display = "none";
		document.getElementById("main-panel").style.display = "none";
		document.getElementById("navigation-area-buttons").style.display = "none";
		document.getElementById("chat-area").style.display = "none";
		document.getElementById("notification-area").style.display = "none";
		if (getItemString("currentFighingArea") != "none")
		{
			changeBodyBackground("images/" + getItemString("currentFighingArea") + "_background.png");
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
		resetBodyBackground();
	}
};
