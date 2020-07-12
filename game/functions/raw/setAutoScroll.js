/**
 * setAutoScroll extracted from ../../deobfuscated/bundle.js at line 1002-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/setAutoScroll.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function setAutoScroll(_0x1CDB6)
{
	global_autoscrollChat = _0x1CDB6;
	if (global_autoscrollChat)
	{
		document.getElementById("chat-autoscroll-button-check").src = "images/check.png";
		var _0x1CE5E = document.getElementById("chat-area-view");
		$(_0x1CE5E).scrollTop($(_0x1CE5E)[0].scrollHeight)
	}
	else
	{
		document.getElementById("chat-autoscroll-button-check").src = "images/x.png"
	}
}