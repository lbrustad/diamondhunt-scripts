/**
 * openInputDialogue extracted from ../../deobfuscated/bundle.js at line 8849-8922
 *
 * If this file doesn't contain a function, there is an error in ../raw/openInputDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openInputDialogue(_0x3A8F, _0x676B, _0x674E, _0x66F7, _0x62C6, _0x62E3, _0x456F, _0x458C, _0x6731, _0x66DA, _0x384B, _0x4535)
{
	var _0x6714 = "";
	if (_0x384B != "")
	{
		_0x6714 = "<span style=\'color:grey;cursor:pointer;\' onclick=\'this.innerHTML = \"<br /><br />" + _0x384B + "<br /><br />\"\'>(more info)</span>"
	};
	var _0x41B2 = "";
	_0x41B2 += "<div class=\'dialogue\' id=\'wild-dialogue\' style=\'display:none;\'>";
	_0x41B2 += "<center>";
	_0x41B2 += "<h1>" + _0x3A8F + "</h1>";
	_0x41B2 += "<div>" + "<img src=\'" + _0x676B + "\' class=\'img-150\' />" + "</div>";
	_0x41B2 += "<br /><br />";
	_0x41B2 += "<div style=\'display:block\' class=\'input-multi-values-div\'>";
	_0x41B2 += "<table width=\'100%\'>";
	_0x41B2 += "<tr>";
	if (_0x674E == "ironBucket")
	{
		_0x41B2 += "<td colspan=\'4\'>How many " + getItemName("silverBuckets").toLowerCase() + "? " + _0x6714 + "<input type=\'text\' value=\'" + _0x66F7 + "\' id=\'dialogue-wild-input\' /></td>"
	}
	else
	{
		_0x41B2 += "<td colspan=\'4\'>How many " + getItemName(_0x674E).toLowerCase() + "? " + _0x6714 + "<input type=\'text\' value=\'" + _0x66F7 + "\' id=\'dialogue-wild-input\' /></td>"
	};
	_0x41B2 += "</tr>";
	_0x41B2 += "<tr>";
	_0x41B2 += "<td width=\'25%\'><div id=\'dialogue-wild-input-button-1\' class=\'input-button-values\'>ONE</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-2\' class=\'input-button-values\'>25%</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-3\' class=\'input-button-values\'>50%</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-4\' class=\'input-button-values\'>ALL</div></td>";
	_0x41B2 += "</tr>";
	_0x41B2 += "</table>";
	_0x41B2 += "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<div id=\'dialogue-wild-htmlboxes-area\'></div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'background-color:#b3ffff\' id=\'dialogue-wild-input-confirm\' class=\'dialogue-button\'>" + _0x6731 + "</div><br />";
	_0x41B2 += "<div onclick=\'closeDialogue(\"wild-dialogue\")\' class=\'dialogue-button\'>Close</div><br />";
	_0x41B2 += "</center>";
	_0x41B2 += "</div>";
	document.getElementById("dynamic-dialogue-area").innerHTML = _0x41B2;
	if (_0x62C6.length > 0)
	{
		var _0x6357 = (_0x62C6[0] == "xp_icon")
	};
	document.getElementById("dialogue-wild-input-confirm").onclick = function ()
	{
		sendBytes(_0x66DA + "=" + _0x674E + "~" + convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value));
		closeDialogue("wild-dialogue")
	};
	document.getElementById("dialogue-wild-input-button-1").onclick = function ()
	{
		changeValueOfInput(_0x456F, _0x458C, "dialogue-wild-input", "ONE", _0x4535);
		onKeyUpWildInputDialogue(_0x62C6, _0x62E3, _0x456F, _0x458C, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-2").onclick = function ()
	{
		changeValueOfInput(_0x456F, _0x458C, "dialogue-wild-input", "25%", _0x4535);
		onKeyUpWildInputDialogue(_0x62C6, _0x62E3, _0x456F, _0x458C, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-3").onclick = function ()
	{
		changeValueOfInput(_0x456F, _0x458C, "dialogue-wild-input", "50%", _0x4535);
		onKeyUpWildInputDialogue(_0x62C6, _0x62E3, _0x456F, _0x458C, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-4").onclick = function ()
	{
		changeValueOfInput(_0x456F, _0x458C, "dialogue-wild-input", "ALL", _0x4535);
		onKeyUpWildInputDialogue(_0x62C6, _0x62E3, _0x456F, _0x458C, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input").onkeyup = function ()
	{
		onKeyUpWildInputDialogue(_0x62C6, _0x62E3, _0x456F, _0x458C, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	openDialogue("wild-dialogue");
	onKeyUpWildInputDialogue(_0x62C6, _0x62E3, _0x456F, _0x458C, 1)
}