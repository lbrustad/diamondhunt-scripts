/**
 * setMaxOreThatCanSmelt extracted from ../../deobfuscated/bundle.js at line 7727-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/setMaxOreThatCanSmelt.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function setMaxOreThatCanSmelt(_0x1C91E, _0x1D34A)
{
	var _0x1E2E0 = getItem(_0x1C91E);
	if (getItem(_0x1C91E) >= getItem("furnaceCapacity"))
	{
		_0x1E2E0 = getItem("furnaceCapacity")
	};
	var _0x1E2EE = _0x1E2E0 * getOilCost(_0x1C91E);
	if (getItem("oil") < _0x1E2EE)
	{
		_0x1E2E0 = getItem("oil") / getOilCost(_0x1C91E)
	};
	document.getElementById("dialogue-furnace-smelt-amount").value = parseInt(_0x1E2E0)
}