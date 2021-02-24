/**
 * unlockTreePatch extracted from ../../deobfuscated/bundle.js at line 19952-19960
 *
 * If this file doesn't contain a function, there is an error in ../raw/unlockTreePatch.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function unlockTreePatch(_0x16327)
{
	if (document.getElementById("tree-section-img-" + _0x16327).src == "images/tree_locked.png")
	{
		document.getElementById("tree-section-img-" + _0x16327).src = "images/tree_none.png"
	};
	document.getElementById("tree-section-" + _0x16327).classList.remove("tree-section-locked");
	refreshTreeImage(_0x16327)
}