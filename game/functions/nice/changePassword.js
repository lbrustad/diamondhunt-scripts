'use strict';

function changePassword()
{
	document.getElementById("dialogue-profile-guest-to-user-password-password").value = "";
	document.getElementById("dialogue-profile-guest-to-user-password-password2").value = "";
	if (getItemString("username").startsWith("guest"))
	{
		confirmDialogue("images/warning.png", "Guest accounts must set a username.", "Change Username", "Cancel", "JS_CHANGE_USERNAME");
	}
	else
	{
		document.getElementById("dialogue-profile-guest-to-user-password-errors").innerHTML = "";
		document.getElementById("dialogue-profile-guest-to-user-password-errors").style.display = "none";
		document.getElementById("change-username-tr").style.display = "none";
		openDialogue("dialogue-profile-guest-to-user-password");
	}
};
