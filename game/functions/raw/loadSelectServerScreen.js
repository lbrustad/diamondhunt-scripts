/**
 * loadSelectServerScreen extracted from ../../deobfuscated/bundle.js at line 45-80
 *
 * If this file doesn't contain a function, there is an error in ../raw/loadSelectServerScreen.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function loadSelectServerScreen()
{
	var _0x15A44 = "";
	_0x15A44 += "<br />";
	for (var _0x14C0C = 0; _0x14C0C <= 100; _0x14C0C++)
	{
		if (servers_information[_0x14C0C] == null)
		{
			break
		};
		var _0x17556 = servers_information[_0x14C0C][0];
		var _0x1759C = servers_information[_0x14C0C][1];
		var _0x17579 = servers_information[_0x14C0C][2];
		var _0x174ED = servers_information[_0x14C0C][3];
		var _0x17E16 = servers_information[_0x14C0C][4];
		if (_0x1759C == 1)
		{
			_0x15A44 += "<span onclick=\'localStorage.setItem(\"last_server\", " + _0x17556 + ");window.location.reload()\' class=\'login-menu-server\' id=\'login-menu-server-button\'>Server " + _0x17556 + "<br /><br /><span style=\'color:yellow;font-size:12pt;\'>" + _0x174ED + "/" + _0x17E16 + " online.</span>"
		}
		else
		{
			_0x15A44 += "<span onclick=\'localStorage.setItem(\"last_server\", " + _0x17556 + ");window.location.reload()\' class=\'login-menu-server\' id=\'login-menu-server-button\'>Server " + _0x17556 + "<br /><br /><span style=\'color:yellow;font-size:12pt;\'><span style=\'color:pink\'>OFFLINE</span></span>"
		};
		if (_0x17579 == 1)
		{
			_0x15A44 += "<br /><br /><span style=\'color:green;font-size:8pt;\'><img src=\'images/donorCoins.png\' class=\'img-15\' /> Donor Server</span>"
		}
		else
		{
			_0x15A44 += "<br />"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "<br />"
	};
	document.getElementById("server-list-section").innerHTML = _0x15A44
}