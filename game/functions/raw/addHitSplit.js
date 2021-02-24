/**
 * addHitSplit extracted from ../../deobfuscated/bundle.js at line 17615-17637
 *
 * If this file doesn't contain a function, there is an error in ../raw/addHitSplit.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addHitSplit(_0x14DB0)
{
	if (global_lastTabId == "right-combat-fighting")
	{
		var _0x14DD3 = _0x14DB0.split("~");
		var _0x14E5F = _0x14DD3[0];
		var _0x14EA5 = _0x14DD3[1];
		var _0x14E19 = _0x14DD3[2];
		var _0x14D8D = _0x14DD3[3];
		var _0x14D6A = _0x14DD3[4];
		var _0x14E3C = _0x14DD3[5];
		var _0x14E82 = getCurrentMillis();
		var _0x14DF6 = new HitAnimation(_0x14E5F, _0x14EA5, _0x14E19, _0x14D8D, _0x14D6A, _0x14E3C, _0x14E82);
		if (_0x14E5F == "hero")
		{
			global_heroHitAnimationHashSet.add(_0x14DF6)
		}
		else
		{
			global_monsterHitAnimationHashSet.add(_0x14DF6)
		}
	}
}