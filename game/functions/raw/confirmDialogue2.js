/**
 * confirmDialogue2 extracted from ../../deobfuscated/bundle.js at line 4651-4670
 *
 * If this file doesn't contain a function, there is an error in ../raw/confirmDialogue2.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function confirmDialogue2(_0x1C902, _0x1D072, _0x1D056, _0x1D064, _0x1D08E, _0x1D080, _0x1D09C)
{
	if (_0x1C902 == "" || _0x1C902 == "none")
	{
		document.getElementById("dialogue-confirm2-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm2-img").src = _0x1C902;
		document.getElementById("dialogue-confirm2-img").style.display = ""
	};
	document.getElementById("dialogue-confirm2-text").innerHTML = _0x1D072;
	document.getElementById("dialogue-confirm2").style.display = "";
	document.getElementById("dialogue-confirm2").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm2-yes").innerHTML = _0x1D056;
	document.getElementById("dialogue-confirm2-yes2").innerHTML = _0x1D064;
	document.getElementById("dialogue-confirm2-no").innerHTML = _0x1D08E;
	document.getElementById("dialogue-confirm2-yes").setAttribute("onclick", "sendBytes(\'" + _0x1D080 + "\');closeDialogue(\'dialogue-confirm2\');");
	document.getElementById("dialogue-confirm2-yes2").setAttribute("onclick", "sendBytes(\'" + _0x1D09C + "\');closeDialogue(\'dialogue-confirm2\');")
}