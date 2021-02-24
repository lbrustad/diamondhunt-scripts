/**
 * clicksCharcoalFoundry extracted from ../../deobfuscated/bundle.js at line 21095-21233
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksCharcoalFoundry.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksCharcoalFoundry()
{
	var _0x151CA = "<center><span style=\'font-size:16pt;font-weight:bold;\'>Charcoal Foundry</span><br /><br /><span style=\'color:grey;font-size:10pt;\'>Converts log into charcoal.  Each log has a different success rate. <u style=\'cursor:pointer\' onclick=\'charcoalFoundryMoreInfo();\'>(more info)</u></span></center><br />";
	var _0x1613D = "";
	_0x1613D = "logs";
	_0x151CA += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\' class=\'oven-log-button\'>";
	_0x151CA += "<table width=\'100%\'>";
	_0x151CA += "<tr>";
	_0x151CA += "<td>";
	_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
	_0x151CA += "</td>";
	_0x151CA += "<td style=\'text-align:right;\'>";
	_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
	_0x151CA += "<br /><br />";
	_0x151CA += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x1613D) * 100) + "%</b>";
	_0x151CA += "</td>";
	_0x151CA += "</table>";
	_0x151CA += "</div>";
	_0x1613D = "oakLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x1613D) * 100) + "%</b>";
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "willowLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x1613D) * 100) + "%</b>";
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "bambooLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x1613D) * 100) + "%</b>";
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "mapleLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x1613D) * 100) + "%</b>";
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "lavaLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x1613D) * 100) + "%</b>";
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "pineLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x1613D) * 100) + "%</b>";
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "stardustLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x1613D) * 100) + "%</b>";
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	confirmDialogue("none", _0x151CA, "Close", "", "")
}