/**
 * getMinersOrMachineryAvailable extracted from ../../deobfuscated/bundle.js at line 1395-1406
 *
 * If this file doesn't contain a function, there is an error in ../raw/getMinersOrMachineryAvailable.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getMinersOrMachineryAvailable(_0x15995)
{
	var _0x15DF5 = 0;
	for (var _0x14C0C = 0; _0x14C0C < getItem(_0x15995); _0x14C0C++)
	{
		if (getItemString(_0x15995 + "Allocation" + _0x14C0C) == "none")
		{
			_0x15DF5++
		}
	};
	return _0x15DF5
}