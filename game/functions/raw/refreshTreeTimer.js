/**
 * refreshTreeTimer extracted from ../../deobfuscated/bundle.js at line 20005-20024
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTreeTimer.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTreeTimer(_0x16327)
{
	if (getItemString("treeUnlocked" + _0x16327) == 1)
	{
		var _0x19A1D = getItem("treeTimer" + _0x16327);
		var _0x1920C = document.getElementById("tree-secton-timer-" + _0x16327);
		switch (_0x19A1D)
		{
		case 1:
			_0x1920C.innerHTML = "READY";
			break;
		case 0:
			_0x1920C.innerHTML = "";
			break;
		default:
			_0x1920C.innerHTML = formatTime(_0x19A1D);
			break
		}
	}
}