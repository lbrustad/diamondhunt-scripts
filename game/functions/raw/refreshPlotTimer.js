/**
 * refreshPlotTimer extracted from ../../deobfuscated/bundle.js at line 20026-20045
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshPlotTimer.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshPlotTimer(_0x16327)
{
	if (getItemString("plotUnlocked" + _0x16327) == 1)
	{
		var _0x1922F = getItem("plotTimer" + _0x16327);
		var _0x1920C = document.getElementById("plot-secton-timer-" + _0x16327);
		switch (_0x1922F)
		{
		case 1:
			_0x1920C.innerHTML = "READY";
			break;
		case 0:
			_0x1920C.innerHTML = "";
			break;
		default:
			_0x1920C.innerHTML = formatTime(_0x1922F);
			break
		}
	}
}