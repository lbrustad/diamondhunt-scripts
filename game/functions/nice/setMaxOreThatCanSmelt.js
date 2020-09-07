'use strict';

function setMaxOreThatCanSmelt(origin, origintype)
{
	var item = getItem(origin);
	if (getItem(origin) >= getItem("furnaceCapacity"))
	{
		item = getItem("furnaceCapacity");
	}
	if (origin == "titanium")
	{
		var barH = item * getCharcoalCost(origin);
		if (getItem("charcoal") < barH)
		{
			item = getItem("charcoal") / getCharcoalCost(origin);
		}
	}
	else
	{
		var barH = item * getOilCost(origin);
		if (getItem("oil") < barH)
		{
			item = getItem("oil") / getOilCost(origin);
		}
	}
	document.getElementById("dialogue-furnace-smelt-amount").value = parseInt(item);
};
