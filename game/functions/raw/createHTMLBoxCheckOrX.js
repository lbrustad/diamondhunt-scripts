/**
 * createHTMLBoxCheckOrX extracted from ../../deobfuscated/bundle.js at line 10142-10156
 *
 * If this file doesn't contain a function, there is an error in ../raw/createHTMLBoxCheckOrX.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function createHTMLBoxCheckOrX(_0x3933, _0x4D97, _0x4D5D)
{
	var _0x4D40 = "html-box-check-or-x";
	var _0x4D7A = "<img src=\'images/x.png\' class=\'img-30\' />";
	if (getItem(_0x3933) >= _0x4D97)
	{
		_0x4D7A = "<img src=\'images/check.png\' class=\'img-30\' />";
		_0x4D40 = "html-box-check-or-check"
	};
	var _0x41B2 = "";
	_0x41B2 += "<div class=" + _0x4D40 + ">";
	_0x41B2 += "<img src=\'images/" + _0x3933 + ".png\' class=\'img-50\' /> " + formatNumber(_0x4D97) + " " + _0x4D5D + _0x4D7A;
	_0x41B2 += "</div>";
	return _0x41B2
}