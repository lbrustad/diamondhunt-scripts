/**
 * resetHeroNerfs extracted from ../../deobfuscated/bundle.js at line 14466-14491
 *
 * If this file doesn't contain a function, there is an error in ../raw/resetHeroNerfs.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function resetHeroNerfs()
{
	var _0x7455 = .heroDebuffPosion;
	var _0x3A1B = .images / poison.png;
	var _0x73FE = .Poisoned;
	var _0x7438 = [false];
	var _0x396D = document.getElementById("combat-fight-hero-nerfs");
	var _0x41B2 = "";
	for (var _0x3607 = 0; _0x3607 < _0x7455.length; _0x3607++)
	{
		var _0x4ED6 = _0x7455[_0x3607];
		var _0x741B = _0x7438[_0x3607];
		var _0x384B = _0x73FE[_0x3607];
		if (getItem(_0x7455[_0x3607]) > 0)
		{
			_0x41B2 += "<div style=\'float:right;border:1px solid grey;background-color:#222211;padding:5px; margin:5px;\'>";
			_0x41B2 += "<img src=\'" + _0x3A1B + "\' class=\'img-40\' / > " + _0x73FE;
			if (_0x7438[_0x3607])
			{
				_0x41B2 += " <span style=\'color:grey\'>" + getItem(_0x7455[_0x3607] + "Timer") + "</span>"
			};
			_0x41B2 += "</div> "
		}
	};
	_0x396D.innerHTML = _0x41B2
}