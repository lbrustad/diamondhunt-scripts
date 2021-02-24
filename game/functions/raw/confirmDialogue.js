/**
 * confirmDialogue extracted from ../../deobfuscated/bundle.js at line 6950-6997
 *
 * If this file doesn't contain a function, there is an error in ../raw/confirmDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function confirmDialogue(_0x151ED, _0x167F0, _0x167AA, _0x167CD, _0x16813)
{
	if (_0x151ED == "" || _0x151ED == "none" || _0x151ED == null)
	{
		document.getElementById("dialogue-confirm-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm-img").src = _0x151ED;
		document.getElementById("dialogue-confirm-img").style.display = ""
	};
	document.getElementById("dialogue-confirm-text").innerHTML = _0x167F0;
	document.getElementById("dialogue-confirm").style.display = "";
	document.getElementById("dialogue-confirm").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm-yes").innerHTML = _0x167AA;
	document.getElementById("dialogue-confirm-no").innerHTML = _0x167CD;
	if (_0x167CD == "")
	{
		document.getElementById("dialogue-confirm-no").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm-no").style.display = ""
	};
	if (_0x16813 == "")
	{
		document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "closeDialogue(\'dialogue-confirm\')")
	}
	else
	{
		if (_0x16813.startsWith("JS"))
		{
			switch (_0x16813)
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
			document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "sendBytes(\'" + _0x16813 + "\');closeDialogue(\'dialogue-confirm\');")
		}
	}
}