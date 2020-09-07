/**
 * openInputTextDialogue extracted from ../../deobfuscated/bundle.js at line 7239-7260
 *
 * If this file doesn't contain a function, there is an error in ../raw/openInputTextDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openInputTextDialogue(_0x63AE, _0x384B, _0x63CB, _0x6374, _0x6391, _0x4BE4)
{
	if (_0x63AE == "none")
	{
		document.getElementById("dialogue-text-input-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-text-input-img").style.display = "";
		document.getElementById("dialogue-text-input-img").src = _0x63AE
	};
	document.getElementById("dialogue-text-input-description").innerHTML = _0x384B;
	document.getElementById("dialogue-text-input-title").innerHTML = _0x63CB;
	document.getElementById("dialogue-text-input-confirm").innerHTML = _0x6374;
	document.getElementById("dialogue-text-input-cancel").innerHTML = _0x6391;
	document.getElementById("dialogue-text-input-confirm").onclick = function ()
	{
		sendBytes(_0x4BE4 + "=" + document.getElementById("dialogue-text-input-box").value);
		closeDialogue("dialogue-text-input")
	};
	openDialogue("dialogue-text-input")
}