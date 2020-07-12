'use strict';

function generateHTMLToSelectOreFurnace(end_r, step)
{
	document.getElementById("dialogue-furnace-enterOre").innerHTML = "";
	document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = "";
	var pix_color = "";
	pix_color = pix_color + ("<div onclick='openFurnaceDialogue2(\"" + end_r + '","' + step + "\")' class='select-ore-furnace'>" + getItemName(step).toUpperCase() + "<br />");
	pix_color = pix_color + ("<img src='images/" + step + ".png' class='img-100' />");
	pix_color = pix_color + "<hr class='hr-thin' />";
	pix_color = pix_color + ("<img src='images/oil_lighter.png' class='img-30' /> " + getOilCost(step));
	pix_color = pix_color + "</div>";
	return pix_color;
};
