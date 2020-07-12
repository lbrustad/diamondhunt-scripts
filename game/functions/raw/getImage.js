/**
 * getImage extracted from ../../deobfuscated/bundle.js at line 2194-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/getImage.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getImage(_0x1D0E2, _0x1D3E4)
{
	if (global_ImageCache[_0x1D3E4] != null)
	{
		if (global_ImageCache[_0x1D3E4].url == _0x1D0E2)
		{
			return global_ImageCache[_0x1D3E4].obj
		}
	};
	var _0x1D3D6 = new ImageObject(_0x1D0E2);
	global_ImageCache[_0x1D3E4] = _0x1D3D6;
	return _0x1D3D6.obj
}