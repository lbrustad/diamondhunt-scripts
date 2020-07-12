/**
 * chat extracted from ../../deobfuscated/bundle.js at line 1017-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/chat.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function chat(data)
{
	var _0x1C75E = data.split("~");
	var _0x1CEDC = _0x1C75E[0];
	var _0x1CEB2 = _0x1C75E[1];
	var _0x1CE88 = _0x1C75E[2];
	var _0x1CE6C = _0x1C75E[3];
	var _0x1CEA4 = _0x1C75E[4];
	var _0x1C788 = _0x1C75E[5];
	var _0x1CE7A = "";
	if (_0x1CE6C != "none")
	{
		_0x1CE7A = " <img src=\'images/" + _0x1CE6C + ".png\' style=\'vertical-align:middle\' width=\'30px\' height=\'30px\' /> "
	};
	var _0x1CE96 = "";
	var _0x1CECE = "";
	if (_0x1CE88 != "none")
	{
		tagTitle = _0x1CE88;
		switch (_0x1CE88)
		{
		case "Superdonor":
			tagTitle = "Super donor";
			break;
		case "yell":
			tagTitle = "Server Message";
			break;
		case "Ultradonor":
			tagTitle = "Ultra donor";
			break
		};
		_0x1CE96 = " <span class=\'chat-tag-" + _0x1CE88 + "\'>" + tagTitle + "</span> ";
		switch (_0x1CE88)
		{
		case "Dev":
			_0x1CECE = "style=\'color:#808000\'";
			break;
		case "Financier":
			_0x1CECE = "style=\'color:#007a99\'";
			break;
		case "Investor":
			_0x1CECE = "style=\'color:#cc66ff\'";
			break;
		case "Moderator":
			_0x1CECE = "style=\'color:grey;\'";
			break;
		case "yell":
			_0x1CECE = "style=\'color:blue;\'";
			break
		}
	};
	var _0x1CEC0 = _0x1CEA4.split(" ");
	msg = "";
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CEC0.length; _0x1C6B6++)
	{
		if (isValidURL(_0x1CEC0[_0x1C6B6]))
		{
			msg += convertStringToURL(_0x1CEC0[_0x1C6B6]) + " "
		}
		else
		{
			msg += sanitize(_0x1CEC0[_0x1C6B6]) + " "
		}
	};
	_0x1CEA4 = removeChars(msg);
	if (_0x1C788 == "error")
	{
		htmlOutput = "<span style=\'color:grey\'>" + _0x1CEA4 + "</span>"
	}
	else
	{
		if (_0x1C788 == "pm_from")
		{
			_0x1CECE = "style=\'color:purple\'";
			htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x1CE7A + _0x1CE96 + "<span " + _0x1CECE + "> [PM from " + _0x1CEDC + "] " + _0x1CEA4 + "</span>"
		}
		else
		{
			if (_0x1C788 == "pm_to")
			{
				_0x1CECE = "style=\'color:purple\'";
				htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x1CE7A + _0x1CE96 + "<span " + _0x1CECE + "> [Sent to " + _0x1CEDC + "] " + _0x1CEA4 + "</span>"
			}
			else
			{
				if (_0x1CE88 == "yell")
				{
					htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x1CE7A + _0x1CE96 + "<span " + _0x1CECE + "><b>" + _0x1CEA4 + "</b></span>"
				}
				else
				{
					if (_0x1CE88 == "Investor")
					{
						htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x1CE7A + "<img src=\'images/investor.gif\' style=\'vertical-align:middle;\'  /> " + "<span " + _0x1CECE + "><b>" + _0x1CEDC + " (" + _0x1CEB2 + "): </b>" + _0x1CEA4 + "</span>"
					}
					else
					{
						htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x1CE7A + _0x1CE96 + "<span " + _0x1CECE + "><b>" + _0x1CEDC + " (" + _0x1CEB2 + "): </b>" + _0x1CEA4 + "</span>"
					}
				}
			}
		}
	};
	var _0x1CE5E = document.getElementById("chat-area-view");
	if (_0x1CE5E.innerHTML.length >= 60000)
	{
		_0x1CE5E.innerHTML = _0x1CE5E.innerHTML.substr(30000, _0x1CE5E.innerHTML.length)
	};
	$(_0x1CE5E).append("<div>" + htmlOutput + "</div>");
	if (global_autoscrollChat)
	{
		$(_0x1CE5E).scrollTop($(_0x1CE5E)[0].scrollHeight)
	}
}