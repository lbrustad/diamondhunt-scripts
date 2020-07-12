/**
 * resetAnimationOfCurrentFightToIdle extracted from ../../deobfuscated/bundle.js at line 5598-5607
 *
 * If this file doesn't contain a function, there is an error in ../raw/resetAnimationOfCurrentFightToIdle.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function resetAnimationOfCurrentFightToIdle()
{
	var _0x1D216 = getMonsterObject(getItemString("monsterName"));
	if (_0x1D216 != "none")
	{
		_0x1D216.frameAt = 0;
		_0x1D216.speedAt = 0;
		_0x1D216.currentAnimation = _0x1D216.idleAnimationObject
	}
}