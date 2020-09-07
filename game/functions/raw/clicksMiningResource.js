/**
 * clicksMiningResource extracted from ../../deobfuscated/bundle.js at line 969-1007
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksMiningResource.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksMiningResource(_0x49F7)
{
	var _0x49DA = ["stone", "copper", "iron", "silver", "gold", "promethium", "titanium", "ancient"];
	var _0x41B2 = "";
	if (_0x49F7 == "miner" && getItem("wrench") > 0)
	{
		_0x41B2 += "<div onclick=\"closeDialogue(\'dialogue-confirm\');clicksWrenchDialogue()\" class=\"dialogue-fancy-button-div\">";
		_0x41B2 += "<table width=\"100%\">";
		_0x41B2 += "<tr>";
		_0x41B2 += "<td width=\"120px\"><img src=\"images/wrench.png\" class=\"img-100\" /></td>";
		_0x41B2 += "<td style=\"text-align:right;\"><span style=\"font-size:20pt;color:orange\">WRENCH</span><hr class=\"hr-thin\" /><i style=\"color:grey\">Set up wrench options.</i></td>";
		_0x41B2 += "</tr>";
		_0x41B2 += "</table>";
		_0x41B2 += "</div>"
	};
	_0x41B2 += "<div onclick=\"sendBytes(\'MINING_ALLOCATE_RESET=" + _0x49F7 + "\');closeDialogue(\'dialogue-confirm\')\" class=\"dialogue-fancy-button-div\">";
	_0x41B2 += "<table width=\"100%\">";
	_0x41B2 += "<tr>";
	_0x41B2 += "<td width=\"120px\"><img src=\"images/" + _0x49F7 + "ResetMining.png\" class=\"img-100\" /></td>";
	_0x41B2 += "<td style=\"text-align:right;\"><span style=\"font-size:20pt\">RESET</span><hr class=\"hr-thin\" /><i style=\"color:grey\">Pull back all " + _0x49F7 + " from mining</i></td>";
	_0x41B2 += "</tr>";
	_0x41B2 += "</table>";
	_0x41B2 += "</div>";
	_0x41B2 += "<h4 style=\'text-align:center\'>Total Resources Collected</h4>";
	var _0x49BD = false;
	for (var _0x3607 = 0; _0x3607 < _0x49DA.length; _0x3607++)
	{
		if (getItem(_0x49DA[_0x3607] + capitalizeFirstLetter(_0x49F7)))
		{
			_0x41B2 += "<div style=\'border:1px solid black; background-color:grey;padding:5px 10px;color:white; display:inline-block;margin:10px;\'>" + "<img src=\'images/" + _0x49DA[_0x3607] + ".png\' class=\'img-40\' /> " + formatNumber(getItem(_0x49DA[_0x3607] + capitalizeFirstLetter(_0x49F7))) + "</div>";
			_0x49BD = true
		}
	};
	if (!_0x49BD)
	{
		_0x41B2 += "<i style=\'color:grey;font-size:10pt\'>(none)<br /><br /><b>Close this dialogue and select an ore below to mine.</b></i>"
	};
	confirmDialogue("none", _0x41B2, "Close", "", "")
}