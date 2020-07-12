/**
 * openInputTextDialogue extracted from ../../deobfuscated/bundle.js at line 5526-5547
 *
 * If this file doesn't contain a function, there is an error in ../raw/openInputTextDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openInputTextDialogue(_0x1DB0E, _0x1C7CE, _0x1DB1C, _0x1DAF2, _0x1DB00, _0x1D080)
{
	if (_0x1DB0E == "none")
	{
		document.getElementById("dialogue-text-input-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-text-input-img").style.display = "";
		document.getElementById("dialogue-text-input-img").src = _0x1DB0E
	};
	document.getElementById("dialogue-text-input-description").innerHTML = _0x1C7CE;
	document.getElementById("dialogue-text-input-title").innerHTML = _0x1DB1C;
	document.getElementById("dialogue-text-input-confirm").innerHTML = _0x1DAF2;
	document.getElementById("dialogue-text-input-cancel").innerHTML = _0x1DB00;
	document.getElementById("dialogue-text-input-confirm").onclick = function ()
	{
		sendBytes(_0x1D080 + "=" + document.getElementById("dialogue-text-input-box").value);
		closeDialogue("dialogue-text-input")
	};
	openDialogue("dialogue-text-input")
}