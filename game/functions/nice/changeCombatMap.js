'use strict';

function changeCombatMap(clickedItemID)
{
	if (clickedItemID == 4 && getItem("lavaAlienKills") == 0)
	{
		confirmDialogue("images/forestAlien.png", "Sorry, I only bring adventurers to the northern fields if they have killed my dumb brother in the lava dungeon below.<br /><br />Besides, it's cold up in the north.", "Close", "", "");
		return;
	}
	if (clickedItemID == 5 && getItem("weapon") != "torch")
	{
		confirmDialogue("images/torch.png", "You need a light source to go in here.", "Close", "", "");
		return;
	}
	document.getElementById("div-map-1").style.display = "none";
	document.getElementById("div-map-2").style.display = "none";
	document.getElementById("div-map-3").style.display = "none";
	document.getElementById("div-map-4").style.display = "none";
	document.getElementById("div-map-5").style.display = "none";
	document.getElementById("div-map-6").style.display = "none";
	document.getElementById("div-map-" + clickedItemID).style.display = "inline-block";
};
