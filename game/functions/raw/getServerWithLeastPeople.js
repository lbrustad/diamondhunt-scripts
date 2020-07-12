/**
 * getServerWithLeastPeople extracted from ../../deobfuscated/bundle.js at line 3-28
 *
 * If this file doesn't contain a function, there is an error in ../raw/getServerWithLeastPeople.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getServerWithLeastPeople()
{
	var _0x1D518 = 0;
	var _0x1D526 = 10000000;
	for (var _0x1C6B6 = 0; _0x1C6B6 <= 100; _0x1C6B6++)
	{
		if (servers_information[_0x1C6B6] == null)
		{
			break
		};
		var _0x1D534 = servers_information[_0x1C6B6][0];
		var _0x1D550 = servers_information[_0x1C6B6][1];
		var _0x1D542 = servers_information[_0x1C6B6][2];
		var _0x1D50A = servers_information[_0x1C6B6][3];
		if (_0x1D542 == 1 || _0x1D550 == 0)
		{
			continue
		};
		if (_0x1D526 > _0x1D50A)
		{
			_0x1D518 = _0x1D534;
			_0x1D526 = _0x1D50A
		}
	};
	return _0x1D518
}