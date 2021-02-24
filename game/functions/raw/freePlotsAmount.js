/**
 * freePlotsAmount extracted from ../../deobfuscated/bundle.js at line 10415-10426
 *
 * If this file doesn't contain a function, there is an error in ../raw/freePlotsAmount.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function freePlotsAmount()
{
	var _0x16EA3 = 0;
	for (var _0x14C0C = 1; _0x14C0C <= 6; _0x14C0C++)
	{
		if (getItem("plotUnlocked" + _0x14C0C) == 1 && getItemString("plot" + _0x14C0C) == "none")
		{
			_0x16EA3++
		}
	};
	return _0x16EA3
}