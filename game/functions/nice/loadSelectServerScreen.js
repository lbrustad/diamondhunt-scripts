'use strict';

function loadSelectServerScreen()
{
	var pix_color = "";
	pix_color = pix_color + "<br />";
	var indexLookupKey = 0;
	for (; indexLookupKey <= 100; indexLookupKey++)
	{
		if (servers_information[indexLookupKey] == null)
		{
			break;
		}
		var _a_ = servers_information[indexLookupKey][0];
		var _b_ = servers_information[indexLookupKey][1];
		var _c_ = servers_information[indexLookupKey][2];
		var _ddoc = servers_information[indexLookupKey][3];
		var picKey = servers_information[indexLookupKey][4];
		if (_b_ == 1)
		{
			pix_color = pix_color + ('<span onclick=\'localStorage.setItem("last_server", ' + _a_ + ");window.location.reload()' class='login-menu-server' id='login-menu-server-button'>Server " + _a_ + "<br /><br /><span style='color:yellow;font-size:12pt;'>" + _ddoc + "/" + picKey + " online.</span>");
		}
		else
		{
			pix_color = pix_color + ('<span onclick=\'localStorage.setItem("last_server", ' + _a_ + ");window.location.reload()' class='login-menu-server' id='login-menu-server-button'>Server " + _a_ + "<br /><br /><span style='color:yellow;font-size:12pt;'><span style='color:pink'>OFFLINE</span></span>");
		}
		if (_c_ == 1)
		{
			pix_color = pix_color + "<br /><br /><span style='color:green;font-size:8pt;'><img src='images/donorCoins.png' class='img-15' /> Donor Server</span>";
		}
		else
		{
			pix_color = pix_color + "<br />";
		}
		pix_color = pix_color + "</span>";
		pix_color = pix_color + "<br />";
	}
	document.getElementById("server-list-section").innerHTML = pix_color;
};
