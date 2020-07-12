'use strict';

function generateHTMLToSelectToolConversionItem(end_r, step, outPadding)
{
	var pix_color = "";
	if (getItem(step) > 0)
	{
		pix_color = pix_color + ("<div onclick='openStardustToolDialogue2(\"" + end_r + '","' + step + '","' + outPadding + "\");closeDialogue(\"dialogue-stardust-tools\")' class='select-ore-furnace'>" + getItemName(step).toUpperCase() + "<br />");
		pix_color = pix_color + ("<img src='images/" + step + ".png' class='img-100' />");
		pix_color = pix_color + "<hr class='hr-thin' />";
		pix_color = pix_color + ("<img src='images/miningSkill_white.png' class='img-30' /> <span style='color:orange'>XP per item:</span> " + parseFloat(outPadding));
		pix_color = pix_color + "</div>";
	}
	return pix_color;
};
