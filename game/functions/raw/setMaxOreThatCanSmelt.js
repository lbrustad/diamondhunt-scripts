/**
 * setMaxOreThatCanSmelt extracted from ../../deobfuscated/bundle.js at line 10074-10098
 *
 * If this file doesn't contain a function, there is an error in ../raw/setMaxOreThatCanSmelt.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function setMaxOreThatCanSmelt(_0x3B03, _0x51C8)
{
	var _0x770D = getItem(_0x3B03);
	if (getItem(_0x3B03) >= getItem("furnaceCapacity"))
	{
		_0x770D = getItem("furnaceCapacity")
	};
	if (_0x3B03 == "titanium")
	{
		var _0x76F0 = _0x770D * getCharcoalCost(_0x3B03);
		if (getItem("charcoal") < _0x76F0)
		{
			_0x770D = getItem("charcoal") / getCharcoalCost(_0x3B03)
		}
	}
	else
	{
		var _0x772A = _0x770D * getOilCost(_0x3B03);
		if (getItem("oil") < _0x772A)
		{
			_0x770D = getItem("oil") / getOilCost(_0x3B03)
		}
	};
	document.getElementById("dialogue-furnace-smelt-amount").value = parseInt(_0x770D)
}