/**
 * loadSelectServerScreen extracted from ../../deobfuscated/bundle.js at line 42-77
 *
 * If this file doesn't contain a function, there is an error in ../raw/loadSelectServerScreen.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function loadSelectServerScreen()
{
	var _0x1CC4A = "";
	_0x1CC4A += "<br />";
	for (var _0x1C6B6 = 0; _0x1C6B6 <= 100; _0x1C6B6++)
	{
		if (servers_information[_0x1C6B6] == null)
		{
			break
		};
		var _0x1D534 = servers_information[_0x1C6B6][0];
		var _0x1D550 = servers_information[_0x1C6B6][1];
		var _0x1D542 = servers_information[_0x1C6B6][2];
		var _0x1D50A = servers_information[_0x1C6B6][3];
		var _0x1D836 = servers_information[_0x1C6B6][4];
		if (_0x1D550 == 1)
		{
			_0x1CC4A += "<span onclick=\'localStorage.setItem(\"last_server\", " + _0x1D534 + ");window.location.reload()\' class=\'login-menu-server\' id=\'login-menu-server-button\'>Server " + _0x1D534 + "<br /><br /><span style=\'color:yellow;font-size:12pt;\'>" + _0x1D50A + "/" + _0x1D836 + " online.</span>"
		}
		else
		{
			_0x1CC4A += "<span onclick=\'localStorage.setItem(\"last_server\", " + _0x1D534 + ");window.location.reload()\' class=\'login-menu-server\' id=\'login-menu-server-button\'>Server " + _0x1D534 + "<br /><br /><span style=\'color:yellow;font-size:12pt;\'><span style=\'color:pink\'>OFFLINE</span></span>"
		};
		if (_0x1D542 == 1)
		{
			_0x1CC4A += "<br /><br /><span style=\'color:green;font-size:8pt;\'><img src=\'images/donorCoins.png\' class=\'img-15\' /> Donor Server</span>"
		}
		else
		{
			_0x1CC4A += "<br />"
		};
		_0x1CC4A += "</span>";
		_0x1CC4A += "<br />"
	};
	document.getElementById("server-list-section").innerHTML = _0x1CC4A
}