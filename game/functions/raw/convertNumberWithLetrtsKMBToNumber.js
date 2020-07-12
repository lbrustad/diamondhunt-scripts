/**
 * convertNumberWithLetrtsKMBToNumber extracted from ../../deobfuscated/bundle.js at line 4012-4033
 *
 * If this file doesn't contain a function, there is an error in ../raw/convertNumberWithLetrtsKMBToNumber.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function convertNumberWithLetrtsKMBToNumber(_0x1C7B2)
{
	if ((_0x1C7B2 + "").indexOf("k") != -1 || (_0x1C7B2 + "").indexOf("K") != -1)
	{
		_0x1C7B2 = _0x1C7B2.toUpperCase();
		_0x1C7B2 = _0x1C7B2.replace("K", "");
		_0x1C7B2 = _0x1C7B2 * 1000
	};
	if ((_0x1C7B2 + "").indexOf("m") != -1 || (_0x1C7B2 + "").indexOf("M") != -1)
	{
		_0x1C7B2 = _0x1C7B2.toUpperCase();
		_0x1C7B2 = _0x1C7B2.replace("M", "");
		_0x1C7B2 = _0x1C7B2 * 1000000
	};
	if ((_0x1C7B2 + "").indexOf("b") != -1 || (_0x1C7B2 + "").indexOf("B") != -1)
	{
		_0x1C7B2 = _0x1C7B2.toUpperCase();
		_0x1C7B2 = _0x1C7B2.replace("B", "");
		_0x1C7B2 = _0x1C7B2 * 1000000000
	};
	return _0x1C7B2
}