/**
 * changedAutoLogin extracted from ../../deobfuscated/bundle.js at line 5832-5845
 *
 * If this file doesn't contain a function, there is an error in ../raw/changedAutoLogin.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changedAutoLogin(_0x44A4)
{
	if (_0x44A4)
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