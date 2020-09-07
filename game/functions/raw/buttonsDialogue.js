/**
 * buttonsDialogue extracted from ../../deobfuscated/bundle.js at line 14558-14647
 *
 * If this file doesn't contain a function, there is an error in ../raw/buttonsDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function buttonsDialogue(_0x42B7, _0x42D4, _0x42F1, _0x430E, _0x432B, _0x4348, _0x4365, _0x4382, _0x4243, _0x4260, _0x427D, _0x429A, _0x43BC, _0x43D9, _0x43F6, _0x4413, _0x4430, _0x4226)
{
	if (_0x42B7 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-1").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-1").style.display = ""
	};
	if (_0x42D4 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-2").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-2").style.display = ""
	};
	if (_0x42F1 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-3").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-3").style.display = ""
	};
	if (_0x430E == "none")
	{
		document.getElementById("dialogue-fancy-button-div-4").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-4").style.display = ""
	};
	for (var _0x3607 = 1; _0x3607 <= 4; _0x3607++)
	{
		var _0x3A1B = window["btnImage" + _0x3607];
		var _0x3A8F = window["btnTitle" + _0x3607];
		var _0x384B = window["btnDesc" + _0x3607];
		var _0x439F = window["cmd" + _0x3607];
		if (_0x3607 == 1)
		{
			var _0x3A1B = _0x42B7;
			var _0x3A8F = _0x432B;
			var _0x384B = _0x4243;
			var _0x439F = _0x43BC
		}
		else
		{
			if (_0x3607 == 2)
			{
				var _0x3A1B = _0x42D4;
				var _0x3A8F = _0x4348;
				var _0x384B = _0x4260;
				var _0x439F = _0x43D9
			}
			else
			{
				if (_0x3607 == 3)
				{
					var _0x3A1B = _0x42F1;
					var _0x3A8F = _0x4365;
					var _0x384B = _0x427D;
					var _0x439F = _0x43F6
				}
				else
				{
					if (_0x3607 == 4)
					{
						var _0x3A1B = _0x430E;
						var _0x3A8F = _0x4382;
						var _0x384B = _0x429A;
						var _0x439F = _0x4413
					}
				}
			}
		};
		if (_0x3A1B != "none")
		{
			document.getElementById("dialogue-fancy-button-div-" + _0x3607).style.display = "";
			document.getElementById("dialogue-fancy-button-img-" + _0x3607).src = _0x3A1B;
			document.getElementById("dialogue-fancy-button-title-" + _0x3607).innerHTML = _0x3A8F;
			document.getElementById("dialogue-fancy-button-desc-" + _0x3607).innerHTML = _0x384B;
			document.getElementById("dialogue-fancy-button-div-" + _0x3607).setAttribute("onclick", "sendBytes(\'" + _0x439F + "\');closeDialogue(\'dialogue-fancy-buttons\')")
		}
	};
	document.getElementById("dialogue-fancy-buttons-top-div").innerHTML = _0x4430;
	document.getElementById("dialogue-fancy-buttons-bottom-div").innerHTML = _0x4226;
	openDialogue("dialogue-fancy-buttons")
}