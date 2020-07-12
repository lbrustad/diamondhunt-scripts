'use strict';

function populateMarketTable()
{
	if (document.getElementById("market-filter").value.length > 0)
	{
		return;
	}
	if (global_MarketData.length == 0)
	{
		document.getElementById("market-display-section").innerHTML = "<h1 style='text-align:center'>Market is currently empty.</h1>";
		return;
	}
	var attributeTemplate = "<center>";
	attributeTemplate = attributeTemplate + "<table id='market-table' class='sortable basic-table' width='90%'>";
	attributeTemplate = attributeTemplate + "<thead>";
	attributeTemplate = attributeTemplate + "<tr><th width='15%' colspan='2'>Name</th><th width='15%'>Amount</th><th width='15%'>Price each</th><th width='15%'>Category</th><th width='5%'>Expires In</th></tr>";
	attributeTemplate = attributeTemplate + "</thead>";
	attributeTemplate = attributeTemplate + "<tbody>";
	var itemKey = 0;
	for (; itemKey < global_MarketData.length; itemKey++)
	{
		var item = global_MarketData[itemKey];
		var libraryKey = item.keyFound;
		var name = item.itemName;
		var s = item.itemAmount;
		var price = item.price;
		var releaseAuthor = item.itemCategory;
		var text = item.postDate;
		text = formatTime((text - getCurrentMillis()) / 1000);
		if (s == 0 || text == 0)
		{
			continue;
		}
		customAttribute = "onclick='purchaseFromMarket(\"" + libraryKey + '","' + name + '","' + s + '","' + price + "\")'";
		if (libraryKey.split("_")[0] == getItem("playerId"))
		{
			customAttribute = "style='background-color:silver;'";
		}
		attributeTemplate = attributeTemplate + ("<tr class='tr-hover' id='marekt-row-" + name + "' " + customAttribute + " style='border:1px solid grey'>");
		attributeTemplate = attributeTemplate + ("<td style='border:none'>" + getItemName(name).toUpperCase() + "</td>");
		attributeTemplate = attributeTemplate + ("<td style='border:none'>" + "<img class='img-50' src='images/" + name + ".png'" + "</td>");
		attributeTemplate = attributeTemplate + ("<td style='border:none'>" + formatNumber(s) + "</td>");
		attributeTemplate = attributeTemplate + ("<td style='border:none'>" + formatNumber(price) + "</td>");
		attributeTemplate = attributeTemplate + ("<td style='color:grey'style='border:none'>" + releaseAuthor + "</td>");
		attributeTemplate = attributeTemplate + ("<td style='border:none'>" + text + "</td>");
		attributeTemplate = attributeTemplate + "</tr>";
	}
	attributeTemplate = attributeTemplate + "</tbody>";
	attributeTemplate = attributeTemplate + "</table>";
	attributeTemplate = attributeTemplate + "</center>";
	document.getElementById("market-display-section").innerHTML = attributeTemplate;
	sorttable.makeSortable(document.getElementById("market-table"));
};
