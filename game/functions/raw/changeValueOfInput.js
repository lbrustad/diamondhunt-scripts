/**
 * changeValueOfInput extracted from ../../deobfuscated/bundle.js at line 10773-10810
 *
 * If this file doesn't contain a function, there is an error in ../raw/changeValueOfInput.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changeValueOfInput(_0x15EC7, _0x15EEA, _0x15E5E, _0x15E3B, _0x15E81)
{
	var _0x15DF5 = 0;
	var _0x15EA4 = [];
	for (var _0x14C0C = 0; _0x14C0C < _0x15EC7.length; _0x14C0C++)
	{
		_0x15EA4[_0x14C0C] = parseInt(getItem(_0x15EC7[_0x14C0C]) / _0x15EEA[_0x14C0C])
	};
	_0x15DF5 = Math.min.apply(Math, _0x15EA4);
	switch (_0x15E3B)
	{
	case "ONE":
		document.getElementById(_0x15E5E).value = 1;
		break;
	case "25%":
		document.getElementById(_0x15E5E).value = parseInt(_0x15DF5 * 0.25);
		break;
	case "50%":
		document.getElementById(_0x15E5E).value = parseInt(_0x15DF5 * 0.50);
		break;
	case "ALL":
		document.getElementById(_0x15E5E).value = _0x15DF5;
		break
	};
	if (_0x15DF5 > _0x15E81)
	{
		document.getElementById(_0x15E5E).value = _0x15E81;
		switch (_0x15E3B)
		{
		case "25%":
			document.getElementById(_0x15E5E).value = parseInt(_0x15E81 * 0.25);
			break;
		case "50%":
			document.getElementById(_0x15E5E).value = parseInt(_0x15E81 * 0.50);
			break
		}
	}
}