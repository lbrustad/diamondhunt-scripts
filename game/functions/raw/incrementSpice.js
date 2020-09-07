/**
 * incrementSpice extracted from ../../deobfuscated/bundle.js at line 8608-8626
 *
 * If this file doesn't contain a function, there is an error in ../raw/incrementSpice.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function incrementSpice(_0x3729, _0x446A)
{
	var _0x5877 = document.getElementById("dialogue-spices-" + _0x3729);
	var _0x585A = parseInt(_0x5877.innerHTML);
	_0x585A += _0x446A;
	if (_0x585A > 4)
	{
		_0x585A = 4
	};
	if (_0x585A < 0)
	{
		_0x585A = 0
	};
	if (_0x585A > getItem(_0x3729 + "Spices"))
	{
		return
	};
	_0x5877.innerHTML = _0x585A
}