/**
 * loadMuteList extracted from ../../deobfuscated/bundle.js at line 12280-12326
 *
 * If this file doesn't contain a function, there is an error in ../raw/loadMuteList.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function loadMuteList(_0x1C750)
{
	var _0x1C75E = _0x1C750.split("~");
	var _0x1C8F4 = "<center>";
	_0x1C8F4 += "<table id=\'muteList-table\' class=\'sortable basic-table\' width=\'90%\'>";
	_0x1C8F4 += "<thead>";
	_0x1C8F4 += "<tr><th>Username</th><th>Muted By</th><th>Date Muted</th><th>Date Unmuted</th><th width=\'50%\'>Reason</th><th>IP Muted</th><th>Is Currenty Muted</th></tr>";
	_0x1C8F4 += "</thead>";
	_0x1C8F4 += "<tbody>";
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6++)
	{
		var _0x1D828 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D7FE = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D7F0 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D81A = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D80C = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D7E2 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D7D4 = _0x1C75E[_0x1C6B6];
		_0x1C8F4 += "<tr>";
		_0x1C8F4 += "<td>" + _0x1D828 + "</td>";
		_0x1C8F4 += "<td>" + _0x1D7FE + "</td>";
		_0x1C8F4 += "<td>" + formatUnixToDate(_0x1D7F0) + "</td>";
		if (_0x1D81A - _0x1D7F0 >= 54000000000)
		{
			_0x1C8F4 += "<td>" + "Forever" + "</td>"
		}
		else
		{
			_0x1C8F4 += "<td>" + formatUnixToDate(_0x1D81A) + "</td>"
		};
		_0x1C8F4 += "<td>" + _0x1D80C + "</td>";
		_0x1C8F4 += "<td>" + _0x1D7E2 + "</td>";
		_0x1C8F4 += "<td>" + _0x1D7D4 + "</td>";
		_0x1C8F4 += "</tr>"
	};
	_0x1C8F4 += "</tbody>";
	_0x1C8F4 += "</table>";
	_0x1C8F4 += "</center>";
	document.getElementById("section-muteList").innerHTML = _0x1C8F4;
	sorttable.makeSortable(document.getElementById("muteList-table"))
}