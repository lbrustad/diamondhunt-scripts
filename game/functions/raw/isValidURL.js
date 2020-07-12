/**
 * isValidURL extracted from ../../deobfuscated/bundle.js at line 1132-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/isValidURL.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function isValidURL(_0x1D73A)
{
	if (_0x1D73A.indexOf("http") >= 0 || _0x1D73A.indexOf("www.") >= 0 || _0x1D73A.indexOf(".com") >= 0 || _0x1D73A.indexOf(".ca") >= 0 || _0x1D73A.indexOf(".co") >= 0 || _0x1D73A.indexOf(".net") >= 0 || _0x1D73A.indexOf(".us") >= 0)
	{
		if (_0x1D73A.indexOf("%22") >= 0 || _0x1D73A.indexOf("%27") >= 0 || _0x1D73A.indexOf("%3E") >= 0 || _0x1D73A.indexOf("%3C") >= 0 || _0x1D73A.indexOf("&#62;") >= 0 || _0x1D73A.indexOf("&#60;") >= 0 || _0x1D73A.indexOf(";") >= 0 || _0x1D73A.indexOf("~") >= 0 || _0x1D73A.indexOf("\"") >= 0 || _0x1D73A.indexOf("<") >= 0 || _0x1D73A.indexOf(">") >= 0 || _0x1D73A.indexOf("javascript:") >= 0 || _0x1D73A.indexOf("window") >= 0 || _0x1D73A.indexOf("document") >= 0 || _0x1D73A.indexOf("cookie") >= 0)
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