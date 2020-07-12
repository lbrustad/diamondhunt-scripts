'use strict';

function setAutoScroll(inAutoScroll)
{
	global_autoscrollChat = inAutoScroll;
	if (global_autoscrollChat)
	{
		document.getElementById("chat-autoscroll-button-check").src = "images/check.png";
		var results_ul = document.getElementById("chat-area-view");
		$(results_ul).scrollTop($(results_ul)[0].scrollHeight);
	}
	else
	{
		document.getElementById("chat-autoscroll-button-check").src = "images/x.png";
	}
};
