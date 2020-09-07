/**
 * playSound extracted from ../../deobfuscated/bundle.js at line 2858-2867
 *
 * If this file doesn't contain a function, there is an error in ../raw/playSound.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function playSound(_0x4CAF)
{
	if (global_SoundCache[_0x4CAF] != null)
	{
		return global_SoundCache[_0x4CAF].obj.play()
	};
	var _0x69CC = new SoundObject(_0x4CAF);
	global_SoundCache[_0x4CAF] = _0x69CC;
	return _0x69CC.obj.play()
}