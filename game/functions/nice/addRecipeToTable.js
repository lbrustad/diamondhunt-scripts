'use strict';

function addRecipeToTable(item, changeMeta)
{
	var itemName = item.itemName;
	var skill = item.skill;
	var skillLevel = item.skillLevel;
	var route = item.recipe;
	var micropost = item.recipeCost;
	var intSetSource = item.isMultiCraft;
	var releaseAuthor = item.itemNameDisplay;
	var workshopDesc = item.description;
	var _a_ = true;
	var _b_ = "<td>" + releaseAuthor + "</td>";
	_b_ = _b_ + ("<td>" + "<img src='images/" + itemName + ".png' class='img-100' /> " + "</td>");
	if (getLevel(getItem(item.skill[0] + "Xp")) >= skillLevel)
	{
		_b_ = _b_ + ("<td style='color:green'>" + skillLevel + "</td>");
	}
	else
	{
		_b_ = _b_ + ("<td style='color:red'>" + skillLevel + "</td>");
		_a_ = false;
	}
	_b_ = _b_ + "<td>";
	var i = 0;
	for (; i < route.length; i++)
	{
		var step = route[i];
		var totalAssertions = micropost[i];
		var _c_ = getItem(step) >= totalAssertions;
		var _d_ = "style='color:green'";
		if (!_c_)
		{
			_a_ = false;
			_d_ = "style='color:red'";
		}
		if (step != "vial" && step != "largeVial")
		{
			_b_ = _b_ + ("<span title='" + getItemName(step) + "' " + _d_ + ">" + "<img src='images/" + step + ".png' class='img-50' /> " + formatNumber(totalAssertions) + " </span>");
			_b_ = _b_ + "<br />";
		}
	}
	_b_ = _b_ + "</td>";
	_b_ = _b_ + ("<td>" + workshopDesc + "</td>");
	if (skill[0] == "cooking")
	{
		_b_ = _b_ + ("<td>" + formatTime(item.timeToPrep) + "</td>");
	}
	var _e_ = "style='background-color:#b3ffb3;'";
	if (!_a_)
	{
		_e_ = "style='background-color:#ffc2b3;'";
	}
	var _f_ = "onclick='craftItem(\"" + itemName + '", ' + intSetSource + ',"' + releaseAuthor + '","' + route + '"' + micropost + ", \")'";
	return "<tr " + _f_ + " " + _e_ + ">" + _b_ + "</tr>";
};
