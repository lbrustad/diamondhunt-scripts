/**
 * clicksPuzzleChestOne extracted from ../../deobfuscated/bundle.js at line 5693-5715
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksPuzzleChestOne.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksPuzzleChestOne(_0x4178)
{
	var _0x4A4E = _0x4178.split("-");
	if (puzzleChest1_lastSelected[0] != -1 || puzzleChest1_lastSelected[1] != -1)
	{
		var _0x4AFC = document.getElementById("td-puzzleChest1_" + puzzleChest1_lastSelected[0] + "-" + puzzleChest1_lastSelected[1]);
		var _0x4AA5 = document.getElementById("td-puzzleChest1_" + _0x4A4E[0] + "-" + _0x4A4E[1]);
		var _0x4ADF = _0x4AFC.getElementsByTagName("img")[0];
		var _0x4A88 = _0x4AA5.getElementsByTagName("img")[0];
		var _0x4AC2 = _0x4ADF.src;
		var _0x4A6B = _0x4A88.src;
		_0x4ADF.src = _0x4A6B;
		_0x4A88.src = _0x4AC2;
		puzzleChest1_lastSelected = [-1, -1];
		_0x4AFC.style.border = "1px solid grey";
		_0x4AA5.style.border = "1px solid grey"
	}
	else
	{
		puzzleChest1_lastSelected = _0x4A4E;
		document.getElementById("td-puzzleChest1_" + puzzleChest1_lastSelected[0] + "-" + puzzleChest1_lastSelected[1]).style.border = "1px solid green"
	}
}