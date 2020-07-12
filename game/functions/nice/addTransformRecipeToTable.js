'use strict';

function addTransformRecipeToTable(d, lazyLayout)
{
	var name = d.itemName;
	var value = d.stardust;
	var L = d.level;
	var mix = d.output1;
	var hardCache = d.output2;
	var bugs = d.output1Amount;
	var dlen = d.output2Amount;
	value = d.stardust;
	var namespace = d.obtainedItemVar;
	var percentage = d.xp;
	if (getItem(namespace) == 0)
	{
		return '<tr onclick=\'confirmDialogue("images/convertMagic.png","You need to have obtained this item yourself before you are able to transform it.","Close","","")\'><td colspan=\'8\' style=\'font-size:70pt;color:white;background-color:#1f2e2e\'>???</td></tr>';
	}
	var _a_ = true;
	var output = "<td>" + getItemName(name) + "</td>";
	output = output + ("<td>" + "<img src='images/" + name + ".png' class='img-100' /> " + "</td>");
	if (getLevel(getItem("magicXp")) >= L)
	{
		output = output + ("<td style='color:green'>" + L + "</td>");
	}
	else
	{
		output = output + ("<td style='color:red'>" + L + "</td>");
		_a_ = false;
	}
	if (getItem(name) == 0)
	{
		_a_ = false;
	}
	output = output + "<td>";
	var i = 0;
	for (; i < mix.length; i++)
	{
		var item = mix[i];
		output = output + ("<span title='" + getItemName(item) + "'>" + "<img src='images/" + item + ".png' class='img-50' /> " + bugs[i] + "</span>");
		output = output + "<br />";
	}
	output = output + "</td>";
	output = output + "<td>";
	i = 0;
	for (; i < hardCache.length; i++)
	{
		item = hardCache[i];
		output = output + ("<span title='" + getItemName(item) + "'>" + "<img src='images/" + item + ".png' class='img-50' />  " + dlen[i] + "</span>");
		output = output + "<br />";
	}
	output = output + "</td>";
	var _b_ = "style='color:green'";
	if (value > getItem("stardust"))
	{
		_a_ = false;
		_b_ = "style='color:red'";
	}
	output = output + "<td>";
	output = output + ("<img src='images/stardustIcon.png' class='img-30' /> " + "<span " + _b_ + ">" + formatNumber(value) + "</span>");
	output = output + "</td>";
	var _c_ = "style='background-color:#b3ffb3;'";
	if (!_a_)
	{
		_c_ = "style='background-color:#ffc2b3;'";
	}
	output = output + "<td>";
	output = output + (formatNumber(percentage) + " XP");
	output = output + "</td>";
	output = output + "<td>";
	output = output + formatNumber(getItem(name + "Transformed"));
	output = output + "</td>";
	var _d_ = "onclick='transformItem(\"" + name + '","' + value + '", "' + percentage + "\")'";
	return "<tr " + _d_ + " " + _c_ + ">" + output + "</tr>";
};
