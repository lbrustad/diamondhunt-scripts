/**
 * onKeyUpWildInputDialogue extracted from ../../deobfuscated/bundle.js at line 6788-6834
 *
 * If this file doesn't contain a function, there is an error in ../raw/onKeyUpWildInputDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function onKeyUpWildInputDialogue(_0x1DA9E, _0x1DAAC, _0x1CE0A, _0x1CE18, _0x1DABA)
{
	var _0x1DAE4 = (_0x1DA9E[0] == "xp_icon");
	document.getElementById("dialogue-wild-htmlboxes-area");
	var _0x1CC4A = "";
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1DAAC.length; _0x1C6B6++)
	{
		var _0x1D128 = "html-box-check-or-check";
		var _0x1DAC8 = _0x1DAAC[_0x1C6B6] * _0x1DABA;
		var _0x1DAD6 = formatNumber(_0x1DAC8);
		if (_0x1DAC8 == 0)
		{
			_0x1DAD6 = "???"
		};
		if (_0x1DA9E[_0x1C6B6] == "magicXp")
		{
			_0x1CC4A += "<div style=\'border:1px solid purple;display:inline-block;background-color:#ff99cc;font-size:16pt\' class=" + _0x1D128 + ">";
			_0x1CC4A += "<img src=\'images/" + "magicSkill" + ".png\' class=\'img-50\' /> +" + formatNumber(_0x1DAD6) + " XP";
			_0x1CC4A += "</div>"
		}
		else
		{
			_0x1CC4A += "<div class=" + _0x1D128 + ">";
			_0x1CC4A += "<img src=\'images/" + _0x1DA9E[_0x1C6B6] + ".png\' class=\'img-50\' /> +" + formatNumber(_0x1DAD6);
			_0x1CC4A += "</div>"
		}
	};
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CE0A.length; _0x1C6B6++)
	{
		var _0x1D128 = "html-box-check-or-x";
		var _0x1D144 = "<img src=\'images/x.png\' class=\'img-20\' />";
		var _0x1D152 = _0x1CE18[_0x1C6B6] * _0x1DABA;
		if (_0x1DAE4 && _0x1CE0A[_0x1C6B6] == "stardust")
		{
			_0x1D152 = _0x1CE18[_0x1C6B6] * _0x1DAAC[0] * _0x1DABA
		};
		if (getItem(_0x1CE0A[_0x1C6B6]) >= _0x1D152)
		{
			_0x1D144 = "<img src=\'images/check.png\' class=\'img-20\' />";
			_0x1D128 = "html-box-check-or-check"
		};
		_0x1CC4A += "<div class=" + _0x1D128 + ">";
		_0x1CC4A += "<img src=\'images/" + _0x1CE0A[_0x1C6B6] + ".png\' class=\'img-50\' /> " + formatNumber(_0x1D152) + " " + _0x1D144;
		_0x1CC4A += "</div>"
	};
	document.getElementById("dialogue-wild-htmlboxes-area").innerHTML = _0x1CC4A
}