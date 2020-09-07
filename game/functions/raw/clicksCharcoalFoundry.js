/**
 * clicksCharcoalFoundry extracted from ../../deobfuscated/bundle.js at line 17345-17483
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksCharcoalFoundry.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksCharcoalFoundry()
{
	var _0x3AAC = "<center><span style=\'font-size:16pt;font-weight:bold;\'>Charcoal Foundry</span><br /><br /><span style=\'color:grey;font-size:10pt;\'>Converts log into charcoal.  Each log has a different success rate. <u style=\'cursor:pointer\' onclick=\'charcoalFoundryMoreInfo();\'>(more info)</u></span></center><br />";
	var _0x473F = "";
	_0x473F = "logs";
	_0x3AAC += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\' class=\'oven-log-button\'>";
	_0x3AAC += "<table width=\'100%\'>";
	_0x3AAC += "<tr>";
	_0x3AAC += "<td>";
	_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
	_0x3AAC += "</td>";
	_0x3AAC += "<td style=\'text-align:right;\'>";
	_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
	_0x3AAC += "<br /><br />";
	_0x3AAC += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x473F) * 100) + "%</b>";
	_0x3AAC += "</td>";
	_0x3AAC += "</table>";
	_0x3AAC += "</div>";
	_0x473F = "oakLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x473F) * 100) + "%</b>";
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "willowLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x473F) * 100) + "%</b>";
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "bambooLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x473F) * 100) + "%</b>";
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "mapleLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x473F) * 100) + "%</b>";
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "lavaLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x473F) * 100) + "%</b>";
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "pineLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x473F) * 100) + "%</b>";
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "stardustLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x473F) * 100) + "%</b>";
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	confirmDialogue("none", _0x3AAC, "Close", "", "")
}