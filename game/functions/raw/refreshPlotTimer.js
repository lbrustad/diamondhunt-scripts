/**
 * refreshPlotTimer extracted from ../../deobfuscated/bundle.js at line 11777-11796
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshPlotTimer.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshPlotTimer(_0x1CF3E)
{
	if (getItemString("plotUnlocked" + _0x1CF3E) == 1)
	{
		var _0x1DE2C = getItem("plotTimer" + _0x1CF3E);
		var _0x1DE1E = document.getElementById("plot-secton-timer-" + _0x1CF3E);
		switch (_0x1DE2C)
		{
		case 1:
			_0x1DE1E.innerHTML = "READY";
			break;
		case 0:
			_0x1DE1E.innerHTML = "";
			break;
		default:
			_0x1DE1E.innerHTML = formatTime(_0x1DE2C);
			break
		}
	}
}