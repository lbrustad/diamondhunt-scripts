/**
 * setItems extracted from ../../deobfuscated/bundle.js at line 1544-1601
 *
 * If this file doesn't contain a function, there is an error in ../raw/setItems.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function setItems(_0x3746)
{
	clientSetItesmTick++;
	var _0x3763 = _0x3746.split("~");
	var _0x767C = [];
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607++)
	{
		var _0x3933 = _0x3763[_0x3607];
		_0x3607++;
		var _0x7699 = _0x3763[_0x3607];
		var _0x76D3 = getItem(_0x3933);
		setItem(_0x3933, _0x7699);
		if (_0x76D3 != _0x7699 || clientSetItesmTick <= 3)
		{
			_0x767C.push(_0x3933)
		};
		if (document.getElementById("item-box-" + _0x3933) !== null)
		{
			if (getItem(_0x3933, false) > 0)
			{
				if (document.getElementById("item-box-" + _0x3933).style.display == "none")
				{
					document.getElementById("item-box-" + _0x3933).style.display = ""
				}
			}
			else
			{
				if (document.getElementById("item-box-" + _0x3933).style.display != "none")
				{
					document.getElementById("item-box-" + _0x3933).style.display = "none"
				}
			}
		};
		var _0x765F = document.getElementsByTagName("item-" + _0x3933);
		for (var _0x76B6 = 0; _0x76B6 < _0x765F.length; _0x76B6++)
		{
			if (_0x765F[_0x76B6].hasAttribute("type"))
			{
				if (_0x765F[_0x76B6].getAttribute("type") == "timer")
				{
					_0x765F[_0x76B6].innerHTML = formatTime(_0x7699)
				};
				if (_0x765F[_0x76B6].getAttribute("type") == "number")
				{
					_0x765F[_0x76B6].innerHTML = formatNumber(_0x7699)
				}
			}
			else
			{
				_0x765F[_0x76B6].innerHTML = _0x7699
			}
		}
	};
	for (var _0x3607 = 0; _0x3607 < _0x767C.length; _0x3607++)
	{
		manageChangedItem(_0x767C[_0x3607])
	}
}