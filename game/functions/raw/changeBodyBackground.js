/**
 * changeBodyBackground extracted from ../../deobfuscated/bundle.js at line 14656-14666
 *
 * If this file doesn't contain a function, there is an error in ../raw/changeBodyBackground.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changeBodyBackground(_0x3A1B)
{
	if (_0x3A1B == "none")
	{
		resetBodyBackground()
	}
	else
	{
		document.getElementById("body").style.backgroundImage = "url(\'" + _0x3A1B + "\')"
	}
}