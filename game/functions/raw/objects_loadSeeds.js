/**
 * objects_loadSeeds extracted from ../../deobfuscated/bundle.js at line 4588-4618
 *
 * If this file doesn't contain a function, there is an error in ../raw/objects_loadSeeds.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function objects_loadSeeds(_0x3746)
{
	var _0x5A64 = null;
	var _0x3763 = _0x3746.split("~");
	var _0x554B = 0;
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607 += 0)
	{
		var _0x4ED6 = _0x3763[_0x3607];
		_0x3607++;
		var _0x3F8B = _0x3763[_0x3607];
		_0x3607++;
		var _0x6187 = _0x3763[_0x3607];
		_0x3607++;
		var _0x6130 = _0x3763[_0x3607];
		_0x3607++;
		var _0x40AD = _0x3763[_0x3607];
		_0x3607++;
		var _0x61A4 = _0x3763[_0x3607];
		_0x3607++;
		var _0x614D = _0x3763[_0x3607];
		_0x3607++;
		var _0x616A = _0x3763[_0x3607];
		_0x3607++;
		var _0x384B = _0x3763[_0x3607];
		_0x3607++;
		_0x5A64 = new Seed(_0x4ED6, _0x3F8B, _0x6187, _0x6130, _0x40AD, _0x61A4, _0x614D, _0x616A, _0x384B);
		global_seedMap[_0x4ED6] = _0x5A64;
		global_seedMap[_0x554B] = _0x5A64;
		_0x554B++
	}
}