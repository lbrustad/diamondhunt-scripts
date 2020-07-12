'use strict';

function changeUsername()
{
	document.getElementById("dialogue-profile-guest-to-user-password-username").value = "";
	document.getElementById("dialogue-profile-guest-to-user-password-password").value = "";
	document.getElementById("dialogue-profile-guest-to-user-password-password2").value = "";
	document.getElementById("dialogue-profile-guest-to-user-password-errors").innerHTML = "";
	document.getElementById("dialogue-profile-guest-to-user-password-errors").style.display = "none";
	openDialogue("dialogue-profile-guest-to-user-password");
};
