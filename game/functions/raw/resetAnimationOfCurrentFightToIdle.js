/**
 * resetAnimationOfCurrentFightToIdle extracted from ../../deobfuscated/bundle.js at line 8655-8664
 *
 * If this file doesn't contain a function, there is an error in ../raw/resetAnimationOfCurrentFightToIdle.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function resetAnimationOfCurrentFightToIdle()
{
	var _0x16BE7 = getMonsterObject(getItemString("monsterName"));
	if (_0x16BE7 != "none")
	{
		_0x16BE7.frameAt = 0;
		_0x16BE7.speedAt = 0;
		_0x16BE7.currentAnimation = _0x16BE7.idleAnimationObject
	}
}