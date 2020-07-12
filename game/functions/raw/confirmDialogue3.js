/**
 * confirmDialogue3 extracted from ../../deobfuscated/bundle.js at line 4672-4693
 *
 * If this file doesn't contain a function, there is an error in ../raw/confirmDialogue3.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function confirmDialogue3(_0x1C902, _0x1D072, _0x1D056, _0x1D064, _0x1D08E, _0x1D0AA, _0x1D080, _0x1D09C, _0x1D0B8)
{
	if (_0x1C902 == "" || _0x1C902 == "none")
	{
		document.getElementById("dialogue-confirm3-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm3-img").src = _0x1C902;
		document.getElementById("dialogue-confirm3-img").style.display = ""
	};
	document.getElementById("dialogue-confirm3-text").innerHTML = _0x1D072;
	document.getElementById("dialogue-confirm3").style.display = "";
	document.getElementById("dialogue-confirm3").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm3-yes").innerHTML = _0x1D056;
	document.getElementById("dialogue-confirm3-yes2").innerHTML = _0x1D064;
	document.getElementById("dialogue-confirm3-yes3").innerHTML = _0x1D08E;
	document.getElementById("dialogue-confirm3-no").innerHTML = _0x1D0AA;
	document.getElementById("dialogue-confirm3-yes").setAttribute("onclick", "sendBytes(\'" + _0x1D080 + "\');closeDialogue(\'dialogue-confirm3\');");
	document.getElementById("dialogue-confirm3-yes2").setAttribute("onclick", "sendBytes(\'" + _0x1D09C + "\');closeDialogue(\'dialogue-confirm3\');");
	document.getElementById("dialogue-confirm3-yes3").setAttribute("onclick", "sendBytes(\'" + _0x1D0B8 + "\');closeDialogue(\'dialogue-confirm3\');")
}