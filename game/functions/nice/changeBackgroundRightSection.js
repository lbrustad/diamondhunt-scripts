'use strict';

function changeBackgroundRightSection(canCreateDiscussions)
{
	switch (canCreateDiscussions)
	{
	case "woodcutting":
	case "farming":
		document.getElementById("right-panel").style.backgroundImage = "url('images/background13.png')";
		break;
	default:
		document.getElementById("right-panel").style.backgroundImage = "";
		break;
	}
};
