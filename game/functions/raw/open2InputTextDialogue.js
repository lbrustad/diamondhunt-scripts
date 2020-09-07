/**
 * open2InputTextDialogue extracted from ../../deobfuscated/bundle.js at line 7262-7284
 *
 * If this file doesn't contain a function, there is an error in ../raw/open2InputTextDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function open2InputTextDialogue(_0x63AE, _0x384B, _0x63CB, _0x63E8, _0x6374, _0x6391, _0x4BE4)
{
	if (_0x63AE == "none")
	{
		document.getElementById("dialogue-text-input2-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-text-input2-img").style.display = "";
		document.getElementById("dialogue-text-input2-img").src = _0x63AE
	};
	document.getElementById("dialogue-text-input2-description").innerHTML = _0x384B;
	document.getElementById("dialogue-text-input2-title1").innerHTML = _0x63CB;
	document.getElementById("dialogue-text-input2-title2").innerHTML = _0x63E8;
	document.getElementById("dialogue-text-input2-confirm").innerHTML = _0x6374;
	document.getElementById("dialogue-text-input2-cancel").innerHTML = _0x6391;
	document.getElementById("dialogue-text-input2-confirm").onclick = function ()
	{
		sendBytes(_0x4BE4 + "=" + document.getElementById("dialogue-text-input2-box1").value + "~" + document.getElementById("dialogue-text-input2-box2").value);
		closeDialogue("dialogue-text-input2")
	};
	openDialogue("dialogue-text-input2")
}