/**
 * isServerOnline extracted from ../../deobfuscated/bundle.js at line 82-96
 *
 * If this file doesn't contain a function, there is an error in ../raw/isServerOnline.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function isServerOnline(_0x17556)
{
	for (var _0x14C0C = 0; _0x14C0C <= 100; _0x14C0C++)
	{
		if (servers_information[_0x14C0C] == null)
		{
			break
		};
		if (servers_information[_0x14C0C][0] == _0x17556 && servers_information[_0x14C0C][1] == 1)
		{
			return true
		}
	};
	return false
}