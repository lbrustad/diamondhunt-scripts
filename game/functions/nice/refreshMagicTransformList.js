'use strict';

function refreshMagicTransformList()
{
	var err_id = "convertMagic-section-2";
	var isHardMap = [];
	document.getElementById(err_id).innerHTML = "";
	var functionName = "";
	var pix_color = "";
	functionName = "stinger";
	isHardMap[functionName] = new MagicTransformRecipe(functionName, 5, 50, 5000, ["ironBars", "honey"], ["5 - 10", "1 - 2"], ["needle"], ["1"], "bee_" + functionName);
	pix_color = pix_color + addTransformRecipeToTable(isHardMap[functionName], err_id);
	functionName = "ironDagger";
	isHardMap[functionName] = new MagicTransformRecipe(functionName, 15, 200, 10000, ["ironBars", "coins"], ["20 - 50", "1000 - 2000"], ["daggerBlade", "daggerHandle"], ["1", "1"], "thief_" + functionName);
	pix_color = pix_color + addTransformRecipeToTable(isHardMap[functionName], err_id);
	functionName = "skeletonSword";
	isHardMap[functionName] = new MagicTransformRecipe(functionName, 30, 200, 50000, ["bones", "boneAmulet"], ["10 - 20", "1"], ["skeletonSwordMetal"], ["1"], "skeleton_" + functionName);
	pix_color = pix_color + addTransformRecipeToTable(isHardMap[functionName], err_id);
	pix_color = "<tr><th>Weapon</th><th></th><th><img src='images/magicSkill.png' class='img-30' /> Magic Level</th><th>Transforms</th><th>Special Transforms</th><th><img src='images/stardustIcon.png' class='img-30' /> Stardust Cost</th><th>XP</th><th>Casts</th></tr>" + pix_color;
	document.getElementById(err_id).innerHTML += "<table class='table-craftables' width='90%'>" + pix_color + "</table><br />";
};
