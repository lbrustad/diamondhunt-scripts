/**
 * openDialogueOverride extracted from ../../deobfuscated/bundle.js at line 6934-6948
 *
 * If this file doesn't contain a function, there is an error in ../raw/openDialogueOverride.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openDialogueOverride(_0x16787, _0x189B5)
{
	if (_0x189B5 == "medium")
	{
		document.getElementById(_0x16787).style.minWidth = "400px";
		document.getElementById(_0x16787).style.left = "38%"
	};
	if (_0x189B5 == "large")
	{
		document.getElementById(_0x16787).style.minWidth = "700px";
		document.getElementById(_0x16787).style.left = "30%"
	};
	document.getElementById(_0x16787).style.top = (scrollY + 20) + "px";
	document.getElementById(_0x16787).style.display = ""
}