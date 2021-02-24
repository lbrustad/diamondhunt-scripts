/**
 * convertStringToURL extracted from ../../deobfuscated/bundle.js at line 1750-1758
 *
 * If this file doesn't contain a function, there is an error in ../raw/convertStringToURL.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function convertStringToURL(_0x14C52)
{
	if (!_0x14C52.startsWith("http"))
	{
		_0x14C52 = "http://" + _0x14C52
	};
	var _0x16908 = "<a onclick=\'return clicksLink();\' href=\'" + _0x14C52 + "\' target=\'_blank\'>" + _0x14C52 + "</a>";
	return _0x16908
}