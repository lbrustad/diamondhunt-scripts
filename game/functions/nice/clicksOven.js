'use strict';

function clicksOven()
{
	var patch3c = "";
	var number = "";
	number = "logs";
	number = "logs";
	patch3c = patch3c + ("<div oncontextmenu='sendBytes(\"ADD_ALL_HEAT=" + number + '");document.getElementById("dialogue-oven-log-' + number + "\").innerHTML = 0;return false;' onclick='addLogsOven(\"" + number + "\");closeDialogue(\"dialogue-confirm\")' class='oven-log-button'>");
	patch3c = patch3c + "<table width='100%'>";
	patch3c = patch3c + "<tr>";
	patch3c = patch3c + "<td>";
	patch3c = patch3c + ("<img src='images/" + number + ".png' class='img-70' />");
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "<td style='text-align:right;'>";
	patch3c = patch3c + ("<span id='dialogue-oven-log-" + number + "' style='color:orange'>" + formatNumber(getItem(number)) + "</span><br /> " + number.toUpperCase());
	patch3c = patch3c + "<br /><br />";
	patch3c = patch3c + ("<img src='images/heat.png' class='img-20' /> " + getHeat(number));
	patch3c = patch3c + "</td>";
	patch3c = patch3c + "</table>";
	patch3c = patch3c + "</div>";
	number = "oakLogs";
	if (getItem(number) > 0)
	{
		patch3c = patch3c + ("<div oncontextmenu='sendBytes(\"ADD_ALL_HEAT=" + number + '");document.getElementById("dialogue-oven-log-' + number + "\").innerHTML = 0;return false;' onclick='addLogsOven(\"" + number + "\");closeDialogue(\"dialogue-confirm\")' class='oven-log-button'>");
		patch3c = patch3c + "<table width='100%'>";
		patch3c = patch3c + "<tr>";
		patch3c = patch3c + "<td>";
		patch3c = patch3c + ("<img src='images/" + number + ".png' class='img-70' />");
		patch3c = patch3c + "</td>";
		patch3c = patch3c + "<td style='text-align:right;'>";
		patch3c = patch3c + ("<span id='dialogue-oven-log-" + number + "' style='color:orange'>" + formatNumber(getItem(number)) + "</span><br /> " + "OAK");
		patch3c = patch3c + "<br /><br />";
		patch3c = patch3c + ("<img src='images/heat.png' class='img-20' /> " + getHeat(number));
		patch3c = patch3c + "</td>";
		patch3c = patch3c + "</table>";
		patch3c = patch3c + "</div>";
	}
	number = "willowLogs";
	if (getItem(number) > 0)
	{
		patch3c = patch3c + ("<div oncontextmenu='sendBytes(\"ADD_ALL_HEAT=" + number + '");document.getElementById("dialogue-oven-log-' + number + "\").innerHTML = 0;return false;' onclick='addLogsOven(\"" + number + "\");closeDialogue(\"dialogue-confirm\")'  class='oven-log-button'>");
		patch3c = patch3c + "<table width='100%'>";
		patch3c = patch3c + "<tr>";
		patch3c = patch3c + "<td>";
		patch3c = patch3c + ("<img src='images/" + number + ".png' class='img-70' />");
		patch3c = patch3c + "</td>";
		patch3c = patch3c + "<td style='text-align:right;'>";
		patch3c = patch3c + ("<span id='dialogue-oven-log-" + number + "' style='color:orange'>" + formatNumber(getItem(number)) + "</span><br /> " + "WILLOW");
		patch3c = patch3c + "<br /><br />";
		patch3c = patch3c + ("<img src='images/heat.png' class='img-20' /> " + getHeat(number));
		patch3c = patch3c + "</td>";
		patch3c = patch3c + "</table>";
		patch3c = patch3c + "</div>";
	}
	number = "bambooLogs";
	if (getItem(number) > 0)
	{
		patch3c = patch3c + ("<div oncontextmenu='sendBytes(\"ADD_ALL_HEAT=" + number + '");document.getElementById("dialogue-oven-log-' + number + "\").innerHTML = 0;return false;' onclick='addLogsOven(\"" + number + "\");closeDialogue(\"dialogue-confirm\")'  class='oven-log-button'>");
		patch3c = patch3c + "<table width='100%'>";
		patch3c = patch3c + "<tr>";
		patch3c = patch3c + "<td>";
		patch3c = patch3c + ("<img src='images/" + number + ".png' class='img-70' />");
		patch3c = patch3c + "</td>";
		patch3c = patch3c + "<td style='text-align:right;'>";
		patch3c = patch3c + ("<span id='dialogue-oven-log-" + number + "' style='color:orange'>" + formatNumber(getItem(number)) + "</span><br /> " + "BAMBOO");
		patch3c = patch3c + "<br /><br />";
		patch3c = patch3c + ("<img src='images/heat.png' class='img-20' /> " + getHeat(number));
		patch3c = patch3c + "</td>";
		patch3c = patch3c + "</table>";
		patch3c = patch3c + "</div>";
	}
	number = "mapleLogs";
	if (getItem(number) > 0)
	{
		patch3c = patch3c + ("<div oncontextmenu='sendBytes(\"ADD_ALL_HEAT=" + number + '");document.getElementById("dialogue-oven-log-' + number + "\").innerHTML = 0;return false;' onclick='addLogsOven(\"" + number + "\");closeDialogue(\"dialogue-confirm\")'  class='oven-log-button'>");
		patch3c = patch3c + "<table width='100%'>";
		patch3c = patch3c + "<tr>";
		patch3c = patch3c + "<td>";
		patch3c = patch3c + ("<img src='images/" + number + ".png' class='img-70' />");
		patch3c = patch3c + "</td>";
		patch3c = patch3c + "<td style='text-align:right;'>";
		patch3c = patch3c + ("<span id='dialogue-oven-log-" + number + "' style='color:orange'>" + formatNumber(getItem(number)) + "</span><br /> " + "MAPLE");
		patch3c = patch3c + "<br /><br />";
		patch3c = patch3c + ("<img src='images/heat.png' class='img-20' /> " + getHeat(number));
		patch3c = patch3c + "</td>";
		patch3c = patch3c + "</table>";
		patch3c = patch3c + "</div>";
	}
	number = "lavaLogs";
	if (getItem(number) > 0)
	{
		patch3c = patch3c + ("<div oncontextmenu='sendBytes(\"ADD_ALL_HEAT=" + number + '");document.getElementById("dialogue-oven-log-' + number + "\").innerHTML = 0;return false;' onclick='addLogsOven(\"" + number + "\");closeDialogue(\"dialogue-confirm\")'  class='oven-log-button'>");
		patch3c = patch3c + "<table width='100%'>";
		patch3c = patch3c + "<tr>";
		patch3c = patch3c + "<td>";
		patch3c = patch3c + ("<img src='images/" + number + ".png' class='img-70' />");
		patch3c = patch3c + "</td>";
		patch3c = patch3c + "<td style='text-align:right;'>";
		patch3c = patch3c + ("<span id='dialogue-oven-log-" + number + "' style='color:orange'>" + formatNumber(getItem(number)) + "</span><br /> " + "LAVA");
		patch3c = patch3c + "<br /><br />";
		patch3c = patch3c + ("<img src='images/heat.png' class='img-20' /> " + getHeat(number));
		patch3c = patch3c + "</td>";
		patch3c = patch3c + "</table>";
		patch3c = patch3c + "</div>";
	}
	number = "pineLogs";
	if (getItem(number) > 0)
	{
		patch3c = patch3c + ("<div oncontextmenu='sendBytes(\"ADD_ALL_HEAT=" + number + '");document.getElementById("dialogue-oven-log-' + number + "\").innerHTML = 0;return false;' onclick='addLogsOven(\"" + number + "\");closeDialogue(\"dialogue-confirm\")'  class='oven-log-button'>");
		patch3c = patch3c + "<table width='100%'>";
		patch3c = patch3c + "<tr>";
		patch3c = patch3c + "<td>";
		patch3c = patch3c + ("<img src='images/" + number + ".png' class='img-70' />");
		patch3c = patch3c + "</td>";
		patch3c = patch3c + "<td style='text-align:right;'>";
		patch3c = patch3c + ("<span id='dialogue-oven-log-" + number + "' style='color:orange'>" + formatNumber(getItem(number)) + "</span><br /> " + "PINE");
		patch3c = patch3c + "<br /><br />";
		patch3c = patch3c + ("<img src='images/heat.png' class='img-20' /> " + getHeat(number));
		patch3c = patch3c + "</td>";
		patch3c = patch3c + "</table>";
		patch3c = patch3c + "</div>";
	}
	number = "stardustLogs";
	if (getItem(number) > 0)
	{
		patch3c = patch3c + ("<div oncontextmenu='sendBytes(\"ADD_ALL_HEAT=" + number + '");document.getElementById("dialogue-oven-log-' + number + "\").innerHTML = 0;return false;' onclick='addLogsOven(\"" + number + "\");closeDialogue(\"dialogue-confirm\")'  class='oven-log-button'>");
		patch3c = patch3c + "<table width='100%'>";
		patch3c = patch3c + "<tr>";
		patch3c = patch3c + "<td>";
		patch3c = patch3c + ("<img src='images/" + number + ".png' class='img-70' />");
		patch3c = patch3c + "</td>";
		patch3c = patch3c + "<td style='text-align:right;'>";
		patch3c = patch3c + ("<span id='dialogue-oven-log-" + number + "' style='color:orange'>" + formatNumber(getItem(number)) + "</span><br /> " + "STARDUST");
		patch3c = patch3c + "<br /><br />";
		patch3c = patch3c + ("<img src='images/heat.png' class='img-20' /> " + getHeat(number));
		patch3c = patch3c + "</td>";
		patch3c = patch3c + "</table>";
		patch3c = patch3c + "</div>";
	}
	if (getItem("heatTotal") > 100)
	{
		patch3c = patch3c + "<br /><br /><span style='color:grey;font-size:10pt'>Tip: Right click a log in this menu to automatically use them all.</span>";
	}
	confirmDialogue("none", patch3c, "Close", "", "");
};
