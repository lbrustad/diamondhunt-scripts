/**
 * logout extracted from ../../deobfuscated/bundle.js at line 2089-2093
 *
 * If this file doesn't contain a function, there is an error in ../raw/logout.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function logout()
{
	localStorage.removeItem("auto_login_token");
	window.location.reload()
}