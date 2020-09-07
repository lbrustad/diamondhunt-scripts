/**
 * getImage extracted from ../../deobfuscated/bundle.js at line 2836-2848
 *
 * If this file doesn't contain a function, there is an error in ../raw/getImage.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getImage(_0x4CAF, _0x5398)
{
	if (global_ImageCache[_0x5398] != null)
	{
		if (global_ImageCache[_0x5398].url == _0x4CAF)
		{
			return global_ImageCache[_0x5398].obj
		}
	};
	var _0x537B = new ImageObject(_0x4CAF);
	global_ImageCache[_0x5398] = _0x537B;
	return _0x537B.obj
}