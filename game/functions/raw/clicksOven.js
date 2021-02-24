/**
 * clicksOven extracted from ../../deobfuscated/bundle.js at line 20907-21050
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksOven.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksOven()
{
	var _0x151CA = "";
	var _0x1613D = "";
	_0x1613D = "logs";
	_0x1613D = "logs";
	_0x151CA += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x1613D + "\");document.getElementById(\"dialogue-oven-log-" + _0x1613D + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' class=\'oven-log-button\'>";
	_0x151CA += "<table width=\'100%\'>";
	_0x151CA += "<tr>";
	_0x151CA += "<td>";
	_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
	_0x151CA += "</td>";
	_0x151CA += "<td style=\'text-align:right;\'>";
	_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
	_0x151CA += "<br /><br />";
	_0x151CA += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1613D);
	_0x151CA += "</td>";
	_0x151CA += "</table>";
	_0x151CA += "</div>";
	_0x1613D = "oakLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x1613D + "\");document.getElementById(\"dialogue-oven-log-" + _0x1613D + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + "OAK";
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1613D);
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "willowLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x1613D + "\");document.getElementById(\"dialogue-oven-log-" + _0x1613D + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + "WILLOW";
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1613D);
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "bambooLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x1613D + "\");document.getElementById(\"dialogue-oven-log-" + _0x1613D + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + "BAMBOO";
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1613D);
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "mapleLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x1613D + "\");document.getElementById(\"dialogue-oven-log-" + _0x1613D + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + "MAPLE";
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1613D);
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "lavaLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x1613D + "\");document.getElementById(\"dialogue-oven-log-" + _0x1613D + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + "LAVA";
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1613D);
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "pineLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x1613D + "\");document.getElementById(\"dialogue-oven-log-" + _0x1613D + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + "PINE";
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1613D);
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "stardustLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x1613D + "\");document.getElementById(\"dialogue-oven-log-" + _0x1613D + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + "STARDUST";
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1613D);
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	if (getItem("heatTotal") > 100)
	{
		_0x151CA += "<br /><br /><span style=\'color:grey;font-size:10pt\'>Tip: Right click a log in this menu to automatically use them all.</span>"
	};
	confirmDialogue("none", _0x151CA, "Close", "", "")
}