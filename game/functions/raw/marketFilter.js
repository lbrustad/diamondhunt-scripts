/**
 * marketFilter extracted from ../../deobfuscated/bundle.js at line 12830-12866
 *
 * If this file doesn't contain a function, there is an error in ../raw/marketFilter.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function marketFilter(_0x1C7B2, _0x1D994)
{
	_0x1C7B2 = _0x1C7B2.toLowerCase();
	var _0x1D9B0 = document.getElementById("market-table");
	var _0x1D9A2 = _0x1D9B0.getElementsByTagName("tr");
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D9A2.length; _0x1C6B6++)
	{
		_0x1D9A2[_0x1C6B6].style.display = "";
		var _0x1D1EC = _0x1D9A2[_0x1C6B6].id.split("-")[2];
		if (_0x1D1EC != null)
		{
			_0x1D1EC = getItemName(_0x1D1EC).toLowerCase();
			if (_0x1D994)
			{
				if (_0x1D1EC != _0x1C7B2)
				{
					_0x1D9A2[_0x1C6B6].style.display = "none"
				}
			}
			else
			{
				if (!_0x1D1EC.includes(_0x1C7B2.trim()))
				{
					_0x1D9A2[_0x1C6B6].style.display = "none"
				}
			}
		}
	};
	if (_0x1C7B2.length > 0)
	{
		document.getElementById("market-filter-x").style.display = ""
	}
	else
	{
		document.getElementById("market-filter-x").style.display = "none"
	}
}