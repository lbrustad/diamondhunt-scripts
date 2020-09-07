/**
 * minimizeTopBar extracted from ../../deobfuscated/bundle.js at line 2789-2803
 *
 * If this file doesn't contain a function, there is an error in ../raw/minimizeTopBar.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function minimizeTopBar(_0x44A4)
{
	if (_0x44A4)
	{
		document.getElementById("table-top-main-items").style.display = "none";
		document.getElementById("maximize-btn").style.display = "";
		document.getElementById("minimize-btn").style.display = "none"
	}
	else
	{
		document.getElementById("table-top-main-items").style.display = "";
		document.getElementById("maximize-btn").style.display = "none";
		document.getElementById("minimize-btn").style.display = ""
	}
}