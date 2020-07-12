/**
 * lootDialogue extracted from ../../deobfuscated/bundle.js at line 7791-7814
 *
 * If this file doesn't contain a function, there is an error in ../raw/lootDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function lootDialogue(_0x1C750)
{
	var _0x1C75E = _0x1C750.split("~");
	var _0x1C8E6 = _0x1C75E[0];
	var _0x1D860 = _0x1C75E[1];
	var _0x1C8F4 = "<h1 style=\'text-align:center;\'>" + _0x1C8E6 + "</h1>";
	for (var _0x1C6B6 = 1; _0x1C6B6 < _0x1C75E.length - 1; _0x1C6B6++)
	{
		var _0x1D86E = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D87C = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D844 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1C734 = _0x1C75E[_0x1C6B6];
		_0x1C8F4 += "<span class=\'loot-span\' style=\'background-color:" + _0x1D844 + ";border:1px solid " + _0x1C734 + "\'><img src=\'" + _0x1D86E + "\' class=\'img-50\' /> " + _0x1D87C + "</span>"
	};
	var _0x1D852 = _0x1C75E[_0x1C75E.length - 1];
	if (_0x1D852 == "none")
	{
		_0x1D852 = ""
	};
	confirmDialogue("none", _0x1C8F4, "Collect", "", _0x1D852)
}