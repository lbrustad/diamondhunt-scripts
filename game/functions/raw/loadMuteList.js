/**
 * loadMuteList extracted from ../../deobfuscated/bundle.js at line 16968-17014
 *
 * If this file doesn't contain a function, there is an error in ../raw/loadMuteList.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function loadMuteList(_0x3746)
{
	var _0x3763 = _0x3746.split("~");
	var _0x3AAC = "<center>";
	_0x3AAC += "<table id=\'muteList-table\' class=\'sortable basic-table\' width=\'90%\'>";
	_0x3AAC += "<thead>";
	_0x3AAC += "<tr><th>Username</th><th>Muted By</th><th>Date Muted</th><th>Date Unmuted</th><th width=\'50%\'>Reason</th><th>IP Muted</th><th>Is Currenty Muted</th></tr>";
	_0x3AAC += "</thead>";
	_0x3AAC += "<tbody>";
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607++)
	{
		var _0x5CFF = _0x3763[_0x3607];
		_0x3607++;
		var _0x5CA8 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5C8B = _0x3763[_0x3607];
		_0x3607++;
		var _0x5CE2 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5CC5 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5C6E = _0x3763[_0x3607];
		_0x3607++;
		var _0x5C51 = _0x3763[_0x3607];
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>" + _0x5CFF + "</td>";
		_0x3AAC += "<td>" + _0x5CA8 + "</td>";
		_0x3AAC += "<td>" + formatUnixToDate(_0x5C8B) + "</td>";
		if (_0x5CE2 - _0x5C8B >= 54000000000)
		{
			_0x3AAC += "<td>" + "Forever" + "</td>"
		}
		else
		{
			_0x3AAC += "<td>" + formatUnixToDate(_0x5CE2) + "</td>"
		};
		_0x3AAC += "<td>" + _0x5CC5 + "</td>";
		_0x3AAC += "<td>" + _0x5C6E + "</td>";
		_0x3AAC += "<td>" + _0x5C51 + "</td>";
		_0x3AAC += "</tr>"
	};
	_0x3AAC += "</tbody>";
	_0x3AAC += "</table>";
	_0x3AAC += "</center>";
	document.getElementById("section-muteList").innerHTML = _0x3AAC;
	sorttable.makeSortable(document.getElementById("muteList-table"))
}