/**
 * isServerOnline extracted from ../../deobfuscated/bundle.js at line 82-96
 *
 * If this file doesn't contain a function, there is an error in ../raw/isServerOnline.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function isServerOnline(_0x56A7)
{
	for (var _0x3607 = 0; _0x3607 <= 100; _0x3607++)
	{
		if (servers_information[_0x3607] == null)
		{
			break
		};
		if (servers_information[_0x3607][0] == _0x56A7 && servers_information[_0x3607][1] == 1)
		{
			return true
		}
	};
	return false
}