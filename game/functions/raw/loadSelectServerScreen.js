/**
 * loadSelectServerScreen extracted from ../../deobfuscated/bundle.js at line 45-80
 *
 * If this file doesn't contain a function, there is an error in ../raw/loadSelectServerScreen.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function loadSelectServerScreen()
{
	var _0x41B2 = "";
	_0x41B2 += "<br />";
	for (var _0x3607 = 0; _0x3607 <= 100; _0x3607++)
	{
		if (servers_information[_0x3607] == null)
		{
			break
		};
		var _0x56A7 = servers_information[_0x3607][0];
		var _0x56E1 = servers_information[_0x3607][1];
		var _0x56C4 = servers_information[_0x3607][2];
		var _0x5650 = servers_information[_0x3607][3];
		var _0x5D1C = servers_information[_0x3607][4];
		if (_0x56E1 == 1)
		{
			_0x41B2 += "<span onclick=\'localStorage.setItem(\"last_server\", " + _0x56A7 + ");window.location.reload()\' class=\'login-menu-server\' id=\'login-menu-server-button\'>Server " + _0x56A7 + "<br /><br /><span style=\'color:yellow;font-size:12pt;\'>" + _0x5650 + "/" + _0x5D1C + " online.</span>"
		}
		else
		{
			_0x41B2 += "<span onclick=\'localStorage.setItem(\"last_server\", " + _0x56A7 + ");window.location.reload()\' class=\'login-menu-server\' id=\'login-menu-server-button\'>Server " + _0x56A7 + "<br /><br /><span style=\'color:yellow;font-size:12pt;\'><span style=\'color:pink\'>OFFLINE</span></span>"
		};
		if (_0x56C4 == 1)
		{
			_0x41B2 += "<br /><br /><span style=\'color:green;font-size:8pt;\'><img src=\'images/donorCoins.png\' class=\'img-15\' /> Donor Server</span>"
		}
		else
		{
			_0x41B2 += "<br />"
		};
		_0x41B2 += "</span>";
		_0x41B2 += "<br />"
	};
	document.getElementById("server-list-section").innerHTML = _0x41B2
}