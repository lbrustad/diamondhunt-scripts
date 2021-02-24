/**
 * open2InputTextDialogue extracted from ../../deobfuscated/bundle.js at line 8606-8628
 *
 * If this file doesn't contain a function, there is an error in ../raw/open2InputTextDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function open2InputTextDialogue(_0x1866D, _0x14EEB, _0x18690, _0x186B3, _0x18627, _0x1864A, _0x16813)
{
	if (_0x1866D == "none")
	{
		document.getElementById("dialogue-text-input2-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-text-input2-img").style.display = "";
		document.getElementById("dialogue-text-input2-img").src = _0x1866D
	};
	document.getElementById("dialogue-text-input2-description").innerHTML = _0x14EEB;
	document.getElementById("dialogue-text-input2-title1").innerHTML = _0x18690;
	document.getElementById("dialogue-text-input2-title2").innerHTML = _0x186B3;
	document.getElementById("dialogue-text-input2-confirm").innerHTML = _0x18627;
	document.getElementById("dialogue-text-input2-cancel").innerHTML = _0x1864A;
	document.getElementById("dialogue-text-input2-confirm").onclick = function ()
	{
		sendBytes(_0x16813 + "=" + document.getElementById("dialogue-text-input2-box1").value + "~" + document.getElementById("dialogue-text-input2-box2").value);
		closeDialogue("dialogue-text-input2")
	};
	openDialogue("dialogue-text-input2")
}