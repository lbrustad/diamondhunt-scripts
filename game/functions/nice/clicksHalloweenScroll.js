'use strict';

function clicksHalloweenScroll()
{
	var zoom_str = "";
	var nextChildID = "";
	var pos = "";
	zoom_str = zoom_str + "I need to find the following items:<br /><br />";
	nextChildID = "witchesHat";
	pos = "A witch is roaming.";
	if (getItem(nextChildID) >= 1)
	{
		zoom_str = zoom_str + ("<img class='img-50' src='images/" + nextChildID + ".png' />" + pos);
	}
	else
	{
		zoom_str = zoom_str + ("<img class='img-50' src='images/" + nextChildID + "_black.png' />" + pos);
	}
	zoom_str = zoom_str + "<br /><br />";
	nextChildID = "fallBranch";
	pos = "A branch with leaves changing colors.";
	if (getItem(nextChildID) >= 1)
	{
		zoom_str = zoom_str + ("<img class='img-50' src='images/" + nextChildID + ".png' />" + pos);
	}
	else
	{
		zoom_str = zoom_str + ("<img class='img-50' src='images/" + nextChildID + "_black.png' />" + pos);
	}
	zoom_str = zoom_str + "<br /><br />";
	nextChildID = "rottenLog";
	pos = "A rotting log.";
	if (getItem(nextChildID) >= 1)
	{
		zoom_str = zoom_str + ("<img class='img-50' src='images/" + nextChildID + ".png' />" + pos);
	}
	else
	{
		zoom_str = zoom_str + ("<img class='img-50' src='images/" + nextChildID + "_black.png' />" + pos);
	}
	zoom_str = zoom_str + "<br /><br />";
	nextChildID = "eyeball";
	pos = "Yeti's eyeball";
	if (getItem(nextChildID) >= 1)
	{
		zoom_str = zoom_str + ("<img class='img-50' src='images/" + nextChildID + ".png' />" + pos);
	}
	else
	{
		zoom_str = zoom_str + ("<img class='img-50' src='images/" + nextChildID + "_black.png' />" + pos);
	}
	zoom_str = zoom_str + "<br /><br />";
	nextChildID = "batWing";
	pos = "A wing from the caves.";
	if (getItem(nextChildID) >= 1)
	{
		zoom_str = zoom_str + ("<img class='img-50' src='images/" + nextChildID + ".png' />" + pos);
	}
	else
	{
		zoom_str = zoom_str + ("<img class='img-50' src='images/" + nextChildID + "_black.png' />" + pos);
	}
	zoom_str = zoom_str + "<br /><br />";
	nextChildID = "pumpkin";
	pos = "A pumpkin.";
	if (getItem(nextChildID) >= 1)
	{
		zoom_str = zoom_str + ("<img class='img-50' src='images/" + nextChildID + ".png' />" + pos);
	}
	else
	{
		zoom_str = zoom_str + ("<img class='img-50' src='images/" + nextChildID + "_black.png' />" + pos);
	}
	confirmDialogue("images/halloweenScroll.png", zoom_str, "Claim Reward", "Close", "CLAIM_HALLOWEEN_2020");
};
