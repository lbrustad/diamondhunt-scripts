/**
 * objects_loadSeeds extracted from ../../deobfuscated/bundle.js at line 3652-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/objects_loadSeeds.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function objects_loadSeeds(data)
{
	var _0x1D6E6 = null;
	var _0x1C75E = data.split("~");
	var _0x1D48C = 0;
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6 += 0)
	{
		var _0x1D1EC = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1CB40 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1DA04 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D9DA = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1CBCC = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1DA12 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D9E8 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D9F6 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1C7CE = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		_0x1D6E6 = new Seed(_0x1D1EC, _0x1CB40, _0x1DA04, _0x1D9DA, _0x1CBCC, _0x1DA12, _0x1D9E8, _0x1D9F6, _0x1C7CE);
		global_seedMap[_0x1D1EC] = _0x1D6E6;
		global_seedMap[_0x1D48C] = _0x1D6E6;
		_0x1D48C++
	}
}