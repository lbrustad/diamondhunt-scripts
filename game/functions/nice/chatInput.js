'use strict';

function chatInput(event)
{
	if (event.keyCode == 13)
	{
		chatSend();
	}
	if (event.keyCode == 9)
	{
		if (getItemString("lastPM") != "none" && document.getElementById("chat-area-input").value.length == 0)
		{
			document.getElementById("chat-area-input").value = "/pm " + getItemString("lastPM") + " ";
		}
		event.preventDefault();
	}
};
