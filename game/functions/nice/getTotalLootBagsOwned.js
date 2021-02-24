'use strict';

function getTotalLootBagsOwned()
{
	var str = 0;
	str = str + getItem("fieldsLootBag");
	str = str + getItem("forestLootBag");
	str = str + getItem("cavesLootBag");
	str = str + getItem("lavaDungeonLootBag");
	str = str + getItem("northernFieldsLootBag");
	str = str + getItem("cemeteryLootBag");
	str = str + getItem("oceanLootBag");
	str = str + getItem("dungeonLootBag");
	return str;
};
