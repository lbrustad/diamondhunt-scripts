/**
 * clicksPuzzleChestOne extracted from ../../deobfuscated/bundle.js at line 6670-6692
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksPuzzleChestOne.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksPuzzleChestOne(_0x159FE)
{
	var _0x165E3 = _0x159FE.split("-");
	if (puzzleChest1_lastSelected[0] != -1 || puzzleChest1_lastSelected[1] != -1)
	{
		var _0x166B5 = document.getElementById("td-puzzleChest1_" + puzzleChest1_lastSelected[0] + "-" + puzzleChest1_lastSelected[1]);
		var _0x1664C = document.getElementById("td-puzzleChest1_" + _0x165E3[0] + "-" + _0x165E3[1]);
		var _0x16692 = _0x166B5.getElementsByTagName("img")[0];
		var _0x16629 = _0x1664C.getElementsByTagName("img")[0];
		var _0x1666F = _0x16692.src;
		var _0x16606 = _0x16629.src;
		_0x16692.src = _0x16606;
		_0x16629.src = _0x1666F;
		puzzleChest1_lastSelected = [-1, -1];
		_0x166B5.style.border = "1px solid grey";
		_0x1664C.style.border = "1px solid grey"
	}
	else
	{
		puzzleChest1_lastSelected = _0x165E3;
		document.getElementById("td-puzzleChest1_" + puzzleChest1_lastSelected[0] + "-" + puzzleChest1_lastSelected[1]).style.border = "1px solid green"
	}
}