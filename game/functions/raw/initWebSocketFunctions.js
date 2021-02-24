/**
 * initWebSocketFunctions extracted from ../../deobfuscated/bundle.js at line 248-290
 *
 * If this file doesn't contain a function, there is an error in ../raw/initWebSocketFunctions.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function initWebSocketFunctions()
{
	try
	{
		global_webSocket.onerror = function (_0x14C75)
		{
			_0x17B37(_0x14C75)
		};
		global_webSocket.onopen = function (_0x14C75)
		{
			_0x17B7D(_0x14C75)
		};
		global_webSocket.onclose = function (_0x14C75)
		{
			_0x17B14(_0x14C75)
		};
		global_webSocket.onmessage = function (_0x14C75)
		{
			_0x17B5A(_0x14C75)
		};

		function _0x17B5A(_0x14C75)
		{
			serverCommand(_0x14C75.data)
		}

		function _0x17B7D(_0x14C75)
		{}

		function _0x17B14(_0x14C75)
		{}

		function _0x17B37(_0x14C75)
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