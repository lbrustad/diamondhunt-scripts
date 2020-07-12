/**
 * changedAutoLogin extracted from ../../deobfuscated/bundle.js at line 4515-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/changedAutoLogin.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changedAutoLogin(_0x1CDB6)
{
	if (_0x1CDB6)
	{
		if (localStorage.getItem("auto-login") != null)
		{
			localStorage.removeItem("auto-login")
		}
	}
	else
	{
		localStorage.setItem("auto-login", "off")
	}
}