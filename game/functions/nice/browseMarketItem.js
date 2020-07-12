'use strict';

function browseMarketItem(fullPath)
{
	var name = getItemName(fullPath);
	document.getElementById("market-filter").value = name;
	marketFilter(name, true);
};
