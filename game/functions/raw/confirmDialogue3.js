/**
 * confirmDialogue3 extracted from ../../deobfuscated/bundle.js at line 6043-6064
 *
 * If this file doesn't contain a function, there is an error in ../raw/confirmDialogue3.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function confirmDialogue3(_0x3AC9, _0x4BC7, _0x4B8D, _0x4BAA, _0x4C01, _0x4C3B, _0x4BE4, _0x4C1E, _0x4C58)
{
	if (_0x3AC9 == "" || _0x3AC9 == "none")
	{
		document.getElementById("dialogue-confirm3-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm3-img").src = _0x3AC9;
		document.getElementById("dialogue-confirm3-img").style.display = ""
	};
	document.getElementById("dialogue-confirm3-text").innerHTML = _0x4BC7;
	document.getElementById("dialogue-confirm3").style.display = "";
	document.getElementById("dialogue-confirm3").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm3-yes").innerHTML = _0x4B8D;
	document.getElementById("dialogue-confirm3-yes2").innerHTML = _0x4BAA;
	document.getElementById("dialogue-confirm3-yes3").innerHTML = _0x4C01;
	document.getElementById("dialogue-confirm3-no").innerHTML = _0x4C3B;
	document.getElementById("dialogue-confirm3-yes").setAttribute("onclick", "sendBytes(\'" + _0x4BE4 + "\');closeDialogue(\'dialogue-confirm3\');");
	document.getElementById("dialogue-confirm3-yes2").setAttribute("onclick", "sendBytes(\'" + _0x4C1E + "\');closeDialogue(\'dialogue-confirm3\');");
	document.getElementById("dialogue-confirm3-yes3").setAttribute("onclick", "sendBytes(\'" + _0x4C58 + "\');closeDialogue(\'dialogue-confirm3\');")
}