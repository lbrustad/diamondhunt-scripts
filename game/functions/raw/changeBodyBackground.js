/**
 * changeBodyBackground extracted from ../../deobfuscated/bundle.js at line 10649-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/changeBodyBackground.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changeBodyBackground(_0x1C8AE)
{
	if (_0x1C8AE == "none")
	{
		resetBodyBackground()
	}
	else
	{
		document.getElementById("body").style.backgroundImage = "url(\'" + _0x1C8AE + "\')"
	}
}