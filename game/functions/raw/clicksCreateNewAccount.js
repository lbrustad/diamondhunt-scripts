/**
 * clicksCreateNewAccount extracted from ../../deobfuscated/bundle.js at line 3435-3447
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksCreateNewAccount.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksCreateNewAccount()
{
	var _0x16232 = document.getElementById("login-box-new-account-username").value;
	var _0x1620F = document.getElementById("login-box-new-account-password").value;
	var _0x161EC = document.getElementById("login-box-new-account-password2").value;
	var _0x161C9 = 0;
	if (document.getElementById("login-box-new-account-hardcore").checked)
	{
		_0x161C9 = 1
	};
	sendBytes("NEW_ACCOUNT=" + _0x16232 + "~" + _0x1620F + "~" + _0x161EC + "~" + _0x161C9);
	setInnerHTML("login-box-new-account-errors", "Loading...")
}