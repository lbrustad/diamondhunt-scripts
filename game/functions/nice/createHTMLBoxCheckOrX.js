'use strict';

function createHTMLBoxCheckOrX(name, count, bounceEnabled)
{
	var _a_ = "html-box-check-or-x";
	var row_id = "<img src='images/x.png' class='img-30' />";
	if (getItem(name) >= count)
	{
		row_id = "<img src='images/check.png' class='img-30' />";
		_a_ = "html-box-check-or-check";
	}
	var DEBUG_TXT = "";
	DEBUG_TXT = DEBUG_TXT + ("<div class=" + _a_ + ">");
	DEBUG_TXT = DEBUG_TXT + ("<img src='images/" + name + ".png' class='img-50' /> " + formatNumber(count) + " " + bounceEnabled + row_id);
	DEBUG_TXT = DEBUG_TXT + "</div>";
	return DEBUG_TXT;
};
