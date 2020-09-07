/**
 * convertNumberWithLetrtsKMBToNumber extracted from ../../deobfuscated/bundle.js at line 5098-5119
 *
 * If this file doesn't contain a function, there is an error in ../raw/convertNumberWithLetrtsKMBToNumber.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function convertNumberWithLetrtsKMBToNumber(_0x3811)
{
	if ((_0x3811 + "").indexOf("k") != -1 || (_0x3811 + "").indexOf("K") != -1)
	{
		_0x3811 = _0x3811.toUpperCase();
		_0x3811 = _0x3811.replace("K", "");
		_0x3811 = _0x3811 * 1000
	};
	if ((_0x3811 + "").indexOf("m") != -1 || (_0x3811 + "").indexOf("M") != -1)
	{
		_0x3811 = _0x3811.toUpperCase();
		_0x3811 = _0x3811.replace("M", "");
		_0x3811 = _0x3811 * 1000000
	};
	if ((_0x3811 + "").indexOf("b") != -1 || (_0x3811 + "").indexOf("B") != -1)
	{
		_0x3811 = _0x3811.toUpperCase();
		_0x3811 = _0x3811.replace("B", "");
		_0x3811 = _0x3811 * 1000000000
	};
	return _0x3811
}