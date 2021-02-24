'use strict';

function clicksCharcoalFoundry()
{
	var artistTrack = "<center><span style='font-size:16pt;font-weight:bold;'>Charcoal Foundry</span><br /><br /><span style='color:grey;font-size:10pt;'>Converts log into charcoal.  Each log has a different success rate. <u style='cursor:pointer' onclick='charcoalFoundryMoreInfo();'>(more info)</u></span></center><br />";
	var number = "";
	number = "logs";
	artistTrack = artistTrack + ("<div onclick='addLogsCharcoalFoundry(\"" + number + "\");closeDialogue(\"dialogue-confirm\")' style='width:70%;' class='oven-log-button'>");
	artistTrack = artistTrack + "<table width='100%'>";
	artistTrack = artistTrack + "<tr>";
	artistTrack = artistTrack + "<td>";
	artistTrack = artistTrack + ("<img src='images/" + number + ".png' class='img-70' />");
	artistTrack = artistTrack + "</td>";
	artistTrack = artistTrack + "<td style='text-align:right;'>";
	artistTrack = artistTrack + ("<span id='dialogue-oven-log-" + number + "' style='color:orange'>" + formatNumber(getItem(number)) + "</span><br /> " + number.toUpperCase());
	artistTrack = artistTrack + "<br /><br />";
	artistTrack = artistTrack + ("<img src='images/charcoal_light.png' class='img-30' /> <b style='font-size:14pt;color:grey'>" + parseInt(getCharcoalSuccessRate(number) * 100) + "%</b>");
	artistTrack = artistTrack + "</td>";
	artistTrack = artistTrack + "</table>";
	artistTrack = artistTrack + "</div>";
	number = "oakLogs";
	if (getItem(number) > 0)
	{
		artistTrack = artistTrack + ("<div onclick='addLogsCharcoalFoundry(\"" + number + "\");closeDialogue(\"dialogue-confirm\")' style='width:70%;'  class='oven-log-button'>");
		artistTrack = artistTrack + "<table width='100%'>";
		artistTrack = artistTrack + "<tr>";
		artistTrack = artistTrack + "<td>";
		artistTrack = artistTrack + ("<img src='images/" + number + ".png' class='img-70' />");
		artistTrack = artistTrack + "</td>";
		artistTrack = artistTrack + "<td style='text-align:right;'>";
		artistTrack = artistTrack + ("<span id='dialogue-oven-log-" + number + "' style='color:orange'>" + formatNumber(getItem(number)) + "</span><br /> " + number.toUpperCase());
		artistTrack = artistTrack + "<br /><br />";
		artistTrack = artistTrack + ("<img src='images/charcoal_light.png' class='img-30' /> <b style='font-size:14pt;color:grey'>" + parseInt(getCharcoalSuccessRate(number) * 100) + "%</b>");
		artistTrack = artistTrack + "</td>";
		artistTrack = artistTrack + "</table>";
		artistTrack = artistTrack + "</div>";
	}
	number = "willowLogs";
	if (getItem(number) > 0)
	{
		artistTrack = artistTrack + ("<div onclick='addLogsCharcoalFoundry(\"" + number + "\");closeDialogue(\"dialogue-confirm\")' style='width:70%;'  class='oven-log-button'>");
		artistTrack = artistTrack + "<table width='100%'>";
		artistTrack = artistTrack + "<tr>";
		artistTrack = artistTrack + "<td>";
		artistTrack = artistTrack + ("<img src='images/" + number + ".png' class='img-70' />");
		artistTrack = artistTrack + "</td>";
		artistTrack = artistTrack + "<td style='text-align:right;'>";
		artistTrack = artistTrack + ("<span id='dialogue-oven-log-" + number + "' style='color:orange'>" + formatNumber(getItem(number)) + "</span><br /> " + number.toUpperCase());
		artistTrack = artistTrack + "<br /><br />";
		artistTrack = artistTrack + ("<img src='images/charcoal_light.png' class='img-30' /> <b style='font-size:14pt;color:grey'>" + parseInt(getCharcoalSuccessRate(number) * 100) + "%</b>");
		artistTrack = artistTrack + "</td>";
		artistTrack = artistTrack + "</table>";
		artistTrack = artistTrack + "</div>";
	}
	number = "bambooLogs";
	if (getItem(number) > 0)
	{
		artistTrack = artistTrack + ("<div onclick='addLogsCharcoalFoundry(\"" + number + "\");closeDialogue(\"dialogue-confirm\")' style='width:70%;'  class='oven-log-button'>");
		artistTrack = artistTrack + "<table width='100%'>";
		artistTrack = artistTrack + "<tr>";
		artistTrack = artistTrack + "<td>";
		artistTrack = artistTrack + ("<img src='images/" + number + ".png' class='img-70' />");
		artistTrack = artistTrack + "</td>";
		artistTrack = artistTrack + "<td style='text-align:right;'>";
		artistTrack = artistTrack + ("<span id='dialogue-oven-log-" + number + "' style='color:orange'>" + formatNumber(getItem(number)) + "</span><br /> " + number.toUpperCase());
		artistTrack = artistTrack + "<br /><br />";
		artistTrack = artistTrack + ("<img src='images/charcoal_light.png' class='img-30' /> <b style='font-size:14pt;color:grey'>" + parseInt(getCharcoalSuccessRate(number) * 100) + "%</b>");
		artistTrack = artistTrack + "</td>";
		artistTrack = artistTrack + "</table>";
		artistTrack = artistTrack + "</div>";
	}
	number = "mapleLogs";
	if (getItem(number) > 0)
	{
		artistTrack = artistTrack + ("<div onclick='addLogsCharcoalFoundry(\"" + number + "\");closeDialogue(\"dialogue-confirm\")' style='width:70%;'  class='oven-log-button'>");
		artistTrack = artistTrack + "<table width='100%'>";
		artistTrack = artistTrack + "<tr>";
		artistTrack = artistTrack + "<td>";
		artistTrack = artistTrack + ("<img src='images/" + number + ".png' class='img-70' />");
		artistTrack = artistTrack + "</td>";
		artistTrack = artistTrack + "<td style='text-align:right;'>";
		artistTrack = artistTrack + ("<span id='dialogue-oven-log-" + number + "' style='color:orange'>" + formatNumber(getItem(number)) + "</span><br /> " + number.toUpperCase());
		artistTrack = artistTrack + "<br /><br />";
		artistTrack = artistTrack + ("<img src='images/charcoal_light.png' class='img-30' /> <b style='font-size:14pt;color:grey'>" + parseInt(getCharcoalSuccessRate(number) * 100) + "%</b>");
		artistTrack = artistTrack + "</td>";
		artistTrack = artistTrack + "</table>";
		artistTrack = artistTrack + "</div>";
	}
	number = "lavaLogs";
	if (getItem(number) > 0)
	{
		artistTrack = artistTrack + ("<div onclick='addLogsCharcoalFoundry(\"" + number + "\");closeDialogue(\"dialogue-confirm\")' style='width:70%;'  class='oven-log-button'>");
		artistTrack = artistTrack + "<table width='100%'>";
		artistTrack = artistTrack + "<tr>";
		artistTrack = artistTrack + "<td>";
		artistTrack = artistTrack + ("<img src='images/" + number + ".png' class='img-70' />");
		artistTrack = artistTrack + "</td>";
		artistTrack = artistTrack + "<td style='text-align:right;'>";
		artistTrack = artistTrack + ("<span id='dialogue-oven-log-" + number + "' style='color:orange'>" + formatNumber(getItem(number)) + "</span><br /> " + number.toUpperCase());
		artistTrack = artistTrack + "<br /><br />";
		artistTrack = artistTrack + ("<img src='images/charcoal_light.png' class='img-30' /> <b style='font-size:14pt;color:grey'>" + parseInt(getCharcoalSuccessRate(number) * 100) + "%</b>");
		artistTrack = artistTrack + "</td>";
		artistTrack = artistTrack + "</table>";
		artistTrack = artistTrack + "</div>";
	}
	number = "pineLogs";
	if (getItem(number) > 0)
	{
		artistTrack = artistTrack + ("<div onclick='addLogsCharcoalFoundry(\"" + number + "\");closeDialogue(\"dialogue-confirm\")' style='width:70%;'  class='oven-log-button'>");
		artistTrack = artistTrack + "<table width='100%'>";
		artistTrack = artistTrack + "<tr>";
		artistTrack = artistTrack + "<td>";
		artistTrack = artistTrack + ("<img src='images/" + number + ".png' class='img-70' />");
		artistTrack = artistTrack + "</td>";
		artistTrack = artistTrack + "<td style='text-align:right;'>";
		artistTrack = artistTrack + ("<span id='dialogue-oven-log-" + number + "' style='color:orange'>" + formatNumber(getItem(number)) + "</span><br /> " + number.toUpperCase());
		artistTrack = artistTrack + "<br /><br />";
		artistTrack = artistTrack + ("<img src='images/charcoal_light.png' class='img-30' /> <b style='font-size:14pt;color:grey'>" + parseInt(getCharcoalSuccessRate(number) * 100) + "%</b>");
		artistTrack = artistTrack + "</td>";
		artistTrack = artistTrack + "</table>";
		artistTrack = artistTrack + "</div>";
	}
	number = "stardustLogs";
	if (getItem(number) > 0)
	{
		artistTrack = artistTrack + ("<div onclick='addLogsCharcoalFoundry(\"" + number + "\");closeDialogue(\"dialogue-confirm\")' style='width:70%;'  class='oven-log-button'>");
		artistTrack = artistTrack + "<table width='100%'>";
		artistTrack = artistTrack + "<tr>";
		artistTrack = artistTrack + "<td>";
		artistTrack = artistTrack + ("<img src='images/" + number + ".png' class='img-70' />");
		artistTrack = artistTrack + "</td>";
		artistTrack = artistTrack + "<td style='text-align:right;'>";
		artistTrack = artistTrack + ("<span id='dialogue-oven-log-" + number + "' style='color:orange'>" + formatNumber(getItem(number)) + "</span><br /> " + number.toUpperCase());
		artistTrack = artistTrack + "<br /><br />";
		artistTrack = artistTrack + ("<img src='images/charcoal_light.png' class='img-30' /> <b style='font-size:14pt;color:grey'>" + parseInt(getCharcoalSuccessRate(number) * 100) + "%</b>");
		artistTrack = artistTrack + "</td>";
		artistTrack = artistTrack + "</table>";
		artistTrack = artistTrack + "</div>";
	}
	confirmDialogue("none", artistTrack, "Close", "", "");
};
