'use strict';

function chatSend()
{
	sendBytes("CHAT=" + document.getElementById("chat-area-input").value.replace(/~/g, " "));
	document.getElementById("chat-area-input").value = "";
};
