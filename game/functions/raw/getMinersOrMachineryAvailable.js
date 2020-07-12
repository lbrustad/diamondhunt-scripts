/**
 * getMinersOrMachineryAvailable extracted from ../../deobfuscated/bundle.js at line 878-889
 *
 * If this file doesn't contain a function, there is an error in ../raw/getMinersOrMachineryAvailable.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getMinersOrMachineryAvailable(_0x1CC04)
{
	var _0x1CDC4 = 0;
	for (var _0x1C6B6 = 0; _0x1C6B6 < getItem(_0x1CC04); _0x1C6B6++)
	{
		if (getItemString(_0x1CC04 + "Allocation" + _0x1C6B6) == "none")
		{
			_0x1CDC4++
		}
	};
	return _0x1CDC4
}