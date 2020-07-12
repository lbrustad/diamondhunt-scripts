/**
 * clicksLoginAccount extracted from ../../deobfuscated/bundle.js at line 2177-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksLoginAccount.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksLoginAccount()
{
	var _0x1CF84 = document.getElementById("login-box-login-username").value;
	var _0x1CF76 = document.getElementById("login-box-login-password").value;
	sendBytes("LOGIN=" + _0x1CF84 + "~" + _0x1CF76);
	setInnerHTML("login-box-new-account-errors", "Loading...")
}