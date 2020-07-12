'use strict';

function changeChatHeight(reconnectTimeIncrease)
{
	var waitBeforeReconnect = parseInt(document.getElementById("chat-area-view").style.height);
	waitBeforeReconnect = waitBeforeReconnect + reconnectTimeIncrease;
	document.getElementById("chat-area-view").style.height = waitBeforeReconnect + "px";
};
