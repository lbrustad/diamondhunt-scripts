/**
 * changeValueOfInput extracted from ../../deobfuscated/bundle.js at line 6861-6885
 *
 * If this file doesn't contain a function, there is an error in ../raw/changeValueOfInput.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changeValueOfInput(_0x1CE0A, _0x1CE18, _0x1CDEE, _0x1CDE0)
{
	var _0x1CDC4 = 0;
	var _0x1CDFC = [];
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CE0A.length; _0x1C6B6++)
	{
		_0x1CDFC[_0x1C6B6] = parseInt(getItem(_0x1CE0A[_0x1C6B6]) / _0x1CE18[_0x1C6B6])
	};
	_0x1CDC4 = Math.min.apply(Math, _0x1CDFC);
	switch (_0x1CDE0)
	{
	case "ONE":
		document.getElementById(_0x1CDEE).value = 1;
		break;
	case "25%":
		document.getElementById(_0x1CDEE).value = parseInt(_0x1CDC4 * 0.25);
		break;
	case "50%":
		document.getElementById(_0x1CDEE).value = parseInt(_0x1CDC4 * 0.50);
		break;
	case "ALL":
		document.getElementById(_0x1CDEE).value = _0x1CDC4;
		break
	}
}