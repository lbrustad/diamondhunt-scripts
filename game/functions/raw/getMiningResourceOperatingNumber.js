/**
 * getMiningResourceOperatingNumber extracted from ../../deobfuscated/bundle.js at line 955-966
 *
 * If this file doesn't contain a function, there is an error in ../raw/getMiningResourceOperatingNumber.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getMiningResourceOperatingNumber(_0x5568)
{
	var _0x554B = 0;
	for (var _0x3607 = 0; _0x3607 < 5; _0x3607++)
	{
		if (getItemString(_0x5568 + "Allocation" + _0x3607) != "none")
		{
			_0x554B++
		}
	};
	return _0x554B
}