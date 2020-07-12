/**
 * refreshTreeImage extracted from ../../deobfuscated/bundle.js at line 11735-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTreeImage.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTreeImage(_0x1CF3E)
{
	var _0x1E112 = getItemString("tree" + _0x1CF3E);
	if (getItem("treeUnlocked" + _0x1CF3E) == 1)
	{
		if (_0x1E112 == "none")
		{
			document.getElementById("tree-section-img-" + _0x1CF3E).src = "images/tree_none.png"
		}
		else
		{
			document.getElementById("tree-section-img-" + _0x1CF3E).src = "images/" + _0x1E112 + getItem("treeStage" + _0x1CF3E) + ".png"
		}
	}
}