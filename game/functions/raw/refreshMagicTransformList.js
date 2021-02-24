/**
 * refreshMagicTransformList extracted from ../../deobfuscated/bundle.js at line 18195-18222
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshMagicTransformList.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshMagicTransformList()
{
	var _0x15049 = "convertMagic-section-2";
	var _0x1908B = [];
	document.getElementById(_0x15049).innerHTML = "";
	var _0x190AE = "";
	var _0x151CA = "";
	_0x190AE = "stinger";
	_0x1908B[_0x190AE] = (new MagicTransformRecipe(_0x190AE, 5, 200, 5000, ["ironBars", "honey"], ["5 - 10", "1 - 2"], ["needle"], ["1"], "bee_" + _0x190AE));
	_0x151CA += addTransformRecipeToTable(_0x1908B[_0x190AE], _0x15049);
	_0x190AE = "ironDagger";
	_0x1908B[_0x190AE] = (new MagicTransformRecipe(_0x190AE, 10, 500, 10000, ["ironBars", "coins"], ["20 - 50", "1000 - 2000"], ["daggerBlade", "daggerHandle"], ["1", "1"], "thief_" + _0x190AE));
	_0x151CA += addTransformRecipeToTable(_0x1908B[_0x190AE], _0x15049);
	_0x190AE = "skeletonSword";
	_0x1908B[_0x190AE] = (new MagicTransformRecipe(_0x190AE, 25, 1000, 50000, ["bones", "boneAmulet"], ["10 - 20", "1"], ["skeletonSwordMetal"], ["1"], "skeleton_" + _0x190AE));
	_0x151CA += addTransformRecipeToTable(_0x1908B[_0x190AE], _0x15049);
	_0x190AE = "bow";
	_0x1908B[_0x190AE] = (new MagicTransformRecipe(_0x190AE, 40, 3500, 100000, ["arrow", "fireArrow", "iceArrow", "bowBase"], ["30 - 60", "20 - 30", "5 - 20", "1"], ["magicString"], ["1 - 50"], "boneHead_" + "bowBase"));
	_0x151CA += addTransformRecipeToTable(_0x1908B[_0x190AE], _0x15049);
	_0x190AE = "scythe";
	_0x1908B[_0x190AE] = (new MagicTransformRecipe(_0x190AE, 50, 6000, 150000, ["iron", "ironBars"], ["750 - 1250", "500 - 1000"], ["scytheBlade"], ["1"], "reaper_" + "scythe"));
	_0x151CA += addTransformRecipeToTable(_0x1908B[_0x190AE], _0x15049);
	_0x190AE = "stoneMace";
	_0x1908B[_0x190AE] = (new MagicTransformRecipe(_0x190AE, 50, 6000, 300000, ["stone"], ["10000 - 20000"], ["maceSpikes"], ["50 - 100"], "stoneWomen_" + "brokenStoneMace"));
	_0x151CA += addTransformRecipeToTable(_0x1908B[_0x190AE], _0x15049);
	_0x151CA = "<tr><th>Weapon</th><th></th><th><img src=\'images/magicSkill.png\' class=\'img-30\' /> Magic Level</th><th>Transforms</th><th>Special Transforms</th><th><img src=\'images/stardustIcon.png\' class=\'img-30\' /> Stardust Cost</th><th>XP</th><th>Casts</th></tr>" + _0x151CA;
	document.getElementById(_0x15049).innerHTML += "<table class=\'table-craftables\' width=\'90%\'>" + _0x151CA + "</table><br />"
}