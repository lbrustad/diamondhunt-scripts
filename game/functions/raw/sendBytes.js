/**
 * sendBytes extracted from ../../deobfuscated/bundle.js at line 2185-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/sendBytes.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function sendBytes(data)
{
	if (data.length <= 255)
	{
		global_webSocket.send(data)
	}
}