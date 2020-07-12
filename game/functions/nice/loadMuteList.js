'use strict';

function loadMuteList(clusterShardData)
{
	var cache = clusterShardData.split("~");
	var helpTextData = "<center>";
	helpTextData = helpTextData + "<table id='muteList-table' class='sortable basic-table' width='90%'>";
	helpTextData = helpTextData + "<thead>";
	helpTextData = helpTextData + "<tr><th>Username</th><th>Muted By</th><th>Date Muted</th><th>Date Unmuted</th><th width='50%'>Reason</th><th>IP Muted</th><th>Is Currenty Muted</th></tr>";
	helpTextData = helpTextData + "</thead>";
	helpTextData = helpTextData + "<tbody>";
	var i = 0;
	for (; i < cache.length; i++)
	{
		var entry = cache[i];
		i++;
		var currentRow = cache[i];
		i++;
		var w = cache[i];
		i++;
		var r = cache[i];
		i++;
		var k = cache[i];
		i++;
		var oldTime = cache[i];
		i++;
		var cacheData = cache[i];
		helpTextData = helpTextData + "<tr>";
		helpTextData = helpTextData + ("<td>" + entry + "</td>");
		helpTextData = helpTextData + ("<td>" + currentRow + "</td>");
		helpTextData = helpTextData + ("<td>" + formatUnixToDate(w) + "</td>");
		if (r - w >= 54000000000)
		{
			helpTextData = helpTextData + ("<td>" + "Forever" + "</td>");
		}
		else
		{
			helpTextData = helpTextData + ("<td>" + formatUnixToDate(r) + "</td>");
		}
		helpTextData = helpTextData + ("<td>" + k + "</td>");
		helpTextData = helpTextData + ("<td>" + oldTime + "</td>");
		helpTextData = helpTextData + ("<td>" + cacheData + "</td>");
		helpTextData = helpTextData + "</tr>";
	}
	helpTextData = helpTextData + "</tbody>";
	helpTextData = helpTextData + "</table>";
	helpTextData = helpTextData + "</center>";
	document.getElementById("section-muteList").innerHTML = helpTextData;
	sorttable.makeSortable(document.getElementById("muteList-table"));
};
