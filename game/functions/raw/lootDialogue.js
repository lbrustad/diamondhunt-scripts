/**
 * lootDialogue extracted from ../../deobfuscated/bundle.js at line 12346-12369
 *
 * If this file doesn't contain a function, there is an error in ../raw/lootDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function lootDialogue(_0x14DB0)
{
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x151A7 = _0x14DD3[0];
	var _0x17E7F = _0x14DD3[1];
	var _0x151CA = "<h1 style=\'text-align:center;\'>" + _0x151A7 + "</h1>";
	for (var _0x14C0C = 1; _0x14C0C < _0x14DD3.length - 1; _0x14C0C++)
	{
		var _0x17EA2 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17EC5 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17E39 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x14D6A = _0x14DD3[_0x14C0C];
		_0x151CA += "<span class=\'loot-span\' style=\'background-color:" + _0x17E39 + ";border:1px solid " + _0x14D6A + "\'><img src=\'" + _0x17EA2 + "\' class=\'img-50\' /> " + _0x17EC5 + "</span>"
	};
	var _0x17E5C = _0x14DD3[_0x14DD3.length - 1];
	if (_0x17E5C == "none")
	{
		_0x17E5C = ""
	};
	confirmDialogue("none", _0x151CA, "Collect", "", _0x17E5C)
}