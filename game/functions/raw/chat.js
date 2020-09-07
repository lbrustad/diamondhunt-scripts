/**
 * chat extracted from ../../deobfuscated/bundle.js at line 1322-1445
 *
 * If this file doesn't contain a function, there is an error in ../raw/chat.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function chat(_0x3746)
{
	var _0x3763 = _0x3746.split("~");
	var _0x4705 = _0x3763[0];
	var _0x46AE = _0x3763[1];
	var _0x4657 = _0x3763[2];
	var _0x461D = _0x3763[3];
	var _0x4691 = _0x3763[4];
	var _0x37BA = _0x3763[5];
	var _0x463A = "";
	if (_0x461D != "none")
	{
		_0x463A = " <img src=\'images/" + _0x461D + ".png\' style=\'vertical-align:middle\' width=\'30px\' height=\'30px\' /> "
	};
	var _0x4674 = "";
	var _0x46E8 = "";
	if (_0x4657 != "none")
	{
		tagTitle = _0x4657;
		switch (_0x4657)
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
		_0x4674 = " <span class=\'chat-tag-" + _0x4657 + "\'>" + tagTitle + "</span> ";
		switch (_0x4657)
		{
		case "Dev":
			_0x46E8 = "style=\'color:#808000\'";
			break;
		case "Financier":
			_0x46E8 = "style=\'color:#007a99\'";
			break;
		case "Investor":
			_0x46E8 = "style=\'color:#cc66ff\'";
			break;
		case "InvestorPlus":
			_0x46E8 = "style=\'color:#00a3cc\'";
			break;
		case "Moderator":
			_0x46E8 = "style=\'color:grey;\'";
			break;
		case "yell":
			_0x46E8 = "style=\'color:blue;\'";
			break
		}
	};
	var _0x46CB = _0x4691.split(" ");
	msg = "";
	for (var _0x3607 = 0; _0x3607 < _0x46CB.length; _0x3607++)
	{
		if (isValidURL(_0x46CB[_0x3607]))
		{
			msg += convertStringToURL(_0x46CB[_0x3607]) + " "
		}
		else
		{
			msg += sanitize(_0x46CB[_0x3607]) + " "
		}
	};
	_0x4691 = removeChars(msg);
	if (_0x37BA == "error")
	{
		htmlOutput = "<span style=\'color:grey\'>" + _0x4691 + "</span>"
	}
	else
	{
		if (_0x37BA == "pm_from")
		{
			_0x46E8 = "style=\'color:purple\'";
			htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x463A + _0x4674 + "<span " + _0x46E8 + "> [PM from " + _0x4705 + "] " + _0x4691 + "</span>"
		}
		else
		{
			if (_0x37BA == "pm_to")
			{
				_0x46E8 = "style=\'color:purple\'";
				htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x463A + _0x4674 + "<span " + _0x46E8 + "> [Sent to " + _0x4705 + "] " + _0x4691 + "</span>"
			}
			else
			{
				if (_0x4657 == "yell")
				{
					htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x463A + _0x4674 + "<span " + _0x46E8 + "><b>" + _0x4691 + "</b></span>"
				}
				else
				{
					if (_0x4657 == "Investor")
					{
						htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x463A + "<img src=\'images/investor.gif\' style=\'vertical-align:middle;\'  /> " + "<span " + _0x46E8 + "><b>" + _0x4705 + " (" + _0x46AE + "): </b>" + _0x4691 + "</span>"
					}
					else
					{
						if (_0x4657 == "InvestorPlus")
						{
							htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x463A + "<img src=\'images/investorPlus.gif\' style=\'vertical-align:middle;\'  /> " + "<span " + _0x46E8 + "><b>" + _0x4705 + " (" + _0x46AE + "): </b>" + _0x4691 + "</span>"
						}
						else
						{
							htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x463A + _0x4674 + "<span " + _0x46E8 + "><b>" + _0x4705 + " (" + _0x46AE + "): </b>" + _0x4691 + "</span>"
						}
					}
				}
			}
		}
	};
	var _0x4600 = document.getElementById("chat-area-view");
	if (_0x4600.innerHTML.length >= 60000)
	{
		_0x4600.innerHTML = _0x4600.innerHTML.substr(30000, _0x4600.innerHTML.length)
	};
	$(_0x4600).append("<div>" + htmlOutput + "</div>");
	if (global_autoscrollChat)
	{
		$(_0x4600).scrollTop($(_0x4600)[0].scrollHeight)
	}
}