'use strict';

function refreshSigilsDialoguesIcons(afterZero)
{
	var fsHTML = "";
	var _a_ = false;
	var matchSet = ["batSigil", "candyCaneSigil", "spiderSigil", "carrotSigil", "snowmanSigil", "catSigil", "bunnySigil", "bluePartyHatSigil", "whitePartyHatSigil", "yellowPartyHatSigil", "greenPartyHatSigil", "redPartyHatSigil", "pinkPartyHatSigil", "treeSigil", "ghostSigil", "easterEggSigil", "santaHatSigil", "pumpkinSigil"];
	var i = 0;
	for (; i < matchSet.length; i++)
	{
		if (getItem(matchSet[i]) > 0 || afterZero)
		{
			_a_ = true;
			fsHTML = fsHTML + ("<div onclick='sendBytes(\"CHAT_ICON=" + matchSet[i] + "\")' class='dialogue-sigils-itemBox'>");
			fsHTML = fsHTML + ("<img src='images/" + matchSet[i] + ".png' class='img-30' />");
			if (getItemString("chatIcon") == matchSet[i])
			{
				fsHTML = fsHTML + ("<br /><center><span>" + getItem(matchSet[i]) + "</span> <img src='images/check.png' class='img-20' /></center>");
			}
			else
			{
				fsHTML = fsHTML + ("<br /><center><span>" + getItem(matchSet[i]) + "</span> </center>");
			}
			fsHTML = fsHTML + "</div>";
		}
	}
	matchSet = ["hardcoreSigil"];
	i = 0;
	for (; i < matchSet.length; i++)
	{
		if (getItem(matchSet[i]) > 0 || afterZero)
		{
			_a_ = true;
			fsHTML = fsHTML + ("<div onclick='sendBytes(\"CHAT_ICON=" + matchSet[i] + "\")' style='background-color:#b3ffd9;' class='dialogue-sigils-itemBox'>");
			fsHTML = fsHTML + ("<img src='images/" + matchSet[i] + ".png' class='img-30' />");
			if (getItemString("chatIcon") == matchSet[i])
			{
				fsHTML = fsHTML + ("<br /><center><span>" + getItem(matchSet[i]) + "</span> <img src='images/check.png' class='img-20' /></center>");
			}
			else
			{
				fsHTML = fsHTML + ("<br /><center><span>" + getItem(matchSet[i]) + "</span> </center>");
			}
			fsHTML = fsHTML + "</div>";
		}
	}
	matchSet = ["globalSigil"];
	i = 0;
	for (; i < matchSet.length; i++)
	{
		var beforeZero = getGlobalLevel() >= 900;
		if (beforeZero || afterZero)
		{
			_a_ = true;
			fsHTML = fsHTML + ("<div onclick='sendBytes(\"CHAT_ICON=" + matchSet[i] + "\")' style='background-color:#b3ffd9;' class='dialogue-sigils-itemBox'>");
			fsHTML = fsHTML + ("<img src='images/" + matchSet[i] + ".png' class='img-30' />");
			var _b_ = 0;
			if (beforeZero)
			{
				_b_ = 1;
			}
			if (getItemString("chatIcon") == matchSet[i])
			{
				fsHTML = fsHTML + ("<br /><center><span>" + _b_ + "</span> <img src='images/check.png' class='img-20' /></center>");
			}
			else
			{
				fsHTML = fsHTML + ("<br /><center><span>" + _b_ + "</span> </center>");
			}
			fsHTML = fsHTML + "</div>";
		}
	}
	matchSet = ["combatSigil", "magicSigil", "miningSigil", "craftingSigil", "woodcuttingSigil", "farmingSigil", "brewingSigil", "fishingSigil", "cookingSigil"];
	i = 0;
	for (; i < matchSet.length; i++)
	{
		var beforeZero = getLevel(getItem(matchSet[i].substr(0, matchSet[i].length - 5) + "Xp")) >= 100;
		if (beforeZero || afterZero)
		{
			_a_ = true;
			fsHTML = fsHTML + ("<div onclick='sendBytes(\"CHAT_ICON=" + matchSet[i] + "\")' style='background-color:#b3ffd9;' class='dialogue-sigils-itemBox'>");
			fsHTML = fsHTML + ("<img src='images/" + matchSet[i] + ".png' class='img-30' />");
			_b_ = 0;
			if (beforeZero)
			{
				_b_ = 1;
			}
			if (getItemString("chatIcon") == matchSet[i])
			{
				fsHTML = fsHTML + ("<br /><center><span>" + _b_ + "</span> <img src='images/check.png' class='img-20' /></center>");
			}
			else
			{
				fsHTML = fsHTML + ("<br /><center><span>" + _b_ + "</span> </center>");
			}
			fsHTML = fsHTML + "</div>";
		}
	}
	matchSet = ["chickenMonsterSigil", "ratMonsterSigil", "beeMonsterSigil", "snakeMonsterSigil", "entMonsterSigil", "thiefMonsterSigil", "bearMonsterSigil", "spiderMonsterSigil", "skeletonMonsterSigil", "lavaAlienMonsterSigil", "batMonsterSigil", "fireMageMonsterSigil", "boneHeadMonsterSigil", "mammaPolarBearMonsterSigil", "yetiMonsterSigil", "ghostMonsterSigil", "skeletonGhostMonsterSigil", "reaperMonsterSigil", "sharkMonsterSigil", "pufferFishMonsterSigil", "tridentSoldierMonsterSigil", "skeletonMonksMonsterSigil"
		, "dungeonSpiderMonsterSigil", "stoneWomenMonsterSigil", "museumSigil", "treasureChestSigil"
	];
	i = 0;
	for (; i < matchSet.length; i++)
	{
		var item = getItem(matchSet[i]);
		if (matchSet[i] == "museumSigil")
		{
			item = 0;
			if (hasAllMuseumItems())
			{
				item = 1;
			}
		}
		if (item > 0 || afterZero)
		{
			_a_ = true;
			fsHTML = fsHTML + ("<div onclick='sendBytes(\"CHAT_ICON=" + matchSet[i] + "\")' style='background-color:#e6e6e6;' class='dialogue-sigils-itemBox'>");
			fsHTML = fsHTML + ("<img src='images/" + matchSet[i] + ".png' class='img-30' />");
			if (getItemString("chatIcon") == matchSet[i])
			{
				fsHTML = fsHTML + ("<br /><center><span>" + item + "</span> <img src='images/check.png' class='img-20' /></center>");
			}
			else
			{
				fsHTML = fsHTML + ("<br /><center><span>" + item + "</span> </center>");
			}
			fsHTML = fsHTML + "</div>";
		}
	}
	matchSet = ["goldEventSigil2", "silverEventSigil2", "bronzeEventSigil2", "eventSigil2", "goldEventSigil", "silverEventSigil", "bronzeEventSigil", "eventSigil"];
	i = 0;
	for (; i < matchSet.length; i++)
	{
		if (getItem(matchSet[i]) > 0 || afterZero)
		{
			_a_ = true;
			fsHTML = fsHTML + ("<div onclick='sendBytes(\"CHAT_ICON=" + matchSet[i] + "\")' style='background-color:pink;' class='dialogue-sigils-itemBox'>");
			fsHTML = fsHTML + ("<img src='images/" + matchSet[i] + ".png' class='img-30' />");
			if (getItemString("chatIcon") == matchSet[i])
			{
				fsHTML = fsHTML + ("<br /><center><span>" + getItem(matchSet[i]) + "</span> <img src='images/check.png' class='img-20' /></center>");
			}
			else
			{
				fsHTML = fsHTML + ("<br /><center><span>" + getItem(matchSet[i]) + "</span> </center>");
			}
			fsHTML = fsHTML + "</div>";
		}
	}
	fsHTML = fsHTML + "<div style='border:1px solid grey;padding:10px;background-color:#EFEFEF;font-size:10pt;'>Sigils are chat icons that are purely cosmetic.  They can be obtained through holiday events, monster drops (1/10,000) or special events.<br /><br />All sigils are untradable except for holiday sigils during their respective time of year.<br /><br /><span style='cursor:pointer;color:blue' onclick='refreshSigilsDialoguesIcons(true)'>(show all)</span></div>";
	document.getElementById("dialogue-sigils-section").innerHTML = fsHTML;
};
