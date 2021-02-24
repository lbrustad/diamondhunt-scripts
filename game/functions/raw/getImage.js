/**
 * getImage extracted from ../../deobfuscated/bundle.js at line 3466-3478
 *
 * If this file doesn't contain a function, there is an error in ../raw/getImage.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getImage(_0x16908, _0x1713C)
{
	if (global_ImageCache[_0x1713C] != null)
	{
		if (global_ImageCache[_0x1713C].url == _0x16908)
		{
			return global_ImageCache[_0x1713C].obj
		}
	};
	var _0x17119 = new ImageObject(_0x16908);
	global_ImageCache[_0x1713C] = _0x17119;
	return _0x17119.obj
}