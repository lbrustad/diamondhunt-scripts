'use strict';

function confirmDialogue(value, ast, name, index, item)
{
	if (value == "" || value == "none")
	{
		document.getElementById("dialogue-confirm-img").style.display = "none";
	}
	else
	{
		document.getElementById("dialogue-confirm-img").src = value;
		document.getElementById("dialogue-confirm-img").style.display = "";
	}
	document.getElementById("dialogue-confirm-text").innerHTML = ast;
	document.getElementById("dialogue-confirm").style.display = "";
	document.getElementById("dialogue-confirm").style.top = scrollY + 20 + "px";
	document.getElementById("dialogue-confirm-yes").innerHTML = name;
	document.getElementById("dialogue-confirm-no").innerHTML = index;
	if (index == "")
	{
		document.getElementById("dialogue-confirm-no").style.display = "none";
	}
	else
	{
		document.getElementById("dialogue-confirm-no").style.display = "";
	}
	if (item == "")
	{
		document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "closeDialogue('dialogue-confirm')");
	}
	else
	{
		if (item.startsWith("JS"))
		{
			switch (item)
			{
			case "JS_CHANGE_USERNAME":
				document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "changeUsername();closeDialogue('dialogue-confirm');");
				break;
			case "JS_CONVERT_GUEST_SUCCESS":
				document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "logout();");
				break;
			}
		}
		else
		{
			document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "sendBytes('" + item + "');closeDialogue('dialogue-confirm');");
		}
	}
};
