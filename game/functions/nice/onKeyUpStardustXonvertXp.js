'use strict';

function onKeyUpStardustXonvertXp()
{
	var code_content = document.getElementById("dialogue-stardustTool2-item-hidden").value;
	var range = parseInt(document.getElementById("dialogue-stardustTool2-input").value);
	var orderby_col = document.getElementById("dialogue-stardustTool2-tool-hidden").value;
	var rand = parseInt(document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value);
	var countWrap = document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value;
	if (isNaN(range))
	{
		document.getElementById("dialogue-stardustTool2-section-area").innerHTML = "";
		return;
	}
	var position = 0;
	var classNames_1 = global_stardustToolsMap[orderby_col].arrayItemsToConvertArray;
	var positions_in_group = global_stardustToolsMap[orderby_col].arrayItemsConvetXpArray;
	var _i = 0;
	for (; _i < classNames_1.length; _i++)
	{
		if (classNames_1[_i] == code_content)
		{
			position = positions_in_group[_i];
			break;
		}
	}
	var lon_string = "";
	var scrollFarAfter = rand * range * position;
	var to = range * position;
	lon_string = createHTMLBoxCheckOrXCollection([code_content, "stardust"], [range, scrollFarAfter], ["", ""]);
	document.getElementById("dialogue-stardustTool2-section-area").innerHTML = "<span class='html-box-check-or-check' style='border:1px solid purple;display:inline-block;background-color:#ff99cc;font-size:16pt'><img src='images/" + countWrap + "Skill.png' class='img-50' /> +" + formatNumber(position * range) + " XP</span>" + lon_string;
};
