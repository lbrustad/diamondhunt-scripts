/**
 * setItems extracted from ../../deobfuscated/bundle.js at line 1216-1273
 *
 * If this file doesn't contain a function, there is an error in ../raw/setItems.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function setItems(_0x1C750)
{
	clientSetItesmTick++;
	var _0x1C75E = _0x1C750.split("~");
	var _0x1E2A8 = [];
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6++)
	{
		var _0x1C83E = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1E2B6 = _0x1C75E[_0x1C6B6];
		var _0x1E2D2 = getItem(_0x1C83E);
		setItem(_0x1C83E, _0x1E2B6);
		if (_0x1E2D2 != _0x1E2B6 || clientSetItesmTick <= 3)
		{
			_0x1E2A8.push(_0x1C83E)
		};
		if (document.getElementById("item-box-" + _0x1C83E) !== null)
		{
			if (getItem(_0x1C83E, false) > 0)
			{
				if (document.getElementById("item-box-" + _0x1C83E).style.display == "none")
				{
					document.getElementById("item-box-" + _0x1C83E).style.display = ""
				}
			}
			else
			{
				if (document.getElementById("item-box-" + _0x1C83E).style.display != "none")
				{
					document.getElementById("item-box-" + _0x1C83E).style.display = "none"
				}
			}
		};
		var _0x1E29A = document.getElementsByTagName("item-" + _0x1C83E);
		for (var _0x1E2C4 = 0; _0x1E2C4 < _0x1E29A.length; _0x1E2C4++)
		{
			if (_0x1E29A[_0x1E2C4].hasAttribute("type"))
			{
				if (_0x1E29A[_0x1E2C4].getAttribute("type") == "timer")
				{
					_0x1E29A[_0x1E2C4].innerHTML = formatTime(_0x1E2B6)
				};
				if (_0x1E29A[_0x1E2C4].getAttribute("type") == "number")
				{
					_0x1E29A[_0x1E2C4].innerHTML = formatNumber(_0x1E2B6)
				}
			}
			else
			{
				_0x1E29A[_0x1E2C4].innerHTML = _0x1E2B6
			}
		}
	};
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1E2A8.length; _0x1C6B6++)
	{
		manageChangedItem(_0x1E2A8[_0x1C6B6])
	}
}