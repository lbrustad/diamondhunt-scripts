'use strict';

function incrementSpice(clickedItemID, reconnectTimeIncrease)
{
	var template = document.getElementById("dialogue-spices-" + clickedItemID);
	var waitBeforeReconnect = parseInt(template.innerHTML);
	waitBeforeReconnect = waitBeforeReconnect + reconnectTimeIncrease;
	if (waitBeforeReconnect > 4)
	{
		waitBeforeReconnect = 4;
	}
	if (waitBeforeReconnect < 0)
	{
		waitBeforeReconnect = 0;
	}
	if (waitBeforeReconnect > getItem(clickedItemID + "Spices"))
	{
		return;
	}
	template.innerHTML = waitBeforeReconnect;
};
