'use strict';

function onKeyUpWildInputDialogue(set, array, vt, s, mult)
{
	var _a_ = set[0] == "xp_icon";
	document.getElementById("dialogue-wild-htmlboxes-area");
	var testing_output = "";
	var i = 0;
	for (; i < array.length; i++)
	{
		var _b_ = "html-box-check-or-check";
		var val = array[i] * mult;
		var num = formatNumber(val);
		if (val == 0)
		{
			num = "???";
		}
		if (set[i] == "magicXp")
		{
			testing_output = testing_output + ("<div style='border:1px solid purple;display:inline-block;background-color:#ff99cc;font-size:16pt' class=" + _b_ + ">");
			testing_output = testing_output + ("<img src='images/" + "magicSkill" + ".png' class='img-50' /> +" + formatNumber(num) + " XP");
			testing_output = testing_output + "</div>";
		}
		else
		{
			testing_output = testing_output + ("<div class=" + _b_ + ">");
			testing_output = testing_output + ("<img src='images/" + set[i] + ".png' class='img-50' /> +" + formatNumber(num));
			testing_output = testing_output + "</div>";
		}
	}
	i = 0;
	for (; i < vt.length; i++)
	{
		_b_ = "html-box-check-or-x";
		var ry = "<img src='images/x.png' class='img-20' />";
		var val = s[i] * mult;
		if (_a_ && vt[i] == "stardust")
		{
			val = s[i] * array[0] * mult;
		}
		if (getItem(vt[i]) >= val)
		{
			ry = "<img src='images/check.png' class='img-20' />";
			_b_ = "html-box-check-or-check";
		}
		testing_output = testing_output + ("<div class=" + _b_ + ">");
		testing_output = testing_output + ("<img src='images/" + vt[i] + ".png' class='img-50' /> " + formatNumber(val) + " " + ry);
		testing_output = testing_output + "</div>";
	}
	document.getElementById("dialogue-wild-htmlboxes-area").innerHTML = testing_output;
};
