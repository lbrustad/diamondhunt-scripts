/**
 * openInputTextDialogue extracted from ../../deobfuscated/bundle.js at line 8583-8604
 *
 * If this file doesn't contain a function, there is an error in ../raw/openInputTextDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openInputTextDialogue(_0x1866D, _0x14EEB, _0x18690, _0x18627, _0x1864A, _0x16813)
{
	if (_0x1866D == "none")
	{
		document.getElementById("dialogue-text-input-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-text-input-img").style.display = "";
		document.getElementById("dialogue-text-input-img").src = _0x1866D
	};
	document.getElementById("dialogue-text-input-description").innerHTML = _0x14EEB;
	document.getElementById("dialogue-text-input-title").innerHTML = _0x18690;
	document.getElementById("dialogue-text-input-confirm").innerHTML = _0x18627;
	document.getElementById("dialogue-text-input-cancel").innerHTML = _0x1864A;
	document.getElementById("dialogue-text-input-confirm").onclick = function ()
	{
		sendBytes(_0x16813 + "=" + document.getElementById("dialogue-text-input-box").value);
		closeDialogue("dialogue-text-input")
	};
	openDialogue("dialogue-text-input")
}