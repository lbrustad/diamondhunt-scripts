/**
 * refreshTreeTimer extracted from ../../deobfuscated/bundle.js at line 11768-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTreeTimer.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTreeTimer(_0x1CF3E)
{
	if (getItemString("treeUnlocked" + _0x1CF3E) == 1)
	{
		var _0x1E13C = getItem("treeTimer" + _0x1CF3E);
		var _0x1DE1E = document.getElementById("tree-secton-timer-" + _0x1CF3E);
		switch (_0x1E13C)
		{
		case 1:
			_0x1DE1E.innerHTML = "READY";
			break;
		case 0:
			_0x1DE1E.innerHTML = "";
			break;
		default:
			_0x1DE1E.innerHTML = formatTime(_0x1E13C);
			break
		}
	}
}