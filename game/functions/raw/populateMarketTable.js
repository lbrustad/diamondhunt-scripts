/**
 * populateMarketTable extracted from ../../deobfuscated/bundle.js at line 21451-21501
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
	var _0x151CA = "<center>";
	_0x151CA += "<table id=\'market-table\' class=\'sortable basic-table\' width=\'90%\'>";
	_0x151CA += "<thead>";
	_0x151CA += "<tr><th width=\'15%\' colspan=\'2\'>Name</th><th width=\'15%\'>Amount</th><th width=\'15%\'>Price each</th><th width=\'15%\'>Category</th><th width=\'5%\'>Expires In</th></tr>";
	_0x151CA += "</thead>";
	_0x151CA += "<tbody>";
	for (var _0x14C0C = 0; _0x14C0C < global_MarketData.length; _0x14C0C++)
	{
		var _0x18E15 = global_MarketData[_0x14C0C];
		var _0x181A4 = _0x18E15.keyFound;
		var _0x15003 = _0x18E15.itemName;
		var _0x18118 = _0x18E15.itemAmount;
		var _0x18DF2 = _0x18E15.price;
		var _0x1813B = _0x18E15.itemCategory;
		var _0x181EA = _0x18E15.postDate;
		_0x181EA = formatTime((_0x181EA - getCurrentMillis()) / 1000);
		if (_0x18118 == 0 || _0x181EA == 0)
		{
			continue
		};
		customAttribute = "onclick=\'purchaseFromMarket(\"" + _0x181A4 + "\",\"" + _0x15003 + "\",\"" + _0x18118 + "\",\"" + _0x18DF2 + "\")\'";
		if (_0x181A4.split("_")[0] == getItem("playerId"))
		{
			customAttribute = "style=\'background-color:silver;\'"
		};
		_0x151CA += "<tr class=\'tr-hover\' id=\'marekt-row-" + _0x15003 + "\' " + customAttribute + " style=\'border:1px solid grey\'>";
		_0x151CA += "<td style=\'border:none\'>" + getItemName(_0x15003).toUpperCase() + "</td>";
		_0x151CA += "<td style=\'border:none\'>" + "<img class=\'img-50\' src=\'images/" + _0x15003 + ".png\'" + "</td>";
		_0x151CA += "<td style=\'border:none\'>" + formatNumber(_0x18118) + "</td>";
		_0x151CA += "<td style=\'border:none\'>" + formatNumber(_0x18DF2) + "</td>";
		_0x151CA += "<td style=\'color:grey\'style=\'border:none\'>" + _0x1813B + "</td>";
		_0x151CA += "<td style=\'border:none\'>" + _0x181EA + "</td>";
		_0x151CA += "</tr>"
	};
	_0x151CA += "</tbody>";
	_0x151CA += "</table>";
	_0x151CA += "</center>";
	document.getElementById("market-display-section").innerHTML = _0x151CA;
	sorttable.makeSortable(document.getElementById("market-table"));
	if (document.getElementById("market-filter").value.length > 0)
	{
		marketFilter(document.getElementById("market-filter").value, false)
	}
}