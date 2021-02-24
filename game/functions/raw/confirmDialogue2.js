/**
 * confirmDialogue2 extracted from ../../deobfuscated/bundle.js at line 6999-7018
 *
 * If this file doesn't contain a function, there is an error in ../raw/confirmDialogue2.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function confirmDialogue2(_0x151ED, _0x167F0, _0x167AA, _0x167CD, _0x16836, _0x16813, _0x16859)
{
	if (_0x151ED == "" || _0x151ED == "none")
	{
		document.getElementById("dialogue-confirm2-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm2-img").src = _0x151ED;
		document.getElementById("dialogue-confirm2-img").style.display = ""
	};
	document.getElementById("dialogue-confirm2-text").innerHTML = _0x167F0;
	document.getElementById("dialogue-confirm2").style.display = "";
	document.getElementById("dialogue-confirm2").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm2-yes").innerHTML = _0x167AA;
	document.getElementById("dialogue-confirm2-yes2").innerHTML = _0x167CD;
	document.getElementById("dialogue-confirm2-no").innerHTML = _0x16836;
	document.getElementById("dialogue-confirm2-yes").setAttribute("onclick", "sendBytes(\'" + _0x16813 + "\');closeDialogue(\'dialogue-confirm2\');");
	document.getElementById("dialogue-confirm2-yes2").setAttribute("onclick", "sendBytes(\'" + _0x16859 + "\');closeDialogue(\'dialogue-confirm2\');")
}