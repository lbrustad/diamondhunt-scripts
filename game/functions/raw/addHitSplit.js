/**
 * addHitSplit extracted from ../../deobfuscated/bundle.js at line 14210-14232
 *
 * If this file doesn't contain a function, there is an error in ../raw/addHitSplit.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addHitSplit(_0x3746)
{
	if (global_lastTabId == "right-combat-fighting")
	{
		var _0x3763 = _0x3746.split("~");
		var _0x37D7 = _0x3763[0];
		var _0x3811 = _0x3763[1];
		var _0x379D = _0x3763[2];
		var _0x3729 = _0x3763[3];
		var _0x370C = _0x3763[4];
		var _0x37BA = _0x3763[5];
		var _0x37F4 = getCurrentMillis();
		var _0x3780 = new HitAnimation(_0x37D7, _0x3811, _0x379D, _0x3729, _0x370C, _0x37BA, _0x37F4);
		if (_0x37D7 == "hero")
		{
			global_heroHitAnimationHashSet.add(_0x3780)
		}
		else
		{
			global_monsterHitAnimationHashSet.add(_0x3780)
		}
	}
}