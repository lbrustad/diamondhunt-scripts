/**
 * openInputDialogue extracted from ../../deobfuscated/bundle.js at line 10620-10693
 *
 * If this file doesn't contain a function, there is an error in ../raw/openInputDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openInputDialogue(_0x151A7, _0x18AF0, _0x18ACD, _0x18A64, _0x18555, _0x18578, _0x15EC7, _0x15EEA, _0x18AAA, _0x18A41, _0x14EEB, _0x15E81)
{
	var _0x18A87 = "";
	if (_0x14EEB != "")
	{
		_0x18A87 = "<span style=\'color:grey;cursor:pointer;\' onclick=\'this.innerHTML = \"<br /><br />" + _0x14EEB + "<br /><br />\"\'>(more info)</span>"
	};
	var _0x15A44 = "";
	_0x15A44 += "<div class=\'dialogue\' id=\'wild-dialogue\' style=\'display:none;\'>";
	_0x15A44 += "<center>";
	_0x15A44 += "<h1>" + _0x151A7 + "</h1>";
	_0x15A44 += "<div>" + "<img src=\'" + _0x18AF0 + "\' class=\'img-150\' />" + "</div>";
	_0x15A44 += "<br /><br />";
	_0x15A44 += "<div style=\'display:block\' class=\'input-multi-values-div\'>";
	_0x15A44 += "<table width=\'100%\'>";
	_0x15A44 += "<tr>";
	if (_0x18ACD == "ironBucket")
	{
		_0x15A44 += "<td colspan=\'4\'>How many " + getItemName("silverBuckets").toLowerCase() + "? " + _0x18A87 + "<input type=\'text\' value=\'" + _0x18A64 + "\' id=\'dialogue-wild-input\' /></td>"
	}
	else
	{
		_0x15A44 += "<td colspan=\'4\'>How many " + getItemName(_0x18ACD).toLowerCase() + "? " + _0x18A87 + "<input type=\'text\' value=\'" + _0x18A64 + "\' id=\'dialogue-wild-input\' /></td>"
	};
	_0x15A44 += "</tr>";
	_0x15A44 += "<tr>";
	_0x15A44 += "<td width=\'25%\'><div id=\'dialogue-wild-input-button-1\' class=\'input-button-values\'>ONE</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-2\' class=\'input-button-values\'>25%</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-3\' class=\'input-button-values\'>50%</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-4\' class=\'input-button-values\'>ALL</div></td>";
	_0x15A44 += "</tr>";
	_0x15A44 += "</table>";
	_0x15A44 += "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<div id=\'dialogue-wild-htmlboxes-area\'></div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'background-color:#b3ffff\' id=\'dialogue-wild-input-confirm\' class=\'dialogue-button\'>" + _0x18AAA + "</div><br />";
	_0x15A44 += "<div onclick=\'closeDialogue(\"wild-dialogue\")\' class=\'dialogue-button\'>Close</div><br />";
	_0x15A44 += "</center>";
	_0x15A44 += "</div>";
	document.getElementById("dynamic-dialogue-area").innerHTML = _0x15A44;
	if (_0x18555.length > 0)
	{
		var _0x18604 = (_0x18555[0] == "xp_icon")
	};
	document.getElementById("dialogue-wild-input-confirm").onclick = function ()
	{
		sendBytes(_0x18A41 + "=" + _0x18ACD + "~" + convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value));
		closeDialogue("wild-dialogue")
	};
	document.getElementById("dialogue-wild-input-button-1").onclick = function ()
	{
		changeValueOfInput(_0x15EC7, _0x15EEA, "dialogue-wild-input", "ONE", _0x15E81);
		onKeyUpWildInputDialogue(_0x18555, _0x18578, _0x15EC7, _0x15EEA, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-2").onclick = function ()
	{
		changeValueOfInput(_0x15EC7, _0x15EEA, "dialogue-wild-input", "25%", _0x15E81);
		onKeyUpWildInputDialogue(_0x18555, _0x18578, _0x15EC7, _0x15EEA, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-3").onclick = function ()
	{
		changeValueOfInput(_0x15EC7, _0x15EEA, "dialogue-wild-input", "50%", _0x15E81);
		onKeyUpWildInputDialogue(_0x18555, _0x18578, _0x15EC7, _0x15EEA, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-4").onclick = function ()
	{
		changeValueOfInput(_0x15EC7, _0x15EEA, "dialogue-wild-input", "ALL", _0x15E81);
		onKeyUpWildInputDialogue(_0x18555, _0x18578, _0x15EC7, _0x15EEA, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input").onkeyup = function ()
	{
		onKeyUpWildInputDialogue(_0x18555, _0x18578, _0x15EC7, _0x15EEA, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	openDialogue("wild-dialogue");
	onKeyUpWildInputDialogue(_0x18555, _0x18578, _0x15EC7, _0x15EEA, 1)
}