/**
 * startMonsterAnimation extracted from ../../deobfuscated/bundle.js at line 10132-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/startMonsterAnimation.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function startMonsterAnimation(_0x1CC2E)
{
	if (_0x1CC2E.startsWith("shake"))
	{
		var _0x1E318 = _0x1CC2E.split("~")[1];
		global_monsterShake = true;
		setTimeout(function ()
		{
			global_monsterShake = false
		}, parseInt(_0x1E318 * 1000))
	}
	else
	{
		if (_0x1CC2E == 0)
		{
			resetAnimationOfCurrentFightToIdle()
		}
		else
		{
			getMonsterObject(getItem("monsterName")).callAnimation(parseInt(_0x1CC2E))
		}
	}
}