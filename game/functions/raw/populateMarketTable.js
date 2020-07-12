/**
 * populateMarketTable extracted from ../../deobfuscated/bundle.js at line 12770-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/populateMarketTable.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function populateMarketTable()
{
	if (document.getElementById("market-filter").value.length > 0)
	{
		return
	};
	if (global_MarketData.length == 0)
	{
		document.getElementById("market-display-section").innerHTML = "<h1 style=\'text-align:center\'>Market is currently empty.</h1>";
		return
	};
	var _0x1C8F4 = "<center>";
	_0x1C8F4 += "<table id=\'market-table\' class=\'sortable basic-table\' width=\'90%\'>";
	_0x1C8F4 += "<thead>";
	_0x1C8F4 += "<tr><th width=\'15%\' colspan=\'2\'>Name</th><th width=\'15%\'>Amount</th><th width=\'15%\'>Price each</th><th width=\'15%\'>Category</th><th width=\'5%\'>Expires In</th></tr>";
	_0x1C8F4 += "</thead>";
	_0x1C8F4 += "<tbody>";
	for (var _0x1C6B6 = 0; _0x1C6B6 < global_MarketData.length; _0x1C6B6++)
	{
		var _0x1DD30 = global_MarketData[_0x1C6B6];
		var _0x1D96A = _0x1DD30.keyFound;
		var _0x1C83E = _0x1DD30.itemName;
		var _0x1D932 = _0x1DD30.itemAmount;
		var _0x1DD22 = _0x1DD30.price;
		var _0x1D940 = _0x1DD30.itemCategory;
		var _0x1D986 = _0x1DD30.postDate;
		_0x1D986 = formatTime((_0x1D986 - getCurrentMillis()) / 1000);
		if (_0x1D932 == 0 || _0x1D986 == 0)
		{
			continue
		};
		customAttribute = "onclick=\'purchaseFromMarket(\"" + _0x1D96A + "\",\"" + _0x1C83E + "\",\"" + _0x1D932 + "\",\"" + _0x1DD22 + "\")\'";
		if (_0x1D96A.split("_")[0] == getItem("playerId"))
		{
			customAttribute = "style=\'background-color:silver;\'"
		};
		_0x1C8F4 += "<tr class=\'tr-hover\' id=\'marekt-row-" + _0x1C83E + "\' " + customAttribute + " style=\'border:1px solid grey\'>";
		_0x1C8F4 += "<td style=\'border:none\'>" + getItemName(_0x1C83E).toUpperCase() + "</td>";
		_0x1C8F4 += "<td style=\'border:none\'>" + "<img class=\'img-50\' src=\'images/" + _0x1C83E + ".png\'" + "</td>";
		_0x1C8F4 += "<td style=\'border:none\'>" + formatNumber(_0x1D932) + "</td>";
		_0x1C8F4 += "<td style=\'border:none\'>" + formatNumber(_0x1DD22) + "</td>";
		_0x1C8F4 += "<td style=\'color:grey\'style=\'border:none\'>" + _0x1D940 + "</td>";
		_0x1C8F4 += "<td style=\'border:none\'>" + _0x1D986 + "</td>";
		_0x1C8F4 += "</tr>"
	};
	_0x1C8F4 += "</tbody>";
	_0x1C8F4 += "</table>";
	_0x1C8F4 += "</center>";
	document.getElementById("market-display-section").innerHTML = _0x1C8F4;
	sorttable.makeSortable(document.getElementById("market-table"))
}