/**
 * refreshPlotImage extracted from ../../deobfuscated/bundle.js at line 19988-20003
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshPlotImage.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshPlotImage(_0x16327)
{
	var _0x191E9 = getItemString("plot" + _0x16327);
	if (getItem("plotUnlocked" + _0x16327) == 1)
	{
		document.getElementById("plot-section-" + _0x16327).classList.remove("tree-section-locked");
		if (_0x191E9 == "none")
		{
			document.getElementById("plot-section-img-" + _0x16327).src = "images/farm_none.png"
		}
		else
		{
			document.getElementById("plot-section-img-" + _0x16327).src = "images/" + _0x191E9 + getItem("plotStage" + _0x16327) + ".png"
		}
	}
}