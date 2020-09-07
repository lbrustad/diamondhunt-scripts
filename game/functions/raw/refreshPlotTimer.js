/**
 * refreshPlotTimer extracted from ../../deobfuscated/bundle.js at line 16320-16339
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshPlotTimer.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshPlotTimer(_0x47ED)
{
	if (getItemString("plotUnlocked" + _0x47ED) == 1)
	{
		var _0x6D15 = getItem("plotTimer" + _0x47ED);
		var _0x6CF8 = document.getElementById("plot-secton-timer-" + _0x47ED);
		switch (_0x6D15)
		{
		case 1:
			_0x6CF8.innerHTML = "READY";
			break;
		case 0:
			_0x6CF8.innerHTML = "";
			break;
		default:
			_0x6CF8.innerHTML = formatTime(_0x6D15);
			break
		}
	}
}