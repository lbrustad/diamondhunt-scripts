/**
 * chatInput extracted from ../../deobfuscated/bundle.js at line 1178-1192
 *
 * If this file doesn't contain a function, there is an error in ../raw/chatInput.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function chatInput(_0x1C6E0)
{
	if (_0x1C6E0.keyCode == 13)
	{
		chatSend()
	};
	if (_0x1C6E0.keyCode == 9)
	{
		if (getItemString("lastPM") != "none" && document.getElementById("chat-area-input").value.length == 0)
		{
			document.getElementById("chat-area-input").value = "/pm " + getItemString("lastPM") + " "
		};
		_0x1C6E0.preventDefault()
	}
}