/**
 * clicksPuzzleChestOne extracted from ../../deobfuscated/bundle.js at line 4385-4407
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksPuzzleChestOne.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksPuzzleChestOne(_0x1CC2E)
{
	var _0x1CFD8 = _0x1CC2E.split("-");
	if (puzzleChest1_lastSelected[0] != -1 || puzzleChest1_lastSelected[1] != -1)
	{
		var _0x1D02C = document.getElementById("td-puzzleChest1_" + puzzleChest1_lastSelected[0] + "-" + puzzleChest1_lastSelected[1]);
		var _0x1D002 = document.getElementById("td-puzzleChest1_" + _0x1CFD8[0] + "-" + _0x1CFD8[1]);
		var _0x1D01E = _0x1D02C.getElementsByTagName("img")[0];
		var _0x1CFF4 = _0x1D002.getElementsByTagName("img")[0];
		var _0x1D010 = _0x1D01E.src;
		var _0x1CFE6 = _0x1CFF4.src;
		_0x1D01E.src = _0x1CFE6;
		_0x1CFF4.src = _0x1D010;
		puzzleChest1_lastSelected = [-1, -1];
		_0x1D02C.style.border = "1px solid grey";
		_0x1D002.style.border = "1px solid grey"
	}
	else
	{
		puzzleChest1_lastSelected = _0x1CFD8;
		document.getElementById("td-puzzleChest1_" + puzzleChest1_lastSelected[0] + "-" + puzzleChest1_lastSelected[1]).style.border = "1px solid green"
	}
}