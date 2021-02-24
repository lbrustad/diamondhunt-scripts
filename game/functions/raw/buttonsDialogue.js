/**
 * buttonsDialogue extracted from ../../deobfuscated/bundle.js at line 17992-18081
 *
 * If this file doesn't contain a function, there is an error in ../raw/buttonsDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function buttonsDialogue(_0x15B7F, _0x15BA2, _0x15BC5, _0x15BE8, _0x15C0B, _0x15C2E, _0x15C51, _0x15C74, _0x15AF3, _0x15B16, _0x15B39, _0x15B5C, _0x15CBA, _0x15CDD, _0x15D00, _0x15D23, _0x15D46, _0x15AD0)
{
	if (_0x15B7F == "none")
	{
		document.getElementById("dialogue-fancy-button-div-1").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-1").style.display = ""
	};
	if (_0x15BA2 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-2").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-2").style.display = ""
	};
	if (_0x15BC5 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-3").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-3").style.display = ""
	};
	if (_0x15BE8 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-4").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-4").style.display = ""
	};
	for (var _0x14C0C = 1; _0x14C0C <= 4; _0x14C0C++)
	{
		var _0x1511B = window["btnImage" + _0x14C0C];
		var _0x151A7 = window["btnTitle" + _0x14C0C];
		var _0x14EEB = window["btnDesc" + _0x14C0C];
		var _0x15C97 = window["cmd" + _0x14C0C];
		if (_0x14C0C == 1)
		{
			var _0x1511B = _0x15B7F;
			var _0x151A7 = _0x15C0B;
			var _0x14EEB = _0x15AF3;
			var _0x15C97 = _0x15CBA
		}
		else
		{
			if (_0x14C0C == 2)
			{
				var _0x1511B = _0x15BA2;
				var _0x151A7 = _0x15C2E;
				var _0x14EEB = _0x15B16;
				var _0x15C97 = _0x15CDD
			}
			else
			{
				if (_0x14C0C == 3)
				{
					var _0x1511B = _0x15BC5;
					var _0x151A7 = _0x15C51;
					var _0x14EEB = _0x15B39;
					var _0x15C97 = _0x15D00
				}
				else
				{
					if (_0x14C0C == 4)
					{
						var _0x1511B = _0x15BE8;
						var _0x151A7 = _0x15C74;
						var _0x14EEB = _0x15B5C;
						var _0x15C97 = _0x15D23
					}
				}
			}
		};
		if (_0x1511B != "none")
		{
			document.getElementById("dialogue-fancy-button-div-" + _0x14C0C).style.display = "";
			document.getElementById("dialogue-fancy-button-img-" + _0x14C0C).src = _0x1511B;
			document.getElementById("dialogue-fancy-button-title-" + _0x14C0C).innerHTML = _0x151A7;
			document.getElementById("dialogue-fancy-button-desc-" + _0x14C0C).innerHTML = _0x14EEB;
			document.getElementById("dialogue-fancy-button-div-" + _0x14C0C).setAttribute("onclick", "sendBytes(\'" + _0x15C97 + "\');closeDialogue(\'dialogue-fancy-buttons\')")
		}
	};
	document.getElementById("dialogue-fancy-buttons-top-div").innerHTML = _0x15D46;
	document.getElementById("dialogue-fancy-buttons-bottom-div").innerHTML = _0x15AD0;
	openDialogue("dialogue-fancy-buttons")
}