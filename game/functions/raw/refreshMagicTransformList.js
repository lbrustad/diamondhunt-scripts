/**
 * refreshMagicTransformList extracted from ../../deobfuscated/bundle.js at line 10734-10752
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshMagicTransformList.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshMagicTransformList()
{
	var _0x1C85A = "convertMagic-section-2";
	var _0x1DDCA = [];
	document.getElementById(_0x1C85A).innerHTML = "";
	var _0x1DDD8 = "";
	var _0x1C8F4 = "";
	_0x1DDD8 = "stinger";
	_0x1DDCA[_0x1DDD8] = (new MagicTransformRecipe(_0x1DDD8, 5, 50, 5000, ["ironBars", "honey"], ["5 - 10", "1 - 2"], ["needle"], ["1"], "bee_" + _0x1DDD8));
	_0x1C8F4 += addTransformRecipeToTable(_0x1DDCA[_0x1DDD8], _0x1C85A);
	_0x1DDD8 = "ironDagger";
	_0x1DDCA[_0x1DDD8] = (new MagicTransformRecipe(_0x1DDD8, 15, 200, 10000, ["ironBars", "coins"], ["20 - 50", "1000 - 2000"], ["daggerBlade", "daggerHandle"], ["1", "1"], "thief_" + _0x1DDD8));
	_0x1C8F4 += addTransformRecipeToTable(_0x1DDCA[_0x1DDD8], _0x1C85A);
	_0x1DDD8 = "skeletonSword";
	_0x1DDCA[_0x1DDD8] = (new MagicTransformRecipe(_0x1DDD8, 30, 200, 50000, ["bones", "boneAmulet"], ["10 - 20", "1"], ["skeletonSwordMetal"], ["1"], "skeleton_" + _0x1DDD8));
	_0x1C8F4 += addTransformRecipeToTable(_0x1DDCA[_0x1DDD8], _0x1C85A);
	_0x1C8F4 = "<tr><th>Weapon</th><th></th><th><img src=\'images/magicSkill.png\' class=\'img-30\' /> Magic Level</th><th>Transforms</th><th>Special Transforms</th><th><img src=\'images/stardustIcon.png\' class=\'img-30\' /> Stardust Cost</th><th>XP</th><th>Casts</th></tr>" + _0x1C8F4;
	document.getElementById(_0x1C85A).innerHTML += "<table class=\'table-craftables\' width=\'90%\'>" + _0x1C8F4 + "</table><br />"
}