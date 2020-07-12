/**
 * buttonsDialogue extracted from ../../deobfuscated/bundle.js at line 10558-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/buttonsDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function buttonsDialogue(_0x1CCC8, _0x1CCD6, _0x1CCE4, _0x1CCF2, _0x1CD00, _0x1CD0E, _0x1CD1C, _0x1CD2A, _0x1CC90, _0x1CC9E, _0x1CCAC, _0x1CCBA, _0x1CD46, _0x1CD54, _0x1CD62, _0x1CD70, _0x1CD7E, _0x1CC82)
{
	if (_0x1CCC8 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-1").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-1").style.display = ""
	};
	if (_0x1CCD6 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-2").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-2").style.display = ""
	};
	if (_0x1CCE4 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-3").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-3").style.display = ""
	};
	if (_0x1CCF2 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-4").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-4").style.display = ""
	};
	for (var _0x1C6B6 = 1; _0x1C6B6 <= 4; _0x1C6B6++)
	{
		var _0x1C8AE = window["btnImage" + _0x1C6B6];
		var _0x1C8E6 = window["btnTitle" + _0x1C6B6];
		var _0x1C7CE = window["btnDesc" + _0x1C6B6];
		var _0x1CD38 = window["cmd" + _0x1C6B6];
		if (_0x1C6B6 == 1)
		{
			var _0x1C8AE = _0x1CCC8;
			var _0x1C8E6 = _0x1CD00;
			var _0x1C7CE = _0x1CC90;
			var _0x1CD38 = _0x1CD46
		}
		else
		{
			if (_0x1C6B6 == 2)
			{
				var _0x1C8AE = _0x1CCD6;
				var _0x1C8E6 = _0x1CD0E;
				var _0x1C7CE = _0x1CC9E;
				var _0x1CD38 = _0x1CD54
			}
			else
			{
				if (_0x1C6B6 == 3)
				{
					var _0x1C8AE = _0x1CCE4;
					var _0x1C8E6 = _0x1CD1C;
					var _0x1C7CE = _0x1CCAC;
					var _0x1CD38 = _0x1CD62
				}
				else
				{
					if (_0x1C6B6 == 4)
					{
						var _0x1C8AE = _0x1CCF2;
						var _0x1C8E6 = _0x1CD2A;
						var _0x1C7CE = _0x1CCBA;
						var _0x1CD38 = _0x1CD70
					}
				}
			}
		};
		if (_0x1C8AE != "none")
		{
			document.getElementById("dialogue-fancy-button-div-" + _0x1C6B6).style.display = "";
			document.getElementById("dialogue-fancy-button-img-" + _0x1C6B6).src = _0x1C8AE;
			document.getElementById("dialogue-fancy-button-title-" + _0x1C6B6).innerHTML = _0x1C8E6;
			document.getElementById("dialogue-fancy-button-desc-" + _0x1C6B6).innerHTML = _0x1C7CE;
			document.getElementById("dialogue-fancy-button-div-" + _0x1C6B6).setAttribute("onclick", "sendBytes(\'" + _0x1CD38 + "\');closeDialogue(\'dialogue-fancy-buttons\')")
		}
	};
	document.getElementById("dialogue-fancy-buttons-top-div").innerHTML = _0x1CD7E;
	document.getElementById("dialogue-fancy-buttons-bottom-div").innerHTML = _0x1CC82;
	openDialogue("dialogue-fancy-buttons")
}