/**
 * confirmDialogue extracted from ../../deobfuscated/bundle.js at line 4602-4649
 *
 * If this file doesn't contain a function, there is an error in ../raw/confirmDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function confirmDialogue(_0x1C902, _0x1D072, _0x1D056, _0x1D064, _0x1D080)
{
	if (_0x1C902 == "" || _0x1C902 == "none")
	{
		document.getElementById("dialogue-confirm-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm-img").src = _0x1C902;
		document.getElementById("dialogue-confirm-img").style.display = ""
	};
	document.getElementById("dialogue-confirm-text").innerHTML = _0x1D072;
	document.getElementById("dialogue-confirm").style.display = "";
	document.getElementById("dialogue-confirm").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm-yes").innerHTML = _0x1D056;
	document.getElementById("dialogue-confirm-no").innerHTML = _0x1D064;
	if (_0x1D064 == "")
	{
		document.getElementById("dialogue-confirm-no").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm-no").style.display = ""
	};
	if (_0x1D080 == "")
	{
		document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "closeDialogue(\'dialogue-confirm\')")
	}
	else
	{
		if (_0x1D080.startsWith("JS"))
		{
			switch (_0x1D080)
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
			document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "sendBytes(\'" + _0x1D080 + "\');closeDialogue(\'dialogue-confirm\');")
		}
	}
}