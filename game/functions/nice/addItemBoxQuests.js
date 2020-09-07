'use strict';

function addItemBoxQuests(params, courseId, canCreateDiscussions, inStyles, _wid_attr, data, libraryName, fileName)
{
	var id = document.getElementById(libraryName);
	var t = document.createElement("div");
	var _a_ = false;
	if (getItem(params + "Quest") == -1)
	{
		_a_ = true;
		t.setAttribute("class", "quest-button-completed");
	}
	else
	{
		t.setAttribute("class", "quest-button");
	}
	t.setAttribute("id", "quest-box-" + params);
	t.setAttribute("onclick", "sendBytes('QUEST=" + params + "~0')");
	var thisSystemDiv = document.createElement("div");
	if (getItem("questPoints") < fileName)
	{
		var image = getImage("images/questPoints_lock.png", "quest-x-" + stylesLimit);
		image.setAttribute("class", "img-30");
		t.setAttribute("class", "quest-button-locked");
		thisSystemDiv.appendChild(image);
		thisSystemDiv.innerHTML += " You need at least " + getItem("questPoints") + "/" + fileName + " quest points to unlock this quest.";
		t.setAttribute("onclick", "confirmDialogue('images/questPoints_lock.png', 'You need to complete other quests to earn quest points before starting this one.', 'Exit', '', '')");
	}
	else
	{
		thisSystemDiv = document.createElement("div");
		var userId = "";
		if (_a_)
		{
			userId = "<img src='images/check.png' class='img-20' />";
		}
		thisSystemDiv.innerHTML = courseId + " " + userId + "<br /><span style='font-size:10pt;color:black;'>" + canCreateDiscussions + "<br /><br />" + data + "</span>";
		thisSystemDiv.setAttribute("style", "font-size:16pt;");
		var detectBlock = document.createElement("div");
		detectBlock.setAttribute("style", "float:right;font-size:10pt;color:purple;text-align:right;");
		var stylesLimit = 0;
		for (; stylesLimit < inStyles.length; stylesLimit++)
		{
			image = getImage("images/x.png", params + "_quest-x-" + stylesLimit);
			image.setAttribute("class", "img-15");
			if (_wid_attr[stylesLimit])
			{
				image = getImage("images/check_dark.png", params + "_quest-check-" + stylesLimit);
				image.setAttribute("class", "img-15");
			}
			var span = document.createElement("span");
			span.innerHTML = inStyles[stylesLimit] + " ";
			if (_wid_attr[stylesLimit] != null && getItem(params + "Quest") != -1)
			{
				span.appendChild(image);
			}
			span.appendChild(document.createElement("br"));
			detectBlock.appendChild(span);
		}
		t.appendChild(detectBlock);
	}
	t.appendChild(thisSystemDiv);
	id.appendChild(t);
};
