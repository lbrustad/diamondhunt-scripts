'use strict';

function refreshIgnoreList(fillMethod)
{
	if (fillMethod == "none")
	{
		document.getElementById("dialogue-ignore-list-section").innerHTML = "<span style='color:grey'>(No ignores yet)</span>";
	}
	else
	{
		var pix_color = "";
		pix_color = pix_color + "<center><table style='border:1px solid black;border-radius:8pt;background-color:#e6ffe6;' width='80%'>";
		pix_color = pix_color + "<tr>";
		pix_color = pix_color + ("<th style='color:black;'>" + "Name" + "</th>");
		pix_color = pix_color + ("<th style='color:black;'>" + "Actions" + "</th>");
		pix_color = pix_color + "</tr>";
		var crossfilterable_layers = fillMethod.split("~");
		var layer_i = 0;
		for (; layer_i < crossfilterable_layers.length; layer_i++)
		{
			pix_color = pix_color + "<tr>";
			var layer = crossfilterable_layers[layer_i];
			layer_i++;
			pix_color = pix_color + ("<td class='center'  style='color:black;'>" + layer + "</td>");
			pix_color = pix_color + ("<td class='center' >" + "<img onclick='sendBytes(\"REMOVE_IGNORE=" + layer + "\")' class='x-button img-20' src='images/x.png' />" + "</td>");
			pix_color = pix_color + "</tr>";
		}
		pix_color = pix_color + "</table></center>";
		document.getElementById("dialogue-ignore-list-section").innerHTML = pix_color;
	}
	openDialogue("dialogue-ignore-list");
};
