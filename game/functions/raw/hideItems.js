/**
 * hideItems extracted from ../../deobfuscated/bundle.js at line 1900-1958
 *
 * If this file doesn't contain a function, there is an error in ../raw/hideItems.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function hideItems(_0x14DB0)
{
	clientSetItesmTick++;
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x176B4 = [];
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C++)
	{
		var _0x15003 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x176D7 = _0x14DD3[_0x14C0C];
		_0x176D7 = 0;
		var _0x1771D = getItem(_0x15003);
		setItem(_0x15003, _0x176D7);
		if (_0x1771D != _0x176D7 || clientSetItesmTick <= 3)
		{
			_0x176B4.push(_0x15003)
		};
		if (document.getElementById("item-box-" + _0x15003) !== null)
		{
			if (getItem(_0x15003, false) > 0)
			{
				if (document.getElementById("item-box-" + _0x15003).style.display == "none")
				{
					document.getElementById("item-box-" + _0x15003).style.display = ""
				}
			}
			else
			{
				if (document.getElementById("item-box-" + _0x15003).style.display != "none")
				{
					document.getElementById("item-box-" + _0x15003).style.display = "none"
				}
			}
		};
		var _0x17691 = document.getElementsByTagName("item-" + _0x15003);
		for (var _0x176FA = 0; _0x176FA < _0x17691.length; _0x176FA++)
		{
			if (_0x17691[_0x176FA].hasAttribute("type"))
			{
				if (_0x17691[_0x176FA].getAttribute("type") == "timer")
				{
					_0x17691[_0x176FA].innerHTML = formatTime(_0x176D7)
				};
				if (_0x17691[_0x176FA].getAttribute("type") == "number")
				{
					_0x17691[_0x176FA].innerHTML = formatNumber(_0x176D7)
				}
			}
			else
			{
				_0x17691[_0x176FA].innerHTML = _0x176D7
			}
		}
	};
	for (var _0x14C0C = 0; _0x14C0C < _0x176B4.length; _0x14C0C++)
	{
		manageChangedItem(_0x176B4[_0x14C0C])
	}
}