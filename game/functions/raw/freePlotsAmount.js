/**
 * freePlotsAmount extracted from ../../deobfuscated/bundle.js at line 6556-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/freePlotsAmount.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function freePlotsAmount()
{
	var _0x1D32E = 0;
	for (var _0x1C6B6 = 1; _0x1C6B6 <= 6; _0x1C6B6++)
	{
		if (getItem("plotUnlocked" + _0x1C6B6) == 1 && getItemString("plot" + _0x1C6B6) == "none")
		{
			_0x1D32E++
		}
	};
	return _0x1D32E
}