'use strict';

function initWebSocketFunctions()
{
	try
	{
		var respondCommand = function gruntCommand(command)
		{
			serverCommand(command.data);
		};
		var existingOpenHandler = function CanvasEffect(callback)
		{};
		var _open = function onVerify(verifyEvent)
		{};
		var expect = function hideDragZone(reason)
		{
			document.getElementById("login-box-connecting").style.display = "none";
			document.getElementById("login-box-server-offline").style.display = "";
		};
		global_webSocket.onerror = function (theError)
		{
			expect(theError);
		};
		global_webSocket.onopen = function (event)
		{
			existingOpenHandler(event);
		};
		global_webSocket.onclose = function (e)
		{
			_open(e);
		};
		global_webSocket.onmessage = function (data)
		{
			respondCommand(data);
		};
	}
	catch (oResponse)
	{
		alert(oResponse.message);
	}
};
