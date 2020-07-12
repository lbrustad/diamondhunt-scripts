'use strict';

function clicksLoginButton()
{
	document.getElementById("login-box-connected-guest").style.display = "none";
	document.getElementById("login-box-login-form").style.display = "";
	document.getElementById("login-box-login-username").focus();
};
