/**
 * confirmDialogue extracted from ../../deobfuscated/bundle.js at line 5973-6020
 *
 * If this file doesn't contain a function, there is an error in ../raw/confirmDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function confirmDialogue(_0x3AC9, _0x4BC7, _0x4B8D, _0x4BAA, _0x4BE4)
{
	if (_0x3AC9 == "" || _0x3AC9 == "none" || _0x3AC9 == null)
	{
		document.getElementById("dialogue-confirm-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm-img").src = _0x3AC9;
		document.getElementById("dialogue-confirm-img").style.display = ""
	};
	document.getElementById("dialogue-confirm-text").innerHTML = _0x4BC7;
	document.getElementById("dialogue-confirm").style.display = "";
	document.getElementById("dialogue-confirm").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm-yes").innerHTML = _0x4B8D;
	document.getElementById("dialogue-confirm-no").innerHTML = _0x4BAA;
	if (_0x4BAA == "")
	{
		document.getElementById("dialogue-confirm-no").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm-no").style.display = ""
	};
	if (_0x4BE4 == "")
	{
		document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "closeDialogue(\'dialogue-confirm\')")
	}
	else
	{
		if (_0x4BE4.startsWith("JS"))
		{
			switch (_0x4BE4)
			{
			case "JS_CHANGE_USERNAME":
				document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "changeUsername();closeDialogue(\'dialogue-confirm\');");
				break;
			case "JS_CONVERT_GUEST_SUCCESS":
				document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "logout();");
				break
			}
		}
		else
		{
			document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "sendBytes(\'" + _0x4BE4 + "\');closeDialogue(\'dialogue-confirm\');")
		}
	}
}