/**
 * getServerWithLeastPeople extracted from ../../deobfuscated/bundle.js at line 6-31
 *
 * If this file doesn't contain a function, there is an error in ../raw/getServerWithLeastPeople.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getServerWithLeastPeople()
{
	var _0x566D = 0;
	var _0x568A = 10000000;
	for (var _0x3607 = 0; _0x3607 <= 100; _0x3607++)
	{
		if (servers_information[_0x3607] == null)
		{
			break
		};
		var _0x56A7 = servers_information[_0x3607][0];
		var _0x56E1 = servers_information[_0x3607][1];
		var _0x56C4 = servers_information[_0x3607][2];
		var _0x5650 = servers_information[_0x3607][3];
		if (_0x56C4 == 1 || _0x56E1 == 0)
		{
			continue
		};
		if (_0x568A > _0x5650)
		{
			_0x566D = _0x56A7;
			_0x568A = _0x5650
		}
	};
	return _0x566D
}