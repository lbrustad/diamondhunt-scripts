/**
 * convertNumberWithLetrtsKMBToNumber extracted from ../../deobfuscated/bundle.js at line 5834-5855
 *
 * If this file doesn't contain a function, there is an error in ../raw/convertNumberWithLetrtsKMBToNumber.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function convertNumberWithLetrtsKMBToNumber(_0x14EA5)
{
	if ((_0x14EA5 + "").indexOf("k") != -1 || (_0x14EA5 + "").indexOf("K") != -1)
	{
		_0x14EA5 = _0x14EA5.toUpperCase();
		_0x14EA5 = _0x14EA5.replace("K", "");
		_0x14EA5 = _0x14EA5 * 1000
	};
	if ((_0x14EA5 + "").indexOf("m") != -1 || (_0x14EA5 + "").indexOf("M") != -1)
	{
		_0x14EA5 = _0x14EA5.toUpperCase();
		_0x14EA5 = _0x14EA5.replace("M", "");
		_0x14EA5 = _0x14EA5 * 1000000
	};
	if ((_0x14EA5 + "").indexOf("b") != -1 || (_0x14EA5 + "").indexOf("B") != -1)
	{
		_0x14EA5 = _0x14EA5.toUpperCase();
		_0x14EA5 = _0x14EA5.replace("B", "");
		_0x14EA5 = _0x14EA5 * 1000000000
	};
	return _0x14EA5
}