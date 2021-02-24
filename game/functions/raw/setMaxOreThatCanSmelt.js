/**
 * setMaxOreThatCanSmelt extracted from ../../deobfuscated/bundle.js at line 12224-12248
 *
 * If this file doesn't contain a function, there is an error in ../raw/setMaxOreThatCanSmelt.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function setMaxOreThatCanSmelt(_0x15233, _0x16F0C)
{
	var _0x19E37 = getItem(_0x15233);
	if (getItem(_0x15233) >= getItem("furnaceCapacity"))
	{
		_0x19E37 = getItem("furnaceCapacity")
	};
	if (_0x15233 == "titanium")
	{
		var _0x19E14 = _0x19E37 * getCharcoalCost(_0x15233);
		if (getItem("charcoal") < _0x19E14)
		{
			_0x19E37 = getItem("charcoal") / getCharcoalCost(_0x15233)
		}
	}
	else
	{
		var _0x19E5A = _0x19E37 * getOilCost(_0x15233);
		if (getItem("oil") < _0x19E5A)
		{
			_0x19E37 = getItem("oil") / getOilCost(_0x15233)
		}
	};
	document.getElementById("dialogue-furnace-smelt-amount").value = parseInt(_0x19E37)
}