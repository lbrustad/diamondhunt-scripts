/**
 * clicksLoginAccount extracted from ../../deobfuscated/bundle.js at line 3449-3455
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksLoginAccount.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksLoginAccount()
{
	var _0x16511 = document.getElementById("login-box-login-username").value;
	var _0x164EE = document.getElementById("login-box-login-password").value;
	sendBytes("LOGIN=" + _0x16511 + "~" + _0x164EE);
	setInnerHTML("login-box-new-account-errors", "Loading...")
}