/**
 * getServerWithLeastPeople extracted from ../../deobfuscated/bundle.js at line 6-31
 *
 * If this file doesn't contain a function, there is an error in ../raw/getServerWithLeastPeople.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getServerWithLeastPeople()
{
	var _0x17510 = 0;
	var _0x17533 = 10000000;
	for (var _0x14C0C = 0; _0x14C0C <= 100; _0x14C0C++)
	{
		if (servers_information[_0x14C0C] == null)
		{
			break
		};
		var _0x17556 = servers_information[_0x14C0C][0];
		var _0x1759C = servers_information[_0x14C0C][1];
		var _0x17579 = servers_information[_0x14C0C][2];
		var _0x174ED = servers_information[_0x14C0C][3];
		if (_0x17579 == 1 || _0x1759C == 0)
		{
			continue
		};
		if (_0x17533 > _0x174ED)
		{
			_0x17510 = _0x17556;
			_0x17533 = _0x174ED
		}
	};
	return _0x17510
}