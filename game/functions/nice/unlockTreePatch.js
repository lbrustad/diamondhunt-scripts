'use strict';

function unlockTreePatch(FONT_SUFFIX)
{
	if (document.getElementById("tree-section-img-" + FONT_SUFFIX).src == "images/tree_locked.png")
	{
		document.getElementById("tree-section-img-" + FONT_SUFFIX).src = "images/tree_none.png";
	}
	document.getElementById("tree-section-" + FONT_SUFFIX).classList.remove("tree-section-locked");
	refreshTreeImage(FONT_SUFFIX);
};
