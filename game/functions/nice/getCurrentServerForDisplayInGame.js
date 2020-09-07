'use strict';

function getCurrentServerForDisplayInGame()
{
	if (wss_host == "ws://192.168.2.23")
	{
		return "local";
	}
	else
	{
		return localStorage.getItem("last_server");
	}
};
