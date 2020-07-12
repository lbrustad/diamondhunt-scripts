/**
 * clicksMiningResource extracted from ../../deobfuscated/bundle.js at line 748-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksMiningResource.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksMiningResource(_0x1CFAE)
{
	var _0x1CFA0 = ["stone", "copper", "iron", "silver", "gold", "promethium", "titanium", "ancient"];
	var _0x1CC4A = "";
	_0x1CC4A += "<div onclick=\"sendBytes(\'MINING_ALLOCATE_RESET=" + _0x1CFAE + "\');closeDialogue(\'dialogue-confirm\')\" class=\"dialogue-fancy-button-div\">";
	_0x1CC4A += "<table width=\"100%\">";
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td width=\"120px\"><img src=\"images/" + _0x1CFAE + "ResetMining.png\" class=\"img-100\" /></td>";
	_0x1CC4A += "<td style=\"text-align:right;\"><span style=\"font-size:20pt\">RESET</span><hr class=\"hr-thin\" /><i style=\"color:grey\">Pull back all " + _0x1CFAE + " from mining</i></td>";
	_0x1CC4A += "</tr>";
	_0x1CC4A += "</table>";
	_0x1CC4A += "</div>";
	_0x1CC4A += "<h4 style=\'text-align:center\'>Total Resources Collected</h4>";
	var _0x1CF92 = false;
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CFA0.length; _0x1C6B6++)
	{
		if (getItem(_0x1CFA0[_0x1C6B6] + capitalizeFirstLetter(_0x1CFAE)))
		{
			_0x1CC4A += "<div style=\'border:1px solid black; background-color:grey;padding:5px 10px;color:white; display:inline-block;margin:10px;\'>" + "<img src=\'images/" + _0x1CFA0[_0x1C6B6] + ".png\' class=\'img-40\' /> " + formatNumber(getItem(_0x1CFA0[_0x1C6B6] + capitalizeFirstLetter(_0x1CFAE))) + "</div>";
			_0x1CF92 = true
		}
	};
	if (!_0x1CF92)
	{
		_0x1CC4A += "<i style=\'color:grey;font-size:10pt\'>(none)<br /><br /><b>Close this dialogue and select an ore below to mine.</b></i>"
	};
	confirmDialogue("none", _0x1CC4A, "Close", "", "")
}