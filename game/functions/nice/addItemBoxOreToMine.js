'use strict';

function addItemBoxOreToMine(src, dim, max)
{
	var summaryHtml = "";
	var img = getImage("images/" + src + ".png", "addItemBoxOreToMine_" + src);
	summaryHtml = summaryHtml + ("<div onclick='clicksOreToMine(\"" + src + "\")' class='div-add-ore-to-mine' class='mining-ore-to-mine-box'>");
	summaryHtml = summaryHtml + "<table class='table-add-ore-to-mine' width='100%'>";
	summaryHtml = summaryHtml + "<tr>";
	summaryHtml = summaryHtml + ("<td style='font-size:22pt'>" + dim + "</td>");
	summaryHtml = summaryHtml + "</tr>";
	summaryHtml = summaryHtml + "<tr>";
	summaryHtml = summaryHtml + "<td>";
	if (getSkillLevel("mining") < max)
	{
		summaryHtml = summaryHtml + "<img src='images/x.png' class='img-150' style='z-index:1;position:absolute;' />";
	}
	summaryHtml = summaryHtml + ("<img src='" + img.src + "' class='img-150' />");
	summaryHtml = summaryHtml + "</td>";
	summaryHtml = summaryHtml + "</tr>";
	summaryHtml = summaryHtml + "<tr>";
	if (getSkillLevel("mining") < max)
	{
		summaryHtml = summaryHtml + ("<td style='color:red'>Level " + max + " Mining</td>");
	}
	summaryHtml = summaryHtml + ('<td style="height:50px;" id="' + src + '-mining-assigned-td"></td>');
	summaryHtml = summaryHtml + "</tr>";
	summaryHtml = summaryHtml + "</table>";
	summaryHtml = summaryHtml + "</div>";
	$("#item-section-ore-to-mine-1").append(summaryHtml);
	global_oreLevels[src] = new Ore(src, max);
};
