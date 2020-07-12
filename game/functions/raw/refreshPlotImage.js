/**
 * refreshPlotImage extracted from ../../deobfuscated/bundle.js at line 11751-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshPlotImage.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshPlotImage(_0x1CF3E)
{
	var _0x1DE10 = getItemString("plot" + _0x1CF3E);
	if (getItem("plotUnlocked" + _0x1CF3E) == 1)
	{
		document.getElementById("plot-section-" + _0x1CF3E).classList.remove("tree-section-locked");
		if (_0x1DE10 == "none")
		{
			document.getElementById("plot-section-img-" + _0x1CF3E).src = "images/farm_none.png"
		}
		else
		{
			document.getElementById("plot-section-img-" + _0x1CF3E).src = "images/" + _0x1DE10 + getItem("plotStage" + _0x1CF3E) + ".png"
		}
	}
}