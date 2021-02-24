/**
 * changePassword extracted from ../../deobfuscated/bundle.js at line 6860-6875
 *
 * If this file doesn't contain a function, there is an error in ../raw/changePassword.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changePassword()
{
	document.getElementById("dialogue-profile-guest-to-user-password-password").value = "";
	document.getElementById("dialogue-profile-guest-to-user-password-password2").value = "";
	if (getItemString("username").startsWith("guest"))
	{
		confirmDialogue("images/warning.png", "Guest accounts must set a username.", "Change Username", "Cancel", "JS_CHANGE_USERNAME")
	}
	else
	{
		document.getElementById("dialogue-profile-guest-to-user-password-errors").innerHTML = "";
		document.getElementById("dialogue-profile-guest-to-user-password-errors").style.display = "none";
		document.getElementById("change-username-tr").style.display = "none";
		openDialogue("dialogue-profile-guest-to-user-password")
	}
}