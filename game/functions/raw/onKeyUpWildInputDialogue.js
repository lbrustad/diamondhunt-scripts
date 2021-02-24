/**
 * onKeyUpWildInputDialogue extracted from ../../deobfuscated/bundle.js at line 10695-10741
 *
 * If this file doesn't contain a function, there is an error in ../raw/onKeyUpWildInputDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function onKeyUpWildInputDialogue(_0x18555, _0x18578, _0x15EC7, _0x15EEA, _0x1859B)
{
	var _0x18604 = (_0x18555[0] == "xp_icon");
	document.getElementById("dialogue-wild-htmlboxes-area");
	var _0x15A44 = "";
	for (var _0x14C0C = 0; _0x14C0C < _0x18578.length; _0x14C0C++)
	{
		var _0x169B7 = "html-box-check-or-check";
		var _0x185BE = _0x18578[_0x14C0C] * _0x1859B;
		var _0x185E1 = formatNumber(_0x185BE);
		if (_0x185BE == 0)
		{
			_0x185E1 = "???"
		};
		if (_0x18555[_0x14C0C] == "magicXp")
		{
			_0x15A44 += "<div style=\'border:1px solid purple;display:inline-block;background-color:#ff99cc;font-size:16pt\' class=" + _0x169B7 + ">";
			_0x15A44 += "<img src=\'images/" + "magicSkill" + ".png\' class=\'img-50\' /> +" + formatNumber(_0x185E1) + " XP";
			_0x15A44 += "</div>"
		}
		else
		{
			_0x15A44 += "<div class=" + _0x169B7 + ">";
			_0x15A44 += "<img src=\'images/" + _0x18555[_0x14C0C] + ".png\' class=\'img-50\' /> +" + formatNumber(_0x185E1);
			_0x15A44 += "</div>"
		}
	};
	for (var _0x14C0C = 0; _0x14C0C < _0x15EC7.length; _0x14C0C++)
	{
		var _0x169B7 = "html-box-check-or-x";
		var _0x169FD = "<img src=\'images/x.png\' class=\'img-20\' />";
		var _0x16A20 = _0x15EEA[_0x14C0C] * _0x1859B;
		if (_0x18604 && _0x15EC7[_0x14C0C] == "stardust")
		{
			_0x16A20 = _0x15EEA[_0x14C0C] * _0x18578[0] * _0x1859B
		};
		if (getItem(_0x15EC7[_0x14C0C]) >= _0x16A20)
		{
			_0x169FD = "<img src=\'images/check.png\' class=\'img-20\' />";
			_0x169B7 = "html-box-check-or-check"
		};
		_0x15A44 += "<div class=" + _0x169B7 + ">";
		_0x15A44 += "<img src=\'images/" + _0x15EC7[_0x14C0C] + ".png\' class=\'img-50\' /> " + formatNumber(_0x16A20) + " " + _0x169FD;
		_0x15A44 += "</div>"
	};
	document.getElementById("dialogue-wild-htmlboxes-area").innerHTML = _0x15A44
}