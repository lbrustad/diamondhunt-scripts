/**
 * setAutoScroll extracted from ../../deobfuscated/bundle.js at line 1307-1320
 *
 * If this file doesn't contain a function, there is an error in ../raw/setAutoScroll.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function setAutoScroll(_0x44A4)
{
	global_autoscrollChat = _0x44A4;
	if (global_autoscrollChat)
	{
		document.getElementById("chat-autoscroll-button-check").src = "images/check.png";
		var _0x4600 = document.getElementById("chat-area-view");
		$(_0x4600).scrollTop($(_0x4600)[0].scrollHeight)
	}
	else
	{
		document.getElementById("chat-autoscroll-button-check").src = "images/x.png"
	}
}