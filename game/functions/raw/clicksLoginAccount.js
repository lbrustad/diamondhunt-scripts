/**
 * clicksLoginAccount extracted from ../../deobfuscated/bundle.js at line 2819-2825
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksLoginAccount.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksLoginAccount()
{
	var _0x49A0 = document.getElementById("login-box-login-username").value;
	var _0x4983 = document.getElementById("login-box-login-password").value;
	sendBytes("LOGIN=" + _0x49A0 + "~" + _0x4983);
	setInnerHTML("login-box-new-account-errors", "Loading...")
}