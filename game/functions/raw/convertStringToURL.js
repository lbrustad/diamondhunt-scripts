/**
 * convertStringToURL extracted from ../../deobfuscated/bundle.js at line 1463-1471
 *
 * If this file doesn't contain a function, there is an error in ../raw/convertStringToURL.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function convertStringToURL(_0x3641)
{
	if (!_0x3641.startsWith("http"))
	{
		_0x3641 = "http://" + _0x3641
	};
	var _0x4CAF = "<a onclick=\'return clicksLink();\' href=\'" + _0x3641 + "\' target=\'_blank\'>" + _0x3641 + "</a>";
	return _0x4CAF
}