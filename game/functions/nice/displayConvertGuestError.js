'use strict';

function displayConvertGuestError(canCreateDiscussions)
{
	document.getElementById("dialogue-profile-guest-to-user-password-errors").innerHTML = "<ul>" + canCreateDiscussions + "</ul>";
	document.getElementById("dialogue-profile-guest-to-user-password-errors").style.display = "";
};
