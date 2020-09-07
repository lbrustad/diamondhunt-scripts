/**
 * chatSend extracted from ../../deobfuscated/bundle.js at line 1522-1526
 *
 * If this file doesn't contain a function, there is an error in ../raw/chatSend.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function chatSend()
{
	sendBytes("CHAT=" + document.getElementById("chat-area-input").value.replace(/~/g, " "));
	document.getElementById("chat-area-input").value = ""
}