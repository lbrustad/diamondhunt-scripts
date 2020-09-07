'use strict';

function generateHTMLToSelectOreFurnace(preventPushState, id)
{
	if (getItem(id) == 0 && !(id == "copper"))
	{
		return "";
	}
	var type = getOilCost(id);
	var _a_ = "images/oil_lighter.png";
	if (type == 0)
	{
		type = getCharcoalCost(id);
		_a_ = "images/charcoal_light.png";
	}
	document.getElementById("dialogue-furnace-enterOre").innerHTML = "";
	document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = "";
	var msg = "";
	msg = msg + ("<div onclick='openFurnaceDialogue2(\"" + preventPushState + '","' + id + "\")' class='select-ore-furnace'>" + getItemName(id).toUpperCase() + "<br />");
	msg = msg + ("<img src='images/" + id + ".png' class='img-100' />");
	msg = msg + "<hr class='hr-thin' />";
	msg = msg + ("<img src='" + _a_ + "' class='img-30' /> " + type);
	msg = msg + "</div>";
	return msg;
};
