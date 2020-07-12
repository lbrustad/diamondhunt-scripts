'use strict';

function logout()
{
	localStorage.removeItem("auto_login_token");
	window.location.reload();
};
