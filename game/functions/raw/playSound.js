/**
 * playSound extracted from ../../deobfuscated/bundle.js at line 2216-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/playSound.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function playSound(_0x1D0E2)
{
	if (global_SoundCache[_0x1D0E2] != null)
	{
		return global_SoundCache[_0x1D0E2].obj.play()
	};
	var _0x1DD14 = new SoundObject(_0x1D0E2);
	global_SoundCache[_0x1D0E2] = _0x1DD14;
	return _0x1DD14.obj.play()
}