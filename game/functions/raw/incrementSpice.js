/**
 * incrementSpice extracted from ../../deobfuscated/bundle.js at line 10365-10383
 *
 * If this file doesn't contain a function, there is an error in ../raw/incrementSpice.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function incrementSpice(_0x14D8D, _0x15D8C)
{
	var _0x17858 = document.getElementById("dialogue-spices-" + _0x14D8D);
	var _0x17835 = parseInt(_0x17858.innerHTML);
	_0x17835 += _0x15D8C;
	if (_0x17835 > 4)
	{
		_0x17835 = 4
	};
	if (_0x17835 < 0)
	{
		_0x17835 = 0
	};
	if (_0x17835 > getItem(_0x14D8D + "Spices"))
	{
		return
	};
	_0x17858.innerHTML = _0x17835
}