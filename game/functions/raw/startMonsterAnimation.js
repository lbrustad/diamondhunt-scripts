/**
 * startMonsterAnimation extracted from ../../deobfuscated/bundle.js at line 13905-13927
 *
 * If this file doesn't contain a function, there is an error in ../raw/startMonsterAnimation.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function startMonsterAnimation(_0x4178)
{
	if (_0x4178.startsWith("shake"))
	{
		var _0x7781 = _0x4178.split("~")[1];
		global_monsterShake = true;
		setTimeout(function ()
		{
			global_monsterShake = false
		}, parseInt(_0x7781 * 1000))
	}
	else
	{
		if (_0x4178 == 0)
		{
			resetAnimationOfCurrentFightToIdle()
		}
		else
		{
			getMonsterObject(getItem("monsterName")).callAnimation(parseInt(_0x4178))
		}
	}
}