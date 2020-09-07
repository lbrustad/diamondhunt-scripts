'use strict';

function refreshMarketHistory(type)
{
	var template = document.getElementById("marketHistory-section");
	document.getElementById("marketHistory-loading").style.display = "none";
	if (type == "error")
	{
		document.getElementById("marketHistory-section").innerHTML = "<center>An error has occured.  Too many requests.  Try again later.</center>";
		return;
	}
	if (type == "empty")
	{
		document.getElementById("marketHistory-section").innerHTML = "<center>There are no transactions on the market for this account.</center>";
		return;
	}
	var options = type.split("~");
	var templateHTML = "<center><table class='simple-table' width='70%'>";
	templateHTML = templateHTML + "<tr>";
	templateHTML = templateHTML + ("<th>" + "Item" + "</th>");
	templateHTML = templateHTML + ("<th>" + "Icon" + "</th>");
	templateHTML = templateHTML + ("<th>" + "Amount" + "</th>");
	templateHTML = templateHTML + ("<th>" + "Price" + "</th>");
	templateHTML = templateHTML + ("<th>" + "Bought/Sold" + "</th>");
	templateHTML = templateHTML + ("<th>" + "Date <span style='color:grey'>MM/DD/YYYY</span>" + "</th>");
	templateHTML = templateHTML + "</tr>";
	var i = 0;
	for (; i < options.length; i = i + 0)
	{
		var runIsolated = options[i] == "true";
		i++;
		var step = options[i];
		i++;
		var m = options[i];
		i++;
		var value = options[i];
		i++;
		var val = options[i];
		i++;
		templateHTML = templateHTML + "<tr>";
		templateHTML = templateHTML + ("<td>" + getItemName(step) + "</td>");
		templateHTML = templateHTML + ("<td>" + "<img src='images/" + step + ".png' class='img-50' />" + "</td>");
		templateHTML = templateHTML + ("<td>" + formatNumber(m) + "</td>");
		templateHTML = templateHTML + ("<td>" + formatNumber(value * m) + " <img src='images/coins.png' class='img-20' /> <br /><span style='color:grey;font-size:10pt;'>(" + formatNumber(value) + " each)</span></td>");
		templateHTML = templateHTML + ("<td>" + runIsolated + "</td>");
		templateHTML = templateHTML + ("<td>" + (new Date(parseInt(val))).toLocaleDateString("en-US"));
		+ "</td>";
		templateHTML = templateHTML + "</tr>";
	}
	template.innerHTML = templateHTML;
};
