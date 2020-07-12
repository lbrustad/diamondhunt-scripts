/**
 * clicksPlayOnGuestButton extracted from ../../deobfuscated/bundle.js at line 2095-2100
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksPlayOnGuestButton.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksPlayOnGuestButton()
{
	document.getElementById("login-box-connected-guest").style.display = "none";
	document.getElementById("login-box-loading").style.display = "";
	sendBytes("NEW_GUEST")
}