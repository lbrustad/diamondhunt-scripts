/**
 * changeValueOfInput extracted from ../../deobfuscated/bundle.js at line 9002-9039
 *
 * If this file doesn't contain a function, there is an error in ../raw/changeValueOfInput.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changeValueOfInput(_0x456F, _0x458C, _0x4518, _0x44FB, _0x4535)
{
	var _0x44C1 = 0;
	var _0x4552 = [];
	for (var _0x3607 = 0; _0x3607 < _0x456F.length; _0x3607++)
	{
		_0x4552[_0x3607] = parseInt(getItem(_0x456F[_0x3607]) / _0x458C[_0x3607])
	};
	_0x44C1 = Math.min.apply(Math, _0x4552);
	switch (_0x44FB)
	{
	case "ONE":
		document.getElementById(_0x4518).value = 1;
		break;
	case "25%":
		document.getElementById(_0x4518).value = parseInt(_0x44C1 * 0.25);
		break;
	case "50%":
		document.getElementById(_0x4518).value = parseInt(_0x44C1 * 0.50);
		break;
	case "ALL":
		document.getElementById(_0x4518).value = _0x44C1;
		break
	};
	if (_0x44C1 > _0x4535)
	{
		document.getElementById(_0x4518).value = _0x4535;
		switch (_0x44FB)
		{
		case "25%":
			document.getElementById(_0x4518).value = parseInt(_0x4535 * 0.25);
			break;
		case "50%":
			document.getElementById(_0x4518).value = parseInt(_0x4535 * 0.50);
			break
		}
	}
}