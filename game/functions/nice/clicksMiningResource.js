'use strict';

function clicksMiningResource(prop)
{
	var prefixes = ["stone", "copper", "iron", "silver", "gold", "promethium", "titanium", "ancient"];
	var patch3c = "";
	patch3c = patch3c + ("<div onclick=\"sendBytes('MINING_ALLOCATE_RESET=" + prop + "');closeDialogue('dialogue-confirm')\" class=\"dialogue-fancy-button-div\">");
	patch3c = patch3c + '<table width="100%">';
	patch3c = patch3c + "<tr>";
	patch3c = patch3c + ('<td width="120px"><img src="images/' + prop + 'ResetMining.png" class="img-100" /></td>');
	patch3c = patch3c + ('<td style="text-align:right;"><span style="font-size:20pt">RESET</span><hr class="hr-thin" /><i style="color:grey">Pull back all ' + prop + " from mining</i></td>");
	patch3c = patch3c + "</tr>";
	patch3c = patch3c + "</table>";
	patch3c = patch3c + "</div>";
	patch3c = patch3c + "<h4 style='text-align:center'>Total Resources Collected</h4>";
	var _a_ = false;
	var i = 0;
	for (; i < prefixes.length; i++)
	{
		if (getItem(prefixes[i] + capitalizeFirstLetter(prop)))
		{
			patch3c = patch3c + ("<div style='border:1px solid black; background-color:grey;padding:5px 10px;color:white; display:inline-block;margin:10px;'>" + "<img src='images/" + prefixes[i] + ".png' class='img-40' /> " + formatNumber(getItem(prefixes[i] + capitalizeFirstLetter(prop))) + "</div>");
			_a_ = true;
		}
	}
	if (!_a_)
	{
		patch3c = patch3c + "<i style='color:grey;font-size:10pt'>(none)<br /><br /><b>Close this dialogue and select an ore below to mine.</b></i>";
	}
	confirmDialogue("none", patch3c, "Close", "", "");
};
