/**
 * chat extracted from ../../deobfuscated/bundle.js at line 1577-1717
 *
 * If this file doesn't contain a function, there is an error in ../raw/chat.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function chat(_0x14DB0)
{
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x160F7 = _0x14DD3[0];
	var _0x1606B = _0x14DD3[1];
	var _0x15FDF = _0x14DD3[2];
	var _0x15F99 = _0x14DD3[3];
	var _0x16025 = _0x14DD3[4];
	var _0x14E3C = _0x14DD3[5];
	var _0x1608E = false;
	if (global_friendsAndIgnoreList[_0x160F7] != null)
	{
		if (global_friendsAndIgnoreList[_0x160F7] == "ignore")
		{
			return
		};
		if (global_friendsAndIgnoreList[_0x160F7] == "friend")
		{
			_0x1608E = true
		}
	};
	var _0x15FBC = "";
	if (_0x15F99 != "none")
	{
		_0x15FBC = " <img src=\'images/" + _0x15F99 + ".png\' style=\'vertical-align:middle\' width=\'30px\' height=\'30px\' /> "
	};
	var _0x16002 = "";
	var _0x160D4 = "";
	if (_0x15FDF != "none")
	{
		tagTitle = _0x15FDF;
		switch (_0x15FDF)
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
		_0x16002 = " <span class=\'chat-tag-" + _0x15FDF + "\'>" + tagTitle + "</span> ";
		switch (_0x15FDF)
		{
		case "Dev":
			_0x160D4 = "style=\'color:#808000\'";
			break;
		case "Financier":
			_0x160D4 = "style=\'color:#007a99\'";
			break;
		case "Investor":
			_0x160D4 = "style=\'color:#cc66ff\'";
			break;
		case "InvestorPlus":
			_0x160D4 = "style=\'color:#00a3cc\'";
			break;
		case "Moderator":
			_0x160D4 = "style=\'color:grey;\'";
			break;
		case "yell":
			_0x160D4 = "style=\'color:blue;\'";
			break
		}
	};
	var _0x160B1 = _0x16025.split(" ");
	msg = "";
	for (var _0x14C0C = 0; _0x14C0C < _0x160B1.length; _0x14C0C++)
	{
		if (isValidURL(_0x160B1[_0x14C0C]))
		{
			msg += convertStringToURL(_0x160B1[_0x14C0C]) + " "
		}
		else
		{
			msg += sanitize(_0x160B1[_0x14C0C]) + " "
		}
	};
	_0x16025 = removeChars(msg);
	if (_0x14E3C == "error")
	{
		htmlOutput = "<span style=\'color:grey\'>" + _0x16025 + "</span>"
	}
	else
	{
		if (_0x14E3C == "pm_from")
		{
			_0x160D4 = "style=\'color:purple\'";
			htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x15FBC + _0x16002 + "<span " + _0x160D4 + "> [PM from " + _0x160F7 + "] " + _0x16025 + "</span>"
		}
		else
		{
			if (_0x14E3C == "pm_to")
			{
				_0x160D4 = "style=\'color:purple\'";
				htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x15FBC + _0x16002 + "<span " + _0x160D4 + "> [Sent to " + _0x160F7 + "] " + _0x16025 + "</span>"
			}
			else
			{
				if (_0x15FDF == "yell")
				{
					htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x15FBC + _0x16002 + "<span " + _0x160D4 + "><b>" + _0x16025 + "</b></span>"
				}
				else
				{
					var _0x16048 = "";
					if (_0x1608E)
					{
						_0x16048 = " <img src=\'images/smileIcon.svg\' style=\'vertical-align:middle\' width=\'30px\' height=\'30px\' /> "
					};
					if (_0x15FDF == "Investor")
					{
						htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + _0x16048 + "</span>" + _0x15FBC + "<img src=\'images/investor.gif\' style=\'vertical-align:middle;\'  /> " + "<span " + _0x160D4 + "><b oncontextmenu=\'return rightClicksChatUsername(this, \"" + _0x160F7 + "\")\' onclick=\'clicksChatUsername(\"" + _0x160F7 + "\") class=\'chat-username\'>" + _0x160F7 + " (" + _0x1606B + "): </b>" + _0x16025 + "</span>"
					}
					else
					{
						if (_0x15FDF == "InvestorPlus")
						{
							htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + _0x16048 + "</span>" + _0x15FBC + "<img src=\'images/investorPlus.gif\' style=\'vertical-align:middle;\'  /> " + "<span " + _0x160D4 + "><b oncontextmenu=\'return rightClicksChatUsername(this, \"" + _0x160F7 + "\")\' onclick=\'clicksChatUsername(\"" + _0x160F7 + "\") class=\'chat-username\'>" + _0x160F7 + " (" + _0x1606B + "): </b>" + _0x16025 + "</span>"
						}
						else
						{
							htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + _0x16048 + "</span>" + _0x15FBC + _0x16002 + "<span " + _0x160D4 + "><b class=\'chat-username\' oncontextmenu=\'return rightClicksChatUsername(this, \"" + _0x160F7 + "\")\' onclick=\'clicksChatUsername\"" + _0x160F7 + "\")\'>" + _0x160F7 + " (" + _0x1606B + "): </b>" + _0x16025 + "</span>"
						}
					}
				}
			}
		}
	};
	var _0x15F76 = document.getElementById("chat-area-view");
	if (_0x15F76.innerHTML.length >= 60000)
	{
		_0x15F76.innerHTML = _0x15F76.innerHTML.substr(30000, _0x15F76.innerHTML.length)
	};
	$(_0x15F76).append("<div>" + htmlOutput + "</div>");
	if (global_autoscrollChat)
	{
		$(_0x15F76).scrollTop($(_0x15F76)[0].scrollHeight)
	}
}