/**
 * isValidURL extracted from ../../deobfuscated/bundle.js at line 1447-1461
 *
 * If this file doesn't contain a function, there is an error in ../raw/isValidURL.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function isValidURL(_0x5B12)
{
	if (_0x5B12.indexOf("http") >= 0 || _0x5B12.indexOf("www.") >= 0 || _0x5B12.indexOf(".com") >= 0 || _0x5B12.indexOf(".ca") >= 0 || _0x5B12.indexOf(".co") >= 0 || _0x5B12.indexOf(".net") >= 0 || _0x5B12.indexOf(".us") >= 0)
	{
		if (_0x5B12.indexOf("%22") >= 0 || _0x5B12.indexOf("%27") >= 0 || _0x5B12.indexOf("%3E") >= 0 || _0x5B12.indexOf("%3C") >= 0 || _0x5B12.indexOf("&#62;") >= 0 || _0x5B12.indexOf("&#60;") >= 0 || _0x5B12.indexOf(";") >= 0 || _0x5B12.indexOf("~") >= 0 || _0x5B12.indexOf("\"") >= 0 || _0x5B12.indexOf("<") >= 0 || _0x5B12.indexOf(">") >= 0 || _0x5B12.indexOf("javascript:") >= 0 || _0x5B12.indexOf("window") >= 0 || _0x5B12.indexOf("document") >= 0 || _0x5B12.indexOf("cookie") >= 0)
		{
			return false
		};
		return true
	}
	else
	{
		return false
	}
}