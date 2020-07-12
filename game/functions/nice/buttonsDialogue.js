'use strict';

function buttonsDialogue(url, prev, current, position, animate, data, stats, params, _, val, expr, context, file, boundary, type, entry, i, widgetWithInputTemplate)
{
	if (url == "none")
	{
		document.getElementById("dialogue-fancy-button-div-1").style.display = "none";
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-1").style.display = "";
	}
	if (prev == "none")
	{
		document.getElementById("dialogue-fancy-button-div-2").style.display = "none";
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-2").style.display = "";
	}
	if (current == "none")
	{
		document.getElementById("dialogue-fancy-button-div-3").style.display = "none";
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-3").style.display = "";
	}
	if (position == "none")
	{
		document.getElementById("dialogue-fancy-button-div-4").style.display = "none";
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-4").style.display = "";
	}
	var key = 1;
	for (; key <= 4; key++)
	{
		var value = window["btnImage" + key];
		var callback = window["btnTitle" + key];
		var text = window["btnDesc" + key];
		var result = window["cmd" + key];
		if (key == 1)
		{
			value = url;
			callback = animate;
			text = _;
			result = file;
		}
		else
		{
			if (key == 2)
			{
				value = prev;
				callback = data;
				text = val;
				result = boundary;
			}
			else
			{
				if (key == 3)
				{
					value = current;
					callback = stats;
					text = expr;
					result = type;
				}
				else
				{
					if (key == 4)
					{
						value = position;
						callback = params;
						text = context;
						result = entry;
					}
				}
			}
		}
		if (value != "none")
		{
			document.getElementById("dialogue-fancy-button-div-" + key).style.display = "";
			document.getElementById("dialogue-fancy-button-img-" + key).src = value;
			document.getElementById("dialogue-fancy-button-title-" + key).innerHTML = callback;
			document.getElementById("dialogue-fancy-button-desc-" + key).innerHTML = text;
			document.getElementById("dialogue-fancy-button-div-" + key).setAttribute("onclick", "sendBytes('" + result + "');closeDialogue('dialogue-fancy-buttons')");
		}
	}
	document.getElementById("dialogue-fancy-buttons-top-div").innerHTML = i;
	document.getElementById("dialogue-fancy-buttons-bottom-div").innerHTML = widgetWithInputTemplate;
	openDialogue("dialogue-fancy-buttons");
};
