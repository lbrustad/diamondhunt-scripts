'use strict';

function openProfileDialogue()
{
	document.getElementById("dialogue-profile-username").innerHTML = getItemString("username");
	if (getItemString("username").startsWith("guest"))
	{
		document.getElementById("dialogue-profile-username-option").innerHTML = "<span class='change-username-label'>(change)</span>";
		document.getElementById("dialogue-profile-password").innerHTML = "<span style='color:brown'>None set</span>";
	}
	document.getElementById("dialogue-profile-password-option").innerHTML = "<span onclick='closeDialogue(\"dialogue-profile\");changePassword()' class='change-username-label'>(change)</span>";
	if (localStorage.getItem("auto-login") == null)
	{
		document.getElementById("dialogue-profile-autologin-option-checkbox").checked = true;
	}
	else
	{
		if (localStorage.getItem("auto-login") == "off")
		{
			document.getElementById("dialogue-profile-autologin-option-checkbox").checked = false;
		}
	}
	openDialogueOverride("dialogue-profile", "large");
};
