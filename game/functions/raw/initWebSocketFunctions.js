/**
 * initWebSocketFunctions extracted from ../../deobfuscated/bundle.js at line 202-244
 *
 * If this file doesn't contain a function, there is an error in ../raw/initWebSocketFunctions.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function initWebSocketFunctions()
{
	try
	{
		global_webSocket.onerror = function (_0x365E)
		{
			_0x5ABB(_0x365E)
		};
		global_webSocket.onopen = function (_0x365E)
		{
			_0x5AF5(_0x365E)
		};
		global_webSocket.onclose = function (_0x365E)
		{
			_0x5A9E(_0x365E)
		};
		global_webSocket.onmessage = function (_0x365E)
		{
			_0x5AD8(_0x365E)
		};

		function _0x5AD8(_0x365E)
		{
			serverCommand(_0x365E.data)
		}

		function _0x5AF5(_0x365E)
		{}

		function _0x5A9E(_0x365E)
		{}

		function _0x5ABB(_0x365E)
		{
			document.getElementById("login-box-connecting").style.display = "none";
			document.getElementById("login-box-server-offline").style.display = ""
		}
	}
	catch (err)
	{
		alert(err.message)
	}
}