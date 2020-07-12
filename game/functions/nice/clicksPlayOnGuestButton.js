'use strict';

function clicksPlayOnGuestButton()
{
	document.getElementById("login-box-connected-guest").style.display = "none";
	document.getElementById("login-box-loading").style.display = "";
	sendBytes("NEW_GUEST");
};
