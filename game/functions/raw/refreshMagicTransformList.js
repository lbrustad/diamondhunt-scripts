/**
 * refreshMagicTransformList extracted from ../../deobfuscated/bundle.js at line 14754-14775
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshMagicTransformList.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshMagicTransformList()
{
	var _0x396D = "convertMagic-section-2";
	var _0x6BB9 = [];
	document.getElementById(_0x396D).innerHTML = "";
	var _0x6BD6 = "";
	var _0x3AAC = "";
	_0x6BD6 = "stinger";
	_0x6BB9[_0x6BD6] = (new MagicTransformRecipe(_0x6BD6, 5, 200, 5000, ["ironBars", "honey"], ["5 - 10", "1 - 2"], ["needle"], ["1"], "bee_" + _0x6BD6));
	_0x3AAC += addTransformRecipeToTable(_0x6BB9[_0x6BD6], _0x396D);
	_0x6BD6 = "ironDagger";
	_0x6BB9[_0x6BD6] = (new MagicTransformRecipe(_0x6BD6, 10, 500, 10000, ["ironBars", "coins"], ["20 - 50", "1000 - 2000"], ["daggerBlade", "daggerHandle"], ["1", "1"], "thief_" + _0x6BD6));
	_0x3AAC += addTransformRecipeToTable(_0x6BB9[_0x6BD6], _0x396D);
	_0x6BD6 = "skeletonSword";
	_0x6BB9[_0x6BD6] = (new MagicTransformRecipe(_0x6BD6, 25, 1000, 50000, ["bones", "boneAmulet"], ["10 - 20", "1"], ["skeletonSwordMetal"], ["1"], "skeleton_" + _0x6BD6));
	_0x3AAC += addTransformRecipeToTable(_0x6BB9[_0x6BD6], _0x396D);
	_0x6BD6 = "bow";
	_0x6BB9[_0x6BD6] = (new MagicTransformRecipe(_0x6BD6, 40, 3500, 100000, ["arrow", "fireArrow", "iceArrow", "bowBase"], ["30 - 60", "20 - 30", "5 - 20", "1"], ["magicString"], ["1 - 50"], "boneHead_" + "bowBase"));
	_0x3AAC += addTransformRecipeToTable(_0x6BB9[_0x6BD6], _0x396D);
	_0x3AAC = "<tr><th>Weapon</th><th></th><th><img src=\'images/magicSkill.png\' class=\'img-30\' /> Magic Level</th><th>Transforms</th><th>Special Transforms</th><th><img src=\'images/stardustIcon.png\' class=\'img-30\' /> Stardust Cost</th><th>XP</th><th>Casts</th></tr>" + _0x3AAC;
	document.getElementById(_0x396D).innerHTML += "<table class=\'table-craftables\' width=\'90%\'>" + _0x3AAC + "</table><br />"
}