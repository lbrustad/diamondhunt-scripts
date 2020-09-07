/**
 * openDialogueOverride extracted from ../../deobfuscated/bundle.js at line 5957-5971
 *
 * If this file doesn't contain a function, there is an error in ../raw/openDialogueOverride.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openDialogueOverride(_0x4B70, _0x6666)
{
	if (_0x6666 == "medium")
	{
		document.getElementById(_0x4B70).style.minWidth = "400px";
		document.getElementById(_0x4B70).style.left = "38%"
	};
	if (_0x6666 == "large")
	{
		document.getElementById(_0x4B70).style.minWidth = "700px";
		document.getElementById(_0x4B70).style.left = "30%"
	};
	document.getElementById(_0x4B70).style.top = (scrollY + 20) + "px";
	document.getElementById(_0x4B70).style.display = ""
}