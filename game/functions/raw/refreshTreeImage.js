/**
 * refreshTreeImage extracted from ../../deobfuscated/bundle.js at line 16266-16280
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTreeImage.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTreeImage(_0x47ED)
{
	var _0x7350 = getItemString("tree" + _0x47ED);
	if (getItem("treeUnlocked" + _0x47ED) == 1)
	{
		if (_0x7350 == "none")
		{
			document.getElementById("tree-section-img-" + _0x47ED).src = "images/tree_none.png"
		}
		else
		{
			document.getElementById("tree-section-img-" + _0x47ED).src = "images/" + _0x7350 + getItem("treeStage" + _0x47ED) + ".png"
		}
	}
}