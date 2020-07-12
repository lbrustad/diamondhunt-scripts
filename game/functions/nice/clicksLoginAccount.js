'use strict';

function clicksLoginAccount()
{
	var vulnData = document.getElementById("login-box-login-username").value;
	var countWrap = document.getElementById("login-box-login-password").value;
	sendBytes("LOGIN=" + vulnData + "~" + countWrap);
	setInnerHTML("login-box-new-account-errors", "Loading...");
};
