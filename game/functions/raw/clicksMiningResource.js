/**
 * clicksMiningResource extracted from ../../deobfuscated/bundle.js at line 1209-1247
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksMiningResource.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksMiningResource(_0x1657A)
{
	var _0x16557 = ["stone", "copper", "iron", "silver", "gold", "promethium", "titanium", "ancient"];
	var _0x15A44 = "";
	if (_0x1657A == "miner" && getItem("wrench") > 0)
	{
		_0x15A44 += "<div onclick=\"closeDialogue(\'dialogue-confirm\');clicksWrenchDialogue()\" class=\"dialogue-fancy-button-div\">";
		_0x15A44 += "<table width=\"100%\">";
		_0x15A44 += "<tr>";
		_0x15A44 += "<td width=\"120px\"><img src=\"images/wrench.png\" class=\"img-100\" /></td>";
		_0x15A44 += "<td style=\"text-align:right;\"><span style=\"font-size:20pt;color:orange\">WRENCH</span><hr class=\"hr-thin\" /><i style=\"color:grey\">Set up wrench options.</i></td>";
		_0x15A44 += "</tr>";
		_0x15A44 += "</table>";
		_0x15A44 += "</div>"
	};
	_0x15A44 += "<div onclick=\"sendBytes(\'MINING_ALLOCATE_RESET=" + _0x1657A + "\');closeDialogue(\'dialogue-confirm\')\" class=\"dialogue-fancy-button-div\">";
	_0x15A44 += "<table width=\"100%\">";
	_0x15A44 += "<tr>";
	_0x15A44 += "<td width=\"120px\"><img src=\"images/" + _0x1657A + "ResetMining.png\" class=\"img-100\" /></td>";
	_0x15A44 += "<td style=\"text-align:right;\"><span style=\"font-size:20pt\">RESET</span><hr class=\"hr-thin\" /><i style=\"color:grey\">Pull back all " + _0x1657A + " from mining</i></td>";
	_0x15A44 += "</tr>";
	_0x15A44 += "</table>";
	_0x15A44 += "</div>";
	_0x15A44 += "<h4 style=\'text-align:center\'>Total Resources Collected</h4>";
	var _0x16534 = false;
	for (var _0x14C0C = 0; _0x14C0C < _0x16557.length; _0x14C0C++)
	{
		if (getItem(_0x16557[_0x14C0C] + capitalizeFirstLetter(_0x1657A)))
		{
			_0x15A44 += "<div style=\'border:1px solid black; background-color:grey;padding:5px 10px;color:white; display:inline-block;margin:10px;\'>" + "<img src=\'images/" + _0x16557[_0x14C0C] + ".png\' class=\'img-40\' /> " + formatNumber(getItem(_0x16557[_0x14C0C] + capitalizeFirstLetter(_0x1657A))) + "</div>";
			_0x16534 = true
		}
	};
	if (!_0x16534)
	{
		_0x15A44 += "<i style=\'color:grey;font-size:10pt\'>(none)<br /><br /><b>Close this dialogue and select an ore below to mine.</b></i>"
	};
	confirmDialogue("none", _0x15A44, "Close", "", "")
}