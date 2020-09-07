/**
 * clicksCreateNewAccount extracted from ../../deobfuscated/bundle.js at line 2805-2817
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksCreateNewAccount.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksCreateNewAccount()
{
	var _0x47B3 = document.getElementById("login-box-new-account-username").value;
	var _0x4796 = document.getElementById("login-box-new-account-password").value;
	var _0x4779 = document.getElementById("login-box-new-account-password2").value;
	var _0x475C = 0;
	if (document.getElementById("login-box-new-account-hardcore").checked)
	{
		_0x475C = 1
	};
	sendBytes("NEW_ACCOUNT=" + _0x47B3 + "~" + _0x4796 + "~" + _0x4779 + "~" + _0x475C);
	setInnerHTML("login-box-new-account-errors", "Loading...")
}