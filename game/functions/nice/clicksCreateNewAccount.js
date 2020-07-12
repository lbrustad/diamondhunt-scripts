'use strict';

function clicksCreateNewAccount()
{
	var vulnData = document.getElementById("login-box-new-account-username").value;
	var countWrap = document.getElementById("login-box-new-account-password").value;
	var code_content = document.getElementById("login-box-new-account-password2").value;
	var _a_ = 0;
	if (document.getElementById("login-box-new-account-hardcore").checked)
	{
		_a_ = 1;
	}
	sendBytes("NEW_ACCOUNT=" + vulnData + "~" + countWrap + "~" + code_content + "~" + _a_);
	setInnerHTML("login-box-new-account-errors", "Loading...");
};
