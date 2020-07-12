'use strict';

function addItemBoxQuests(params, url, indexNumber, inStyles, listExpression, h, name, res)
{
	var csBox = document.getElementById(name);
	var t = document.createElement("div");
	if (getItem(params + "Quest") == -1)
	{
		t.setAttribute("class", "quest-button-completed");
	}
	else
	{
		t.setAttribute("class", "quest-button");
	}
	t.setAttribute("id", "quest-box-" + params);
	t.setAttribute("onclick", "sendBytes('QUEST=" + params + "~0')");
	var output = document.createElement("div");
	if (getItem("questPoints") < res)
	{
		var image = getImage("images/questPoints.png", "quest-x-" + stylesLimit);
		image.setAttribute("class", "img-30");
		t.setAttribute("class", "quest-button-locked");
		output.appendChild(image);
		output.innerHTML += " REQUIRED QUEST POINTS: " + res;
		t.setAttribute("onclick", "confirmDialogue('images/questPoints.png', 'You need to complete other quests to earn quest points before starting this one.', 'Exit', '', '')");
	}
	else
	{
		output = document.createElement("div");
		output.innerHTML = url + "<br /><span style='font-size:10pt;color:black;'>" + indexNumber + "<br /><br />" + h + "</span>";
		output.setAttribute("style", "font-size:16pt;");
		var thisSystemDiv = document.createElement("div");
		thisSystemDiv.setAttribute("style", "float:right;font-size:10pt;color:purple;text-align:right;");
		var stylesLimit = 0;
		for (; stylesLimit < inStyles.length; stylesLimit++)
		{
			image = getImage("images/x.png", params + "_quest-x-" + stylesLimit);
			image.setAttribute("class", "img-15");
			if (listExpression[stylesLimit])
			{
				image = getImage("images/check_dark.png", params + "_quest-check-" + stylesLimit);
				image.setAttribute("class", "img-15");
			}
			var span = document.createElement("span");
			span.innerHTML = inStyles[stylesLimit] + " ";
			if (listExpression[stylesLimit] != null && getItem(params + "Quest") != -1)
			{
				span.appendChild(image);
			}
			span.appendChild(document.createElement("br"));
			thisSystemDiv.appendChild(span);
		}
		t.appendChild(thisSystemDiv);
	}
	t.appendChild(output);
	csBox.appendChild(t);
};
