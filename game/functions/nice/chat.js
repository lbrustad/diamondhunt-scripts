'use strict';

function chat(type)
{
	var localStorage = type.split("~");
	var stickiesArray = localStorage[0];
	var randomPlaylistConfigStr = localStorage[1];
	var icon = localStorage[2];
	var mode = localStorage[3];
	var key = localStorage[4];
	var parsed = localStorage[5];
	var _a_ = false;
	if (global_friendsAndIgnoreList[stickiesArray] != null)
	{
		if (global_friendsAndIgnoreList[stickiesArray] == "ignore")
		{
			return;
		}
		if (global_friendsAndIgnoreList[stickiesArray] == "friend")
		{
			_a_ = true;
		}
	}
	var annotation = "";
	if (mode != "none")
	{
		annotation = " <img src='images/" + mode + ".png' style='vertical-align:middle' width='30px' height='30px' /> ";
	}
	var pid = "";
	var th_field = "";
	if (icon != "none")
	{
		tagTitle = icon;
		switch (icon)
		{
		case "Superdonor":
			tagTitle = "Super donor";
			break;
		case "yell":
			tagTitle = "Server Message";
			break;
		case "Ultradonor":
			tagTitle = "Ultra donor";
			break;
		}
		pid = " <span class='chat-tag-" + icon + "'>" + tagTitle + "</span> ";
		switch (icon)
		{
		case "Dev":
			th_field = "style='color:#808000'";
			break;
		case "Financier":
			th_field = "style='color:#007a99'";
			break;
		case "Investor":
			th_field = "style='color:#cc66ff'";
			break;
		case "InvestorPlus":
			th_field = "style='color:#00a3cc'";
			break;
		case "Moderator":
			th_field = "style='color:grey;'";
			break;
		case "yell":
			th_field = "style='color:blue;'";
			break;
		}
	}
	var lines = key.split(" ");
	msg = "";
	var i = 0;
	for (; i < lines.length; i++)
	{
		if (isValidURL(lines[i]))
		{
			msg = msg + (convertStringToURL(lines[i]) + " ");
		}
		else
		{
			msg = msg + (sanitize(lines[i]) + " ");
		}
	}
	key = removeChars(msg);
	if (parsed == "error")
	{
		htmlOutput = "<span style='color:grey'>" + key + "</span>";
	}
	else
	{
		if (parsed == "pm_from")
		{
			th_field = "style='color:purple'";
			htmlOutput = "<span style='color:grey'>" + getTimeFetch() + "</span>" + annotation + pid + "<span " + th_field + "> [PM from " + stickiesArray + "] " + key + "</span>";
		}
		else
		{
			if (parsed == "pm_to")
			{
				th_field = "style='color:purple'";
				htmlOutput = "<span style='color:grey'>" + getTimeFetch() + "</span>" + annotation + pid + "<span " + th_field + "> [Sent to " + stickiesArray + "] " + key + "</span>";
			}
			else
			{
				if (icon == "yell")
				{
					htmlOutput = "<span style='color:grey'>" + getTimeFetch() + "</span>" + annotation + pid + "<span " + th_field + "><b>" + key + "</b></span>";
				}
				else
				{
					var osecs = "";
					if (_a_)
					{
						osecs = " <img src='images/smileIcon.svg' style='vertical-align:middle' width='30px' height='30px' /> ";
					}
					if (icon == "Investor")
					{
						htmlOutput = "<span style='color:grey'>" + getTimeFetch() + osecs + "</span>" + annotation + "<img src='images/investor.gif' style='vertical-align:middle;'  /> " + "<span " + th_field + "><b oncontextmenu='return rightClicksChatUsername(this, \"" + stickiesArray + "\")' onclick='clicksChatUsername(\"" + stickiesArray + "\") class='chat-username'>" + stickiesArray + " (" + randomPlaylistConfigStr + "): </b>" + key + "</span>";
					}
					else
					{
						if (icon == "InvestorPlus")
						{
							htmlOutput = "<span style='color:grey'>" + getTimeFetch() + osecs + "</span>" + annotation + "<img src='images/investorPlus.gif' style='vertical-align:middle;'  /> " + "<span " + th_field + "><b oncontextmenu='return rightClicksChatUsername(this, \"" + stickiesArray + "\")' onclick='clicksChatUsername(\"" + stickiesArray + "\") class='chat-username'>" + stickiesArray + " (" + randomPlaylistConfigStr + "): </b>" + key + "</span>";
						}
						else
						{
							htmlOutput = "<span style='color:grey'>" + getTimeFetch() + osecs + "</span>" + annotation + pid + "<span " + th_field + "><b class='chat-username' oncontextmenu='return rightClicksChatUsername(this, \"" + stickiesArray + "\")' onclick='clicksChatUsername\"" + stickiesArray + "\")'>" + stickiesArray + " (" + randomPlaylistConfigStr + "): </b>" + key + "</span>";
						}
					}
				}
			}
		}
	}
	var container = document.getElementById("chat-area-view");
	if (container.innerHTML.length >= 60000)
	{
		container.innerHTML = container.innerHTML.substr(30000, container.innerHTML.length);
	}
	$(container).append("<div>" + htmlOutput + "</div>");
	if (global_autoscrollChat)
	{
		$(container).scrollTop($(container)[0].scrollHeight);
	}
};
