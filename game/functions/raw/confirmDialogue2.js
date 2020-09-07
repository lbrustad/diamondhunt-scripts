/**
 * confirmDialogue2 extracted from ../../deobfuscated/bundle.js at line 6022-6041
 *
 * If this file doesn't contain a function, there is an error in ../raw/confirmDialogue2.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function confirmDialogue2(_0x3AC9, _0x4BC7, _0x4B8D, _0x4BAA, _0x4C01, _0x4BE4, _0x4C1E)
{
	if (_0x3AC9 == "" || _0x3AC9 == "none")
	{
		document.getElementById("dialogue-confirm2-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm2-img").src = _0x3AC9;
		document.getElementById("dialogue-confirm2-img").style.display = ""
	};
	document.getElementById("dialogue-confirm2-text").innerHTML = _0x4BC7;
	document.getElementById("dialogue-confirm2").style.display = "";
	document.getElementById("dialogue-confirm2").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm2-yes").innerHTML = _0x4B8D;
	document.getElementById("dialogue-confirm2-yes2").innerHTML = _0x4BAA;
	document.getElementById("dialogue-confirm2-no").innerHTML = _0x4C01;
	document.getElementById("dialogue-confirm2-yes").setAttribute("onclick", "sendBytes(\'" + _0x4BE4 + "\');closeDialogue(\'dialogue-confirm2\');");
	document.getElementById("dialogue-confirm2-yes2").setAttribute("onclick", "sendBytes(\'" + _0x4C1E + "\');closeDialogue(\'dialogue-confirm2\');")
}