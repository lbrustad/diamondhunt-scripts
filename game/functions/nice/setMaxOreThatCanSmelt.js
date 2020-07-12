'use strict';

function setMaxOreThatCanSmelt(astClass, separator)
{
	var item = getItem(astClass);
	if (getItem(astClass) >= getItem("furnaceCapacity"))
	{
		item = getItem("furnaceCapacity");
	}
	var barH = item * getOilCost(astClass);
	if (getItem("oil") < barH)
	{
		item = getItem("oil") / getOilCost(astClass);
	}
	document.getElementById("dialogue-furnace-smelt-amount").value = parseInt(item);
};
