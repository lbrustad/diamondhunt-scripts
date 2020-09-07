/**
 * lootDialogue extracted from ../../deobfuscated/bundle.js at line 10182-10205
 *
 * If this file doesn't contain a function, there is an error in ../raw/lootDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function lootDialogue(_0x3746)
{
	var _0x3763 = _0x3746.split("~");
	var _0x3A8F = _0x3763[0];
	var _0x5D73 = _0x3763[1];
	var _0x3AAC = "<h1 style=\'text-align:center;\'>" + _0x3A8F + "</h1>";
	for (var _0x3607 = 1; _0x3607 < _0x3763.length - 1; _0x3607++)
	{
		var _0x5D90 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5DAD = _0x3763[_0x3607];
		_0x3607++;
		var _0x5D39 = _0x3763[_0x3607];
		_0x3607++;
		var _0x370C = _0x3763[_0x3607];
		_0x3AAC += "<span class=\'loot-span\' style=\'background-color:" + _0x5D39 + ";border:1px solid " + _0x370C + "\'><img src=\'" + _0x5D90 + "\' class=\'img-50\' /> " + _0x5DAD + "</span>"
	};
	var _0x5D56 = _0x3763[_0x3763.length - 1];
	if (_0x5D56 == "none")
	{
		_0x5D56 = ""
	};
	confirmDialogue("none", _0x3AAC, "Collect", "", _0x5D56)
}