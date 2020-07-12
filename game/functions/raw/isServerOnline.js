/**
 * isServerOnline extracted from ../../deobfuscated/bundle.js at line 79-93
 *
 * If this file doesn't contain a function, there is an error in ../raw/isServerOnline.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function isServerOnline(_0x1D534)
{
	for (var _0x1C6B6 = 0; _0x1C6B6 <= 100; _0x1C6B6++)
	{
		if (servers_information[_0x1C6B6] == null)
		{
			break
		};
		if (servers_information[_0x1C6B6][0] == _0x1D534 && servers_information[_0x1C6B6][1] == 1)
		{
			return true
		}
	};
	return false
}