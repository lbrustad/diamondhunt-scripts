/**
 * openDialogueOverride extracted from ../../deobfuscated/bundle.js at line 4586-4600
 *
 * If this file doesn't contain a function, there is an error in ../raw/openDialogueOverride.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openDialogueOverride(_0x1D048, _0x1DB70)
{
	if (_0x1DB70 == "medium")
	{
		document.getElementById(_0x1D048).style.minWidth = "400px";
		document.getElementById(_0x1D048).style.left = "38%"
	};
	if (_0x1DB70 == "large")
	{
		document.getElementById(_0x1D048).style.minWidth = "700px";
		document.getElementById(_0x1D048).style.left = "30%"
	};
	document.getElementById(_0x1D048).style.top = (scrollY + 20) + "px";
	document.getElementById(_0x1D048).style.display = ""
}