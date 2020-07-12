/**
 * addHitSplit extracted from ../../deobfuscated/bundle.js at line 10346-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/addHitSplit.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addHitSplit(data)
{
	if (global_lastTabId == "right-combat-fighting")
	{
		var _0x1C75E = data.split("~");
		var _0x1C796 = _0x1C75E[0];
		var _0x1C7B2 = _0x1C75E[1];
		var _0x1C77A = _0x1C75E[2];
		var _0x1C742 = _0x1C75E[3];
		var _0x1C734 = _0x1C75E[4];
		var _0x1C788 = _0x1C75E[5];
		var _0x1C7A4 = getCurrentMillis();
		var _0x1C76C = new HitAnimation(_0x1C796, _0x1C7B2, _0x1C77A, _0x1C742, _0x1C734, _0x1C788, _0x1C7A4);
		if (_0x1C796 == "hero")
		{
			global_heroHitAnimationHashSet.add(_0x1C76C)
		}
		else
		{
			global_monsterHitAnimationHashSet.add(_0x1C76C)
		}
	}
}