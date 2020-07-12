'use strict';

function selectServerStuff()
{
	loadSelectServerScreen();
	if (localStorage.getItem("last_server") == null)
	{
		localStorage.setItem("last_server", getServerWithLeastPeople());
	}
	else
	{
		if (!isServerOnline(localStorage.getItem("last_server")))
		{
			localStorage.setItem("last_server", getServerWithLeastPeople());
		}
	}
	document.getElementById("login-menu-server-button").innerHTML = "Server " + sanitize(localStorage.getItem("last_server"));
};
