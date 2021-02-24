/**
 * loadMuteList extracted from ../../deobfuscated/bundle.js at line 20704-20750
 *
 * If this file doesn't contain a function, there is an error in ../raw/loadMuteList.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function loadMuteList(_0x14DB0)
{
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x151CA = "<center>";
	_0x151CA += "<table id=\'muteList-table\' class=\'sortable basic-table\' width=\'90%\'>";
	_0x151CA += "<thead>";
	_0x151CA += "<tr><th>Username</th><th>Muted By</th><th>Date Muted</th><th>Date Unmuted</th><th width=\'50%\'>Reason</th><th>IP Muted</th><th>Is Currenty Muted</th></tr>";
	_0x151CA += "</thead>";
	_0x151CA += "<tbody>";
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C++)
	{
		var _0x17DF3 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17D8A = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17D67 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17DD0 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17DAD = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17D44 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17D21 = _0x14DD3[_0x14C0C];
		_0x151CA += "<tr>";
		_0x151CA += "<td>" + _0x17DF3 + "</td>";
		_0x151CA += "<td>" + _0x17D8A + "</td>";
		_0x151CA += "<td>" + formatUnixToDate(_0x17D67) + "</td>";
		if (_0x17DD0 - _0x17D67 >= 54000000000)
		{
			_0x151CA += "<td>" + "Forever" + "</td>"
		}
		else
		{
			_0x151CA += "<td>" + formatUnixToDate(_0x17DD0) + "</td>"
		};
		_0x151CA += "<td>" + _0x17DAD + "</td>";
		_0x151CA += "<td>" + _0x17D44 + "</td>";
		_0x151CA += "<td>" + _0x17D21 + "</td>";
		_0x151CA += "</tr>"
	};
	_0x151CA += "</tbody>";
	_0x151CA += "</table>";
	_0x151CA += "</center>";
	document.getElementById("section-muteList").innerHTML = _0x151CA;
	sorttable.makeSortable(document.getElementById("muteList-table"))
}