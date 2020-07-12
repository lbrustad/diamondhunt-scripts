/**
 * openInputDialogue extracted from ../../deobfuscated/bundle.js at line 6726-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/openInputDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openInputDialogue(_0x1C8E6, _0x1DBEE, _0x1DBE0, _0x1DBB6, _0x1DA9E, _0x1DAAC, _0x1CE0A, _0x1CE18, _0x1DBD2, _0x1DBA8, _0x1C7CE)
{
	var _0x1DBC4 = "";
	if (_0x1C7CE != "")
	{
		_0x1DBC4 = "<span style=\'color:grey;cursor:pointer;\' onclick=\'this.innerHTML = \"<br /><br />" + _0x1C7CE + "<br /><br />\"\'>(more info)</span>"
	};
	var _0x1CC4A = "";
	_0x1CC4A += "<div class=\'dialogue\' id=\'wild-dialogue\' style=\'display:none;\'>";
	_0x1CC4A += "<center>";
	_0x1CC4A += "<h1>" + _0x1C8E6 + "</h1>";
	_0x1CC4A += "<div>" + "<img src=\'" + _0x1DBEE + "\' class=\'img-150\' />" + "</div>";
	_0x1CC4A += "<br /><br />";
	_0x1CC4A += "<div style=\'display:block\' class=\'input-multi-values-div\'>";
	_0x1CC4A += "<table width=\'100%\'>";
	_0x1CC4A += "<tr>";
	if (_0x1DBE0 == "ironBucket")
	{
		_0x1CC4A += "<td colspan=\'4\'>How many " + getItemName("silverBuckets").toLowerCase() + "? " + _0x1DBC4 + "<input type=\'text\' value=\'" + _0x1DBB6 + "\' id=\'dialogue-wild-input\' /></td>"
	}
	else
	{
		_0x1CC4A += "<td colspan=\'4\'>How many " + getItemName(_0x1DBE0).toLowerCase() + "? " + _0x1DBC4 + "<input type=\'text\' value=\'" + _0x1DBB6 + "\' id=\'dialogue-wild-input\' /></td>"
	};
	_0x1CC4A += "</tr>";
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td width=\'25%\'><div id=\'dialogue-wild-input-button-1\' class=\'input-button-values\'>ONE</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-2\' class=\'input-button-values\'>25%</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-3\' class=\'input-button-values\'>50%</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-4\' class=\'input-button-values\'>ALL</div></td>";
	_0x1CC4A += "</tr>";
	_0x1CC4A += "</table>";
	_0x1CC4A += "</div>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<div id=\'dialogue-wild-htmlboxes-area\'></div>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<div style=\'background-color:#b3ffff\' id=\'dialogue-wild-input-confirm\' class=\'dialogue-button\'>" + _0x1DBD2 + "</div><br />";
	_0x1CC4A += "<div onclick=\'closeDialogue(\"wild-dialogue\")\' class=\'dialogue-button\'>Close</div><br />";
	_0x1CC4A += "</center>";
	_0x1CC4A += "</div>";
	document.getElementById("dynamic-dialogue-area").innerHTML = _0x1CC4A;
	if (_0x1DA9E.length > 0)
	{
		var _0x1DAE4 = (_0x1DA9E[0] == "xp_icon")
	};
	document.getElementById("dialogue-wild-input-confirm").onclick = function ()
	{
		sendBytes(_0x1DBA8 + "=" + _0x1DBE0 + "~" + convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value));
		closeDialogue("wild-dialogue")
	};
	document.getElementById("dialogue-wild-input-button-1").onclick = function ()
	{
		changeValueOfInput(_0x1CE0A, _0x1CE18, "dialogue-wild-input", "ONE");
		onKeyUpWildInputDialogue(_0x1DA9E, _0x1DAAC, _0x1CE0A, _0x1CE18, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-2").onclick = function ()
	{
		changeValueOfInput(_0x1CE0A, _0x1CE18, "dialogue-wild-input", "25%");
		onKeyUpWildInputDialogue(_0x1DA9E, _0x1DAAC, _0x1CE0A, _0x1CE18, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-3").onclick = function ()
	{
		changeValueOfInput(_0x1CE0A, _0x1CE18, "dialogue-wild-input", "50%");
		onKeyUpWildInputDialogue(_0x1DA9E, _0x1DAAC, _0x1CE0A, _0x1CE18, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-4").onclick = function ()
	{
		changeValueOfInput(_0x1CE0A, _0x1CE18, "dialogue-wild-input", "ALL");
		onKeyUpWildInputDialogue(_0x1DA9E, _0x1DAAC, _0x1CE0A, _0x1CE18, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input").onkeyup = function ()
	{
		onKeyUpWildInputDialogue(_0x1DA9E, _0x1DAAC, _0x1CE0A, _0x1CE18, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	openDialogue("wild-dialogue");
	onKeyUpWildInputDialogue(_0x1DA9E, _0x1DAAC, _0x1CE0A, _0x1CE18, 1)
}