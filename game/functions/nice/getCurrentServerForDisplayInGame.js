'use strict';

function getCurrentServerForDisplayInGame()
{
	if (wss_host == "ws://127.0.0.1")
	{
		return "local";
	}
	else
	{
		return localStorage.getItem("last_server");
	}
};
