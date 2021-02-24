/**
 * playSound extracted from ../../deobfuscated/bundle.js at line 3488-3497
 *
 * If this file doesn't contain a function, there is an error in ../raw/playSound.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function playSound(_0x16908)
{
	if (global_SoundCache[_0x16908] != null)
	{
		return global_SoundCache[_0x16908].obj.play()
	};
	var _0x18DCF = new SoundObject(_0x16908);
	global_SoundCache[_0x16908] = _0x18DCF;
	return _0x18DCF.obj.play()
}