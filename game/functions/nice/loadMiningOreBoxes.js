'use strict';

function loadMiningOreBoxes()
{
	document.getElementById("item-section-ore-to-mine-1").innerHTML = "";
	addItemBoxOreToMine("stone", "STONE", 1);
	addItemBoxOreToMine("copper", "COPPER", 1);
	addItemBoxOreToMine("iron", "IRON", 5);
	addItemBoxOreToMine("silver", "SILVER", 10);
	addItemBoxOreToMine("gold", "GOLD", 20);
	addItemBoxOreToMine("promethium", "PROMETHIUM", 40);
	addItemBoxOreToMine("titanium", "TITANIUM", 65);
	refreshMiningAllocationIcons();
	if (!loaded_loadMiningOreBoxes)
	{
		loaded_loadMiningOreBoxes = true;
	}
};
