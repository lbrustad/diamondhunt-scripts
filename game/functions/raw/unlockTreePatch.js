/**
 * unlockTreePatch extracted from ../../deobfuscated/bundle.js at line 16246-16254
 *
 * If this file doesn't contain a function, there is an error in ../raw/unlockTreePatch.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function unlockTreePatch(_0x47ED)
{
	if (document.getElementById("tree-section-img-" + _0x47ED).src == "images/tree_locked.png")
	{
		document.getElementById("tree-section-img-" + _0x47ED).src = "images/tree_none.png"
	};
	document.getElementById("tree-section-" + _0x47ED).classList.remove("tree-section-locked");
	refreshTreeImage(_0x47ED)
}