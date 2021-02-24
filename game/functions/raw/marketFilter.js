/**
 * marketFilter extracted from ../../deobfuscated/bundle.js at line 21530-21566
 *
 * If this file doesn't contain a function, there is an error in ../raw/marketFilter.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function marketFilter(_0x14EA5, _0x1820D)
{
	_0x14EA5 = _0x14EA5.toLowerCase();
	var _0x18253 = document.getElementById("market-table");
	var _0x18230 = _0x18253.getElementsByTagName("tr");
	for (var _0x14C0C = 0; _0x14C0C < _0x18230.length; _0x14C0C++)
	{
		_0x18230[_0x14C0C].style.display = "";
		var _0x14D47 = _0x18230[_0x14C0C].id.split("-")[2];
		if (_0x14D47 != null)
		{
			_0x14D47 = getItemName(_0x14D47).toLowerCase();
			if (_0x1820D)
			{
				if (_0x14D47 != _0x14EA5)
				{
					_0x18230[_0x14C0C].style.display = "none"
				}
			}
			else
			{
				if (!_0x14D47.includes(_0x14EA5.trim()))
				{
					_0x18230[_0x14C0C].style.display = "none"
				}
			}
		}
	};
	if (_0x14EA5.length > 0)
	{
		document.getElementById("market-filter-x").style.display = ""
	}
	else
	{
		document.getElementById("market-filter-x").style.display = "none"
	}
}