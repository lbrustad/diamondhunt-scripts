/**
 * startMonsterAnimation extracted from ../../deobfuscated/bundle.js at line 17233-17255
 *
 * If this file doesn't contain a function, there is an error in ../raw/startMonsterAnimation.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function startMonsterAnimation(_0x159FE)
{
	if (_0x159FE.startsWith("shake"))
	{
		var _0x19F2C = _0x159FE.split("~")[1];
		global_monsterShake = true;
		setTimeout(function ()
		{
			global_monsterShake = false
		}, parseInt(_0x19F2C * 1000))
	}
	else
	{
		if (_0x159FE == 0)
		{
			resetAnimationOfCurrentFightToIdle()
		}
		else
		{
			getMonsterObject(getItem("monsterName")).callAnimation(parseInt(_0x159FE))
		}
	}
}