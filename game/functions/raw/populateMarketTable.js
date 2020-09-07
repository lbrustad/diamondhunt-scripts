/**
 * populateMarketTable extracted from ../../deobfuscated/bundle.js at line 17701-17751
 *
 * If this file doesn't contain a function, there is an error in ../raw/populateMarketTable.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function populateMarketTable()
{
	if (global_MarketData.length == 0)
	{
		document.getElementById("market-display-section").innerHTML = "<h1 style=\'text-align:center\'>Market is currently empty.</h1>";
		return
	};
	var _0x3AAC = "<center>";
	_0x3AAC += "<table id=\'market-table\' class=\'sortable basic-table\' width=\'90%\'>";
	_0x3AAC += "<thead>";
	_0x3AAC += "<tr><th width=\'15%\' colspan=\'2\'>Name</th><th width=\'15%\'>Amount</th><th width=\'15%\'>Price each</th><th width=\'15%\'>Category</th><th width=\'5%\'>Expires In</th></tr>";
	_0x3AAC += "</thead>";
	_0x3AAC += "<tbody>";
	for (var _0x3607 = 0; _0x3607 < global_MarketData.length; _0x3607++)
	{
		var _0x6A06 = global_MarketData[_0x3607];
		var _0x5FD4 = _0x6A06.keyFound;
		var _0x3933 = _0x6A06.itemName;
		var _0x5F60 = _0x6A06.itemAmount;
		var _0x69E9 = _0x6A06.price;
		var _0x5F7D = _0x6A06.itemCategory;
		var _0x600E = _0x6A06.postDate;
		_0x600E = formatTime((_0x600E - getCurrentMillis()) / 1000);
		if (_0x5F60 == 0 || _0x600E == 0)
		{
			continue
		};
		customAttribute = "onclick=\'purchaseFromMarket(\"" + _0x5FD4 + "\",\"" + _0x3933 + "\",\"" + _0x5F60 + "\",\"" + _0x69E9 + "\")\'";
		if (_0x5FD4.split("_")[0] == getItem("playerId"))
		{
			customAttribute = "style=\'background-color:silver;\'"
		};
		_0x3AAC += "<tr class=\'tr-hover\' id=\'marekt-row-" + _0x3933 + "\' " + customAttribute + " style=\'border:1px solid grey\'>";
		_0x3AAC += "<td style=\'border:none\'>" + getItemName(_0x3933).toUpperCase() + "</td>";
		_0x3AAC += "<td style=\'border:none\'>" + "<img class=\'img-50\' src=\'images/" + _0x3933 + ".png\'" + "</td>";
		_0x3AAC += "<td style=\'border:none\'>" + formatNumber(_0x5F60) + "</td>";
		_0x3AAC += "<td style=\'border:none\'>" + formatNumber(_0x69E9) + "</td>";
		_0x3AAC += "<td style=\'color:grey\'style=\'border:none\'>" + _0x5F7D + "</td>";
		_0x3AAC += "<td style=\'border:none\'>" + _0x600E + "</td>";
		_0x3AAC += "</tr>"
	};
	_0x3AAC += "</tbody>";
	_0x3AAC += "</table>";
	_0x3AAC += "</center>";
	document.getElementById("market-display-section").innerHTML = _0x3AAC;
	sorttable.makeSortable(document.getElementById("market-table"));
	if (document.getElementById("market-filter").value.length > 0)
	{
		marketFilter(document.getElementById("market-filter").value, false)
	}
}