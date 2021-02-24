/**
 * resetHeroNerfs extracted from ../../deobfuscated/bundle.js at line 17879-17904
 *
 * If this file doesn't contain a function, there is an error in ../raw/resetHeroNerfs.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function resetHeroNerfs()
{
	var _0x19B12 = .heroDebuffPosion;
	var _0x1511B = .images / poison.png;
	var _0x19AA9 = .Poisoned;
	var _0x19AEF = [false];
	var _0x15049 = document.getElementById("combat-fight-hero-nerfs");
	var _0x15A44 = "";
	for (var _0x14C0C = 0; _0x14C0C < _0x19B12.length; _0x14C0C++)
	{
		var _0x14D47 = _0x19B12[_0x14C0C];
		var _0x19ACC = _0x19AEF[_0x14C0C];
		var _0x14EEB = _0x19AA9[_0x14C0C];
		if (getItem(_0x19B12[_0x14C0C]) > 0)
		{
			_0x15A44 += "<div style=\'float:right;border:1px solid grey;background-color:#222211;padding:5px; margin:5px;\'>";
			_0x15A44 += "<img src=\'" + _0x1511B + "\' class=\'img-40\' / > " + _0x19AA9;
			if (_0x19AEF[_0x14C0C])
			{
				_0x15A44 += " <span style=\'color:grey\'>" + getItem(_0x19B12[_0x14C0C] + "Timer") + "</span>"
			};
			_0x15A44 += "</div> "
		}
	};
	_0x15049.innerHTML = _0x15A44
}