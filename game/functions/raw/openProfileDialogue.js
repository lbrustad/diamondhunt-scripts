/**
 * openProfileDialogue extracted from ../../deobfuscated/bundle.js at line 6764-6807
 *
 * If this file doesn't contain a function, there is an error in ../raw/openProfileDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openProfileDialogue()
{
	document.getElementById("dialogue-profile-username").innerHTML = getItemString("username");
	if (getItemString("username").startsWith("guest"))
	{
		document.getElementById("dialogue-profile-username-option").innerHTML = "<span class=\'change-username-label\'>(change)</span>";
		document.getElementById("dialogue-profile-password").innerHTML = "<span style=\'color:brown\'>None set</span>"
	};
	document.getElementById("dialogue-profile-password-option").innerHTML = "<span onclick=\'closeDialogue(\"dialogue-profile\");changePassword()\' class=\'change-username-label\'>(change)</span>";
	if (localStorage.getItem("auto-login") == null)
	{
		document.getElementById("dialogue-profile-autologin-option-checkbox").checked = true
	}
	else
	{
		if (localStorage.getItem("auto-login") == "off")
		{
			document.getElementById("dialogue-profile-autologin-option-checkbox").checked = false
		}
	};
	if (localStorage.getItem("titletrigger") == null)
	{
		document.getElementById("dialogue-profile-titletrigger-option-checkbox").checked = true
	}
	else
	{
		if (localStorage.getItem("titletrigger") == "off")
		{
			document.getElementById("dialogue-profile-titletrigger-option-checkbox").checked = false
		}
	};
	if (localStorage.getItem("notificationSound") == null)
	{
		document.getElementById("dialogue-profile-notificationSound-option-checkbox").checked = false
	}
	else
	{
		if (localStorage.getItem("notificationSound") == "off")
		{
			document.getElementById("dialogue-profile-notificationSound-option-checkbox").checked = true
		}
	};
	openDialogueOverride("dialogue-profile", "large")
}