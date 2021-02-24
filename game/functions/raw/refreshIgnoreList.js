/**
 * refreshIgnoreList extracted from ../../deobfuscated/bundle.js at line 797-825
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshIgnoreList.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshIgnoreList(_0x14DB0)
{
	if (_0x14DB0 == "none")
	{
		document.getElementById("dialogue-ignore-list-section").innerHTML = "<span style=\'color:grey\'>(No ignores yet)</span>"
	}
	else
	{
		var _0x15A44 = "";
		_0x15A44 += "<center><table style=\'border:1px solid black;border-radius:8pt;background-color:#e6ffe6;\' width=\'80%\'>";
		_0x15A44 += "<tr>";
		_0x15A44 += "<th style=\'color:black;\'>" + "Name" + "</th>";
		_0x15A44 += "<th style=\'color:black;\'>" + "Actions" + "</th>";
		_0x15A44 += "</tr>";
		var _0x14DD3 = _0x14DB0.split("~");
		for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C++)
		{
			_0x15A44 += "<tr>";
			var _0x16764 = _0x14DD3[_0x14C0C];
			_0x14C0C++;
			_0x15A44 += "<td class=\'center\'  style=\'color:black;\'>" + _0x16764 + "</td>";
			_0x15A44 += "<td class=\'center\' >" + "<img onclick=\'sendBytes(\"REMOVE_IGNORE=" + _0x16764 + "\")\' class=\'x-button img-20\' src=\'images/x.png\' />" + "</td>";
			_0x15A44 += "</tr>"
		};
		_0x15A44 += "</table></center>";
		document.getElementById("dialogue-ignore-list-section").innerHTML = _0x15A44
	};
	openDialogue("dialogue-ignore-list")
}