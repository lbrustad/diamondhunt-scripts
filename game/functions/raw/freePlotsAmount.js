/**
 * freePlotsAmount extracted from ../../deobfuscated/bundle.js at line 8658-8669
 *
 * If this file doesn't contain a function, there is an error in ../raw/freePlotsAmount.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function freePlotsAmount()
{
	var _0x5171 = 0;
	for (var _0x3607 = 1; _0x3607 <= 6; _0x3607++)
	{
		if (getItem("plotUnlocked" + _0x3607) == 1 && getItemString("plot" + _0x3607) == "none")
		{
			_0x5171++
		}
	};
	return _0x5171
}