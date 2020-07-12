/**
 * sendBytes extracted from ../../deobfuscated/bundle.js at line 2172-2178
 *
 * If this file doesn't contain a function, there is an error in ../raw/sendBytes.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function sendBytes(_0x1C750)
{
	if (_0x1C750.length <= 255)
	{
		global_webSocket.send(_0x1C750)
	}
}