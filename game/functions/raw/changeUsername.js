/**
 * changeUsername extracted from ../../deobfuscated/bundle.js at line 5900-5908
 *
 * If this file doesn't contain a function, there is an error in ../raw/changeUsername.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changeUsername()
{
	document.getElementById("dialogue-profile-guest-to-user-password-username").value = "";
	document.getElementById("dialogue-profile-guest-to-user-password-password").value = "";
	document.getElementById("dialogue-profile-guest-to-user-password-password2").value = "";
	document.getElementById("dialogue-profile-guest-to-user-password-errors").innerHTML = "";
	document.getElementById("dialogue-profile-guest-to-user-password-errors").style.display = "none";
	openDialogue("dialogue-profile-guest-to-user-password")
}