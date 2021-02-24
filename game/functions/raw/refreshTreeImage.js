/**
 * refreshTreeImage extracted from ../../deobfuscated/bundle.js at line 19972-19986
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTreeImage.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTreeImage(_0x16327)
{
	var _0x199D7 = getItemString("tree" + _0x16327);
	if (getItem("treeUnlocked" + _0x16327) == 1)
	{
		if (_0x199D7 == "none")
		{
			document.getElementById("tree-section-img-" + _0x16327).src = "images/tree_none.png"
		}
		else
		{
			document.getElementById("tree-section-img-" + _0x16327).src = "images/" + _0x199D7 + getItem("treeStage" + _0x16327) + ".png"
		}
	}
}