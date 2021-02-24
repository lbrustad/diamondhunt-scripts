'use strict';

function refreshBoundOrbs()
{
	var template = document.getElementById("pirate-section");
	var attributeTemplate = "<center>";
	var _a_ = "background-image:url(images/background19.jpg)";
	var pos = "";
	pos = "blueFurnaceOrb";
	if (getItem(pos + "Bound") > 0)
	{
		attributeTemplate = attributeTemplate + ("<div class='mobile-style' style='" + _a_ + ";max-height:300px;height:300px;vertical-align:text-top'>");
		attributeTemplate = attributeTemplate + ("<img src='images/" + pos + ".png' />");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + getItemName(pos).toUpperCase());
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:grey;font-size:12pt;'>" + getOrbDescription(pos) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	pos = "blueWoodcuttingOrb";
	if (getItem(pos + "Bound") > 0)
	{
		attributeTemplate = attributeTemplate + ("<div class='mobile-style' style='" + _a_ + ";max-height:300px;height:300px;vertical-align:text-top'>");
		attributeTemplate = attributeTemplate + ("<img src='images/" + pos + ".png' />");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + getItemName(pos).toUpperCase());
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:grey;font-size:12pt;'>" + getOrbDescription(pos) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	pos = "blueOreOrb";
	if (getItem(pos + "Bound") > 0)
	{
		attributeTemplate = attributeTemplate + ("<div class='mobile-style' style='" + _a_ + ";max-height:300px;height:300px;vertical-align:text-top'>");
		attributeTemplate = attributeTemplate + ("<img src='images/" + pos + ".png' />");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + getItemName(pos).toUpperCase());
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:grey;font-size:12pt;'>" + getOrbDescription(pos) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	pos = "blueOilWellOrb";
	if (getItem(pos + "Bound") > 0)
	{
		attributeTemplate = attributeTemplate + ("<div class='mobile-style' style='" + _a_ + ";max-height:300px;height:300px;vertical-align:text-top'>");
		attributeTemplate = attributeTemplate + ("<img src='images/" + pos + ".png' />");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + getItemName(pos).toUpperCase());
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:grey;font-size:12pt;'>" + getOrbDescription(pos) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	pos = "blueManaOrb";
	if (getItem(pos + "Bound") > 0)
	{
		attributeTemplate = attributeTemplate + ("<div class='mobile-style' style='" + _a_ + ";max-height:300px;height:300px;vertical-align:text-top'>");
		attributeTemplate = attributeTemplate + ("<img src='images/" + pos + ".png' />");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + getItemName(pos).toUpperCase());
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:grey;font-size:12pt;'>" + getOrbDescription(pos) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	_a_ = "background-image:url(images/background20.jpg)";
	pos = "greenFishingOrb";
	if (getItem(pos + "Bound") > 0)
	{
		attributeTemplate = attributeTemplate + ("<div class='mobile-style' style='" + _a_ + ";max-height:300px;height:300px;vertical-align:text-top'>");
		attributeTemplate = attributeTemplate + ("<img src='images/" + pos + ".png' />");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + getItemName(pos).toUpperCase());
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:grey;font-size:12pt;'>" + getOrbDescription(pos) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	pos = "greenRocketOrb";
	if (getItem(pos + "Bound") > 0)
	{
		attributeTemplate = attributeTemplate + ("<div class='mobile-style' style='" + _a_ + ";max-height:300px;height:300px;vertical-align:text-top'>");
		attributeTemplate = attributeTemplate + ("<img src='images/" + pos + ".png' />");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + getItemName(pos).toUpperCase());
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:grey;font-size:12pt;'>" + getOrbDescription(pos) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	pos = "greenOilFactoryOrb";
	if (getItem(pos + "Bound") > 0)
	{
		attributeTemplate = attributeTemplate + ("<div class='mobile-style' style='" + _a_ + ";max-height:300px;height:300px;vertical-align:text-top'>");
		attributeTemplate = attributeTemplate + ("<img src='images/" + pos + ".png' />");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + getItemName(pos).toUpperCase());
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:grey;font-size:12pt;'>" + getOrbDescription(pos) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	pos = "greenShinyMonsterOrb";
	if (getItem(pos + "Bound") > 0)
	{
		attributeTemplate = attributeTemplate + ("<div class='mobile-style' style='" + _a_ + ";max-height:300px;height:300px;vertical-align:text-top'>");
		attributeTemplate = attributeTemplate + ("<img src='images/" + pos + ".png' />");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + getItemName(pos).toUpperCase());
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:grey;font-size:12pt;'>" + getOrbDescription(pos) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	pos = "greenShinyWoodcuttingOrb";
	if (getItem(pos + "Bound") > 0)
	{
		attributeTemplate = attributeTemplate + ("<div class='mobile-style' style='" + _a_ + ";max-height:300px;height:300px;vertical-align:text-top'>");
		attributeTemplate = attributeTemplate + ("<img src='images/" + pos + ".png' />");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + getItemName(pos).toUpperCase());
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:grey;font-size:12pt;'>" + getOrbDescription(pos) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	pos = "greenShinyFarmingOrb";
	if (getItem(pos + "Bound") > 0)
	{
		attributeTemplate = attributeTemplate + ("<div class='mobile-style' style='" + _a_ + ";max-height:300px;height:300px;vertical-align:text-top'>");
		attributeTemplate = attributeTemplate + ("<img src='images/" + pos + ".png' />");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:orange;font-size:18pt;font-weight:bold;text-align:right;'>" + getItemName(pos).toUpperCase());
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + ("<span style='color:grey;font-size:12pt;'>" + getOrbDescription(pos) + "</span>");
		attributeTemplate = attributeTemplate + "<br />";
		attributeTemplate = attributeTemplate + "</span>";
		attributeTemplate = attributeTemplate + "</div>";
	}
	attributeTemplate = attributeTemplate + "</center>";
	if (attributeTemplate == "<center></center>")
	{
		attributeTemplate = "<center>You do not have any orbs.</center>";
	}
	template.innerHTML = attributeTemplate;
};
