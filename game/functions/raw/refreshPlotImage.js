/**
 * refreshPlotImage extracted from ../../deobfuscated/bundle.js at line 16282-16297
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshPlotImage.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshPlotImage(_0x47ED)
{
	var _0x6CDB = getItemString("plot" + _0x47ED);
	if (getItem("plotUnlocked" + _0x47ED) == 1)
	{
		document.getElementById("plot-section-" + _0x47ED).classList.remove("tree-section-locked");
		if (_0x6CDB == "none")
		{
			document.getElementById("plot-section-img-" + _0x47ED).src = "images/farm_none.png"
		}
		else
		{
			document.getElementById("plot-section-img-" + _0x47ED).src = "images/" + _0x6CDB + getItem("plotStage" + _0x47ED) + ".png"
		}
	}
}