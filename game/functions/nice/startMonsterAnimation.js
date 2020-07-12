'use strict';

function startMonsterAnimation(el)
{
	if (el.startsWith("shake"))
	{
		var _caption_fs = el.split("~")[1];
		global_monsterShake = true;
		setTimeout(function ()
		{
			global_monsterShake = false;
		}, parseInt(_caption_fs * 1000));
	}
	else
	{
		if (el == 0)
		{
			resetAnimationOfCurrentFightToIdle();
		}
		else
		{
			getMonsterObject(getItem("monsterName")).callAnimation(parseInt(el));
		}
	}
};
