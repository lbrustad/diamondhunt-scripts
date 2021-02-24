'use strict';

function generateHTMLGeneralTooltip(terria, url, name, pix_base)
{
	var pix_color = "";
	pix_color = pix_color + ("<div id='" + terria + "' style='display:none;'>");
	if (url != "" || name != "")
	{
		pix_color = pix_color + ("<h2>" + name + "</h2>");
		pix_color = pix_color + "<hr class='hr-thin' />";
	}
	pix_color = pix_color + pix_base;
	if (url != "")
	{
		pix_color = pix_color + getTooltipSellsForLabel(url);
	}
	pix_color = pix_color + "</div>";
	return pix_color;
};
