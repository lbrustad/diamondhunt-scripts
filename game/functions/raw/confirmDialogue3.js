/**
 * confirmDialogue3 extracted from ../../deobfuscated/bundle.js at line 7020-7041
 *
 * If this file doesn't contain a function, there is an error in ../raw/confirmDialogue3.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function confirmDialogue3(_0x151ED, _0x167F0, _0x167AA, _0x167CD, _0x16836, _0x1687C, _0x16813, _0x16859, _0x1689F)
{
	if (_0x151ED == "" || _0x151ED == "none")
	{
		document.getElementById("dialogue-confirm3-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm3-img").src = _0x151ED;
		document.getElementById("dialogue-confirm3-img").style.display = ""
	};
	document.getElementById("dialogue-confirm3-text").innerHTML = _0x167F0;
	document.getElementById("dialogue-confirm3").style.display = "";
	document.getElementById("dialogue-confirm3").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm3-yes").innerHTML = _0x167AA;
	document.getElementById("dialogue-confirm3-yes2").innerHTML = _0x167CD;
	document.getElementById("dialogue-confirm3-yes3").innerHTML = _0x16836;
	document.getElementById("dialogue-confirm3-no").innerHTML = _0x1687C;
	document.getElementById("dialogue-confirm3-yes").setAttribute("onclick", "sendBytes(\'" + _0x16813 + "\');closeDialogue(\'dialogue-confirm3\');");
	document.getElementById("dialogue-confirm3-yes2").setAttribute("onclick", "sendBytes(\'" + _0x16859 + "\');closeDialogue(\'dialogue-confirm3\');");
	document.getElementById("dialogue-confirm3-yes3").setAttribute("onclick", "sendBytes(\'" + _0x1689F + "\');closeDialogue(\'dialogue-confirm3\');")
}