/**
 * getCurrentServerForDisplayInGame extracted from ../../deobfuscated/bundle.js at line 33-43
 *
 * If this file doesn't contain a function, there is an error in ../raw/getCurrentServerForDisplayInGame.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getCurrentServerForDisplayInGame()
{
	if (wss_host == "ws://192.168.2.23")
	{
		return "local"
	}
	else
	{
		return localStorage.getItem("last_server")
	}
}