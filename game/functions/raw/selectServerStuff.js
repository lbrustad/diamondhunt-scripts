/**
 * selectServerStuff extracted from ../../deobfuscated/bundle.js at line 98-113
 *
 * If this file doesn't contain a function, there is an error in ../raw/selectServerStuff.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function selectServerStuff()
{
	loadSelectServerScreen();
	if (localStorage.getItem("last_server") == null)
	{
		localStorage.setItem("last_server", getServerWithLeastPeople())
	}
	else
	{
		if (!isServerOnline(localStorage.getItem("last_server")))
		{
			localStorage.setItem("last_server", getServerWithLeastPeople())
		}
	};
	document.getElementById("login-menu-server-button").innerHTML = "Server " + sanitize(localStorage.getItem("last_server"))
}