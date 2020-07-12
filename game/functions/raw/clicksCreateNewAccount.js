/**
 * clicksCreateNewAccount extracted from ../../deobfuscated/bundle.js at line 2150-2162
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksCreateNewAccount.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksCreateNewAccount()
{
	var _0x1CF22 = document.getElementById("login-box-new-account-username").value;
	var _0x1CF14 = document.getElementById("login-box-new-account-password").value;
	var _0x1CF06 = document.getElementById("login-box-new-account-password2").value;
	var _0x1CEF8 = 0;
	if (document.getElementById("login-box-new-account-hardcore").checked)
	{
		_0x1CEF8 = 1
	};
	sendBytes("NEW_ACCOUNT=" + _0x1CF22 + "~" + _0x1CF14 + "~" + _0x1CF06 + "~" + _0x1CEF8);
	setInnerHTML("login-box-new-account-errors", "Loading...")
}