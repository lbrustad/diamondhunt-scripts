/**
 * createHTMLBoxCheckOrX extracted from ../../deobfuscated/bundle.js at line 12292-12306
 *
 * If this file doesn't contain a function, there is an error in ../raw/createHTMLBoxCheckOrX.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function createHTMLBoxCheckOrX(_0x15003, _0x16A20, _0x169DA)
{
	var _0x169B7 = "html-box-check-or-x";
	var _0x169FD = "<img src=\'images/x.png\' class=\'img-30\' />";
	if (getItem(_0x15003) >= _0x16A20)
	{
		_0x169FD = "<img src=\'images/check.png\' class=\'img-30\' />";
		_0x169B7 = "html-box-check-or-check"
	};
	var _0x15A44 = "";
	_0x15A44 += "<div class=" + _0x169B7 + ">";
	_0x15A44 += "<img src=\'images/" + _0x15003 + ".png\' class=\'img-50\' /> " + formatNumber(_0x16A20) + " " + _0x169DA + _0x169FD;
	_0x15A44 += "</div>";
	return _0x15A44
}