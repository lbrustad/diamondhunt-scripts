'use strict';

function setOrBuyChatTag(frustum2DWidth, mode)
{
	if (mode == "SET")
	{
		sendBytes("SET_PRICE_TAG=" + frustum2DWidth);
	}
	else
	{
		confirmDialogue("images/chatIcon.png", "Are you sure you wanna purchase this with tradable donor coins?", "Purchase", "Cancel", "BUY_PRICE_TAG=" + frustum2DWidth);
	}
};
