'use strict';

function refreshMagicTransformList()
{
	var err_id = "convertMagic-section-2";
	var isHardMap = [];
	document.getElementById(err_id).innerHTML = "";
	var functionName = "";
	var pix_color = "";
	functionName = "stinger";
	isHardMap[functionName] = new MagicTransformRecipe(functionName, 5, 200, 5000, ["ironBars", "honey"], ["5 - 10", "1 - 2"], ["needle"], ["1"], "bee_" + functionName);
	pix_color = pix_color + addTransformRecipeToTable(isHardMap[functionName], err_id);
	functionName = "ironDagger";
	isHardMap[functionName] = new MagicTransformRecipe(functionName, 10, 500, 10000, ["ironBars", "coins"], ["20 - 50", "1000 - 2000"], ["daggerBlade", "daggerHandle"], ["1", "1"], "thief_" + functionName);
	pix_color = pix_color + addTransformRecipeToTable(isHardMap[functionName], err_id);
	functionName = "skeletonSword";
	isHardMap[functionName] = new MagicTransformRecipe(functionName, 25, 1000, 50000, ["bones", "boneAmulet"], ["10 - 20", "1"], ["skeletonSwordMetal"], ["1"], "skeleton_" + functionName);
	pix_color = pix_color + addTransformRecipeToTable(isHardMap[functionName], err_id);
	functionName = "bow";
	isHardMap[functionName] = new MagicTransformRecipe(functionName, 40, 3500, 100000, ["arrow", "fireArrow", "iceArrow", "bowBase"], ["30 - 60", "20 - 30", "5 - 20", "1"], ["magicString"], ["1 - 50"], "boneHead_" + "bowBase");
	pix_color = pix_color + addTransformRecipeToTable(isHardMap[functionName], err_id);
	functionName = "scythe";
	isHardMap[functionName] = new MagicTransformRecipe(functionName, 50, 6000, 150000, ["iron", "ironBars"], ["750 - 1250", "500 - 1000"], ["scytheBlade"], ["1"], "reaper_" + "scythe");
	pix_color = pix_color + addTransformRecipeToTable(isHardMap[functionName], err_id);
	functionName = "stoneMace";
	isHardMap[functionName] = new MagicTransformRecipe(functionName, 50, 6000, 300000, ["stone"], ["10000 - 20000"], ["maceSpikes"], ["50 - 100"], "stoneWomen_" + "brokenStoneMace");
	pix_color = pix_color + addTransformRecipeToTable(isHardMap[functionName], err_id);
	pix_color = "<tr><th>Weapon</th><th></th><th><img src='images/magicSkill.png' class='img-30' /> Magic Level</th><th>Transforms</th><th>Special Transforms</th><th><img src='images/stardustIcon.png' class='img-30' /> Stardust Cost</th><th>XP</th><th>Casts</th></tr>" + pix_color;
	document.getElementById(err_id).innerHTML += "<table class='table-craftables' width='90%'>" + pix_color + "</table><br />";
};
