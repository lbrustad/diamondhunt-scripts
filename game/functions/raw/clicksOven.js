/**
 * clicksOven extracted from ../../deobfuscated/bundle.js at line 17171-17314
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksOven.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksOven()
{
	var _0x3AAC = "";
	var _0x473F = "";
	_0x473F = "logs";
	_0x473F = "logs";
	_0x3AAC += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x473F + "\");document.getElementById(\"dialogue-oven-log-" + _0x473F + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' class=\'oven-log-button\'>";
	_0x3AAC += "<table width=\'100%\'>";
	_0x3AAC += "<tr>";
	_0x3AAC += "<td>";
	_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
	_0x3AAC += "</td>";
	_0x3AAC += "<td style=\'text-align:right;\'>";
	_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
	_0x3AAC += "<br /><br />";
	_0x3AAC += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x473F);
	_0x3AAC += "</td>";
	_0x3AAC += "</table>";
	_0x3AAC += "</div>";
	_0x473F = "oakLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x473F + "\");document.getElementById(\"dialogue-oven-log-" + _0x473F + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + "OAK";
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x473F);
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "willowLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x473F + "\");document.getElementById(\"dialogue-oven-log-" + _0x473F + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + "WILLOW";
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x473F);
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "bambooLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x473F + "\");document.getElementById(\"dialogue-oven-log-" + _0x473F + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + "BAMBOO";
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x473F);
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "mapleLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x473F + "\");document.getElementById(\"dialogue-oven-log-" + _0x473F + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + "MAPLE";
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x473F);
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "lavaLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x473F + "\");document.getElementById(\"dialogue-oven-log-" + _0x473F + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + "LAVA";
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x473F);
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "pineLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x473F + "\");document.getElementById(\"dialogue-oven-log-" + _0x473F + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + "PINE";
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x473F);
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "stardustLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x473F + "\");document.getElementById(\"dialogue-oven-log-" + _0x473F + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + "STARDUST";
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x473F);
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	if (getItem("heatTotal") > 100)
	{
		_0x3AAC += "<br /><br /><span style=\'color:grey;font-size:10pt\'>Tip: Right click a log in this menu to automatically use them all.</span>"
	};
	confirmDialogue("none", _0x3AAC, "Close", "", "")
}