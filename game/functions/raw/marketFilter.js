/**
 * marketFilter extracted from ../../deobfuscated/bundle.js at line 17780-17816
 *
 * If this file doesn't contain a function, there is an error in ../raw/marketFilter.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function marketFilter(_0x3811, _0x602B)
{
	_0x3811 = _0x3811.toLowerCase();
	var _0x6065 = document.getElementById("market-table");
	var _0x6048 = _0x6065.getElementsByTagName("tr");
	for (var _0x3607 = 0; _0x3607 < _0x6048.length; _0x3607++)
	{
		_0x6048[_0x3607].style.display = "";
		var _0x4ED6 = _0x6048[_0x3607].id.split("-")[2];
		if (_0x4ED6 != null)
		{
			_0x4ED6 = getItemName(_0x4ED6).toLowerCase();
			if (_0x602B)
			{
				if (_0x4ED6 != _0x3811)
				{
					_0x6048[_0x3607].style.display = "none"
				}
			}
			else
			{
				if (!_0x4ED6.includes(_0x3811.trim()))
				{
					_0x6048[_0x3607].style.display = "none"
				}
			}
		}
	};
	if (_0x3811.length > 0)
	{
		document.getElementById("market-filter-x").style.display = ""
	}
	else
	{
		document.getElementById("market-filter-x").style.display = "none"
	}
}