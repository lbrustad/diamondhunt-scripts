/**
 * sendBytes extracted from ../../deobfuscated/bundle.js at line 3457-3463
 *
 * If this file doesn't contain a function, there is an error in ../raw/sendBytes.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function sendBytes(_0x14DB0)
{
	if (_0x14DB0.length <= 255)
	{
		global_webSocket.send(_0x14DB0)
	}
}