/**
 * setAutoScroll extracted from ../../deobfuscated/bundle.js at line 1562-1575
 *
 * If this file doesn't contain a function, there is an error in ../raw/setAutoScroll.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function setAutoScroll(_0x15DD2)
{
	global_autoscrollChat = _0x15DD2;
	if (global_autoscrollChat)
	{
		document.getElementById("chat-autoscroll-button-check").src = "images/check.png";
		var _0x15F76 = document.getElementById("chat-area-view");
		$(_0x15F76).scrollTop($(_0x15F76)[0].scrollHeight)
	}
	else
	{
		document.getElementById("chat-autoscroll-button-check").src = "images/x.png"
	}
}