/**
 * loadOnceOnLogin extracted from ../../deobfuscated/bundle.js at line 491-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/loadOnceOnLogin.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function loadOnceOnLogin()
{
	if (getItemString("username").startsWith("guest"))
	{
		document.getElementById("top-options-bar-after-username").innerHTML = " <span onclick=\'openProfileDialogue()\' class=\'change-username-label\'>(Change username)</u>"
	}
	else
	{
		document.getElementById("top-options-bar-after-username").innerHTML = " <span onclick=\'openProfileDialogue()\' class=\'change-username-label\'>(profile)</u>"
	}
}