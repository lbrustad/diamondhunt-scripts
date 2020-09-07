/**
 * resetAnimationOfCurrentFightToIdle extracted from ../../deobfuscated/bundle.js at line 7311-7320
 *
 * If this file doesn't contain a function, there is an error in ../raw/resetAnimationOfCurrentFightToIdle.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function resetAnimationOfCurrentFightToIdle()
{
	var _0x4F2D = getMonsterObject(getItemString("monsterName"));
	if (_0x4F2D != "none")
	{
		_0x4F2D.frameAt = 0;
		_0x4F2D.speedAt = 0;
		_0x4F2D.currentAnimation = _0x4F2D.idleAnimationObject
	}
}