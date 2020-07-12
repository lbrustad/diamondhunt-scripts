/**
 * convertStringToURL extracted from ../../deobfuscated/bundle.js at line 1148-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/convertStringToURL.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function convertStringToURL(_0x1C6D2)
{
	if (!_0x1C6D2.startsWith("http"))
	{
		_0x1C6D2 = "http://" + _0x1C6D2
	};
	var _0x1D0E2 = "<a onclick=\'return clicksLink();\' href=\'" + _0x1C6D2 + "\' target=\'_blank\'>" + _0x1C6D2 + "</a>";
	return _0x1D0E2
}