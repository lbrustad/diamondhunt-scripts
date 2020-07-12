/**
 * unlockPlotPatch extracted from ../../deobfuscated/bundle.js at line 11713-11721
 *
 * If this file doesn't contain a function, there is an error in ../raw/unlockPlotPatch.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function unlockPlotPatch(_0x1E334)
{
	if (document.getElementById("plot-section-img-" + _0x1E334).src == "images/tree_locked.png")
	{
		document.getElementById("plot-section-img-" + _0x1E334).src = "images/tree_none.png"
	};
	document.getElementById("plot-section-" + _0x1E334).classList.remove("plot-section-locked");
	refreshPlotImage(_0x1E334)
}