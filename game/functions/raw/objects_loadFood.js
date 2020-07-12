/**
 * objects_loadFood extracted from ../../deobfuscated/bundle.js at line 3516-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/objects_loadFood.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function objects_loadFood(data)
{
	var _0x1D1A6 = null;
	var _0x1C75E = data.split("~");
	var _0x1D48C = 0;
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6 += 0)
	{
		var _0x1D286 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D24E = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D278 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D26A = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1CBCC = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D25C = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1C7CE = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		_0x1D1A6 = new Food(_0x1D286, _0x1D24E, _0x1D278, _0x1D26A, _0x1CBCC, _0x1D25C, _0x1C7CE);
		global_foodMap[_0x1D286] = _0x1D1A6;
		global_foodMap[_0x1D24E] = _0x1D1A6;
		global_foodMap[_0x1D48C] = _0x1D1A6;
		_0x1D48C++
	}
}