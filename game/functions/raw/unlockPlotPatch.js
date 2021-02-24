/**
 * unlockPlotPatch extracted from ../../deobfuscated/bundle.js at line 19962-19970
 *
 * If this file doesn't contain a function, there is an error in ../raw/unlockPlotPatch.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function unlockPlotPatch(_0x180F5)
{
	if (document.getElementById("plot-section-img-" + _0x180F5).src == "images/tree_locked.png")
	{
		document.getElementById("plot-section-img-" + _0x180F5).src = "images/tree_none.png"
	};
	document.getElementById("plot-section-" + _0x180F5).classList.remove("plot-section-locked");
	refreshPlotImage(_0x180F5)
}