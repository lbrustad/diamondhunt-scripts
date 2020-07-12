/**
 * loadMiningOreBoxes extracted from ../../deobfuscated/bundle.js at line 918-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/loadMiningOreBoxes.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function loadMiningOreBoxes()
{
	document.getElementById("item-section-ore-to-mine-1").innerHTML = "";
	addItemBoxOreToMine("stone", "STONE", 1);
	addItemBoxOreToMine("copper", "COPPER", 1);
	addItemBoxOreToMine("iron", "IRON", 5);
	addItemBoxOreToMine("silver", "SILVER", 10);
	addItemBoxOreToMine("gold", "GOLD", 20);
	addItemBoxOreToMine("promethium", "PROMETHIUM", 40);
	refreshMiningAllocationIcons();
	if (!loaded_loadMiningOreBoxes)
	{
		loaded_loadMiningOreBoxes = true
	}
}