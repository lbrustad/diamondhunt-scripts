'use strict';

function unlockPlotPatch(FONT_SUFFIX)
{
	if (document.getElementById("plot-section-img-" + FONT_SUFFIX).src == "images/tree_locked.png")
	{
		document.getElementById("plot-section-img-" + FONT_SUFFIX).src = "images/tree_none.png";
	}
	document.getElementById("plot-section-" + FONT_SUFFIX).classList.remove("plot-section-locked");
	refreshPlotImage(FONT_SUFFIX);
};
