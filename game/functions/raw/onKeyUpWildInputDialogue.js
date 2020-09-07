/**
 * onKeyUpWildInputDialogue extracted from ../../deobfuscated/bundle.js at line 8924-8970
 *
 * If this file doesn't contain a function, there is an error in ../raw/onKeyUpWildInputDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function onKeyUpWildInputDialogue(_0x62C6, _0x62E3, _0x456F, _0x458C, _0x6300)
{
	var _0x6357 = (_0x62C6[0] == "xp_icon");
	document.getElementById("dialogue-wild-htmlboxes-area");
	var _0x41B2 = "";
	for (var _0x3607 = 0; _0x3607 < _0x62E3.length; _0x3607++)
	{
		var _0x4D40 = "html-box-check-or-check";
		var _0x631D = _0x62E3[_0x3607] * _0x6300;
		var _0x633A = formatNumber(_0x631D);
		if (_0x631D == 0)
		{
			_0x633A = "???"
		};
		if (_0x62C6[_0x3607] == "magicXp")
		{
			_0x41B2 += "<div style=\'border:1px solid purple;display:inline-block;background-color:#ff99cc;font-size:16pt\' class=" + _0x4D40 + ">";
			_0x41B2 += "<img src=\'images/" + "magicSkill" + ".png\' class=\'img-50\' /> +" + formatNumber(_0x633A) + " XP";
			_0x41B2 += "</div>"
		}
		else
		{
			_0x41B2 += "<div class=" + _0x4D40 + ">";
			_0x41B2 += "<img src=\'images/" + _0x62C6[_0x3607] + ".png\' class=\'img-50\' /> +" + formatNumber(_0x633A);
			_0x41B2 += "</div>"
		}
	};
	for (var _0x3607 = 0; _0x3607 < _0x456F.length; _0x3607++)
	{
		var _0x4D40 = "html-box-check-or-x";
		var _0x4D7A = "<img src=\'images/x.png\' class=\'img-20\' />";
		var _0x4D97 = _0x458C[_0x3607] * _0x6300;
		if (_0x6357 && _0x456F[_0x3607] == "stardust")
		{
			_0x4D97 = _0x458C[_0x3607] * _0x62E3[0] * _0x6300
		};
		if (getItem(_0x456F[_0x3607]) >= _0x4D97)
		{
			_0x4D7A = "<img src=\'images/check.png\' class=\'img-20\' />";
			_0x4D40 = "html-box-check-or-check"
		};
		_0x41B2 += "<div class=" + _0x4D40 + ">";
		_0x41B2 += "<img src=\'images/" + _0x456F[_0x3607] + ".png\' class=\'img-50\' /> " + formatNumber(_0x4D97) + " " + _0x4D7A;
		_0x41B2 += "</div>"
	};
	document.getElementById("dialogue-wild-htmlboxes-area").innerHTML = _0x41B2
}