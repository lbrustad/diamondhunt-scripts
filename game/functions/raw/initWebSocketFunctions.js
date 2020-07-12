/**
 * initWebSocketFunctions extracted from ../../deobfuscated/bundle.js at line 193-235
 *
 * If this file doesn't contain a function, there is an error in ../raw/initWebSocketFunctions.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function initWebSocketFunctions()
{
	try
	{
		global_webSocket.onerror = function (_0x1C6E0)
		{
			_0x1D710(_0x1C6E0)
		};
		global_webSocket.onopen = function (_0x1C6E0)
		{
			_0x1D72C(_0x1C6E0)
		};
		global_webSocket.onclose = function (_0x1C6E0)
		{
			_0x1D702(_0x1C6E0)
		};
		global_webSocket.onmessage = function (_0x1C6E0)
		{
			_0x1D71E(_0x1C6E0)
		};

		function _0x1D71E(_0x1C6E0)
		{
			serverCommand(_0x1C6E0.data)
		}

		function _0x1D72C(_0x1C6E0)
		{}

		function _0x1D702(_0x1C6E0)
		{}

		function _0x1D710(_0x1C6E0)
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