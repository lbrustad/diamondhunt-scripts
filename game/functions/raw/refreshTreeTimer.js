/**
 * refreshTreeTimer extracted from ../../deobfuscated/bundle.js at line 16299-16318
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshTreeTimer.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshTreeTimer(_0x47ED)
{
	if (getItemString("treeUnlocked" + _0x47ED) == 1)
	{
		var _0x738A = getItem("treeTimer" + _0x47ED);
		var _0x6CF8 = document.getElementById("tree-secton-timer-" + _0x47ED);
		switch (_0x738A)
		{
		case 1:
			_0x6CF8.innerHTML = "READY";
			break;
		case 0:
			_0x6CF8.innerHTML = "";
			break;
		default:
			_0x6CF8.innerHTML = formatTime(_0x738A);
			break
		}
	}
}