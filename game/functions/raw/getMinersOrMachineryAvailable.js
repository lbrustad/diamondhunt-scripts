/**
 * getMinersOrMachineryAvailable extracted from ../../deobfuscated/bundle.js at line 1147-1158
 *
 * If this file doesn't contain a function, there is an error in ../raw/getMinersOrMachineryAvailable.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getMinersOrMachineryAvailable(_0x4121)
{
	var _0x44C1 = 0;
	for (var _0x3607 = 0; _0x3607 < getItem(_0x4121); _0x3607++)
	{
		if (getItemString(_0x4121 + "Allocation" + _0x3607) == "none")
		{
			_0x44C1++
		}
	};
	return _0x44C1
}