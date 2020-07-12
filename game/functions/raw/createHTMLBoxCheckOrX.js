/**
 * createHTMLBoxCheckOrX extracted from ../../deobfuscated/bundle.js at line 7762-7776
 *
 * If this file doesn't contain a function, there is an error in ../raw/createHTMLBoxCheckOrX.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function createHTMLBoxCheckOrX(_0x1C83E, _0x1D152, _0x1D136)
{
	var _0x1D128 = "html-box-check-or-x";
	var _0x1D144 = "<img src=\'images/x.png\' class=\'img-30\' />";
	if (getItem(_0x1C83E) >= _0x1D152)
	{
		_0x1D144 = "<img src=\'images/check.png\' class=\'img-30\' />";
		_0x1D128 = "html-box-check-or-check"
	};
	var _0x1CC4A = "";
	_0x1CC4A += "<div class=" + _0x1D128 + ">";
	_0x1CC4A += "<img src=\'images/" + _0x1C83E + ".png\' class=\'img-50\' /> " + formatNumber(_0x1D152) + " " + _0x1D136 + _0x1D144;
	_0x1CC4A += "</div>";
	return _0x1CC4A
}