'use strict';

function combatTutorial(canCreateDiscussions)
{
	if (canCreateDiscussions == "1")
	{
		document.getElementById("back-button-fighting").style.display = "none";
		changeBodyBackground("images/cemetery_background.png");
		setTimeout(function ()
		{
			confirmDialogue("images/combatSkill.png", "Welcome to the Combat interface.", "Continue", "", "COMBAT_TUTORIAL_" + canCreateDiscussions);
		}, 2000);
	}
	if (canCreateDiscussions == "2")
	{
		document.getElementById("combat-fight-hint-1").style.display = "";
	}
	if (canCreateDiscussions == "3")
	{
		document.getElementById("combat-fight-hint-1").style.display = "none";
		document.getElementById("combat-fight-hint-2").style.display = "";
	}
	if (canCreateDiscussions == "4")
	{
		document.getElementById("combat-fight-hint-2").style.display = "none";
		document.getElementById("combat-fight-hint-3").style.display = "";
	}
	if (canCreateDiscussions == "5")
	{
		document.getElementById("main-panel").style.display = "none";
		document.getElementById("navigation-area-buttons").style.display = "none";
		document.getElementById("chat-area").style.display = "none";
		document.getElementById("combat-fight-hint-5").style.display = "";
	}
	if (canCreateDiscussions == "6")
	{
		document.getElementById("main-panel").style.display = "";
		document.getElementById("navigation-area-buttons").style.display = "";
		document.getElementById("chat-area").style.display = "";
		document.getElementById("combat-fight-hint-5").style.display = "none";
		document.getElementById("notification-hint").style.display = "";
	}
};
