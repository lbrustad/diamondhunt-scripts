'use strict';

function refreshSigilsDialoguesIcons(canCreateDiscussions)
{
	var pix_color = "";
	var _a_ = false;
	var keywordResults = ["candyCaneSigil", "spiderSigil", "carrotSigil", "snowmanSigil", "catSigil", "bunnySigil", "bluePartyHatSigil", "whitePartyHatSigil", "yellowPartyHatSigil", "greenPartyHatSigil", "redPartyHatSigil", "pinkPartyHatSigil", "treeSigil", "ghostSigil", "easterEggSigil", "santaHatSigil", "pumpkinSigil"];
	var i = 0;
	for (; i < keywordResults.length; i++)
	{
		if (getItem(keywordResults[i]) > 0 || canCreateDiscussions)
		{
			_a_ = true;
			pix_color = pix_color + ("<div onclick='sendBytes(\"CHAT_ICON=" + keywordResults[i] + "\")' class='dialogue-sigils-itemBox'>");
			pix_color = pix_color + ("<img src='images/" + keywordResults[i] + ".png' class='img-30' />");
			if (getItemString("chatIcon") == keywordResults[i])
			{
				pix_color = pix_color + ("<br /><center><span>" + getItem(keywordResults[i]) + "</span> <img src='images/check.png' class='img-20' /></center>");
			}
			else
			{
				pix_color = pix_color + ("<br /><center><span>" + getItem(keywordResults[i]) + "</span> </center>");
			}
			pix_color = pix_color + "</div>";
		}
	}
	keywordResults = ["hardcoreSigil"];
	i = 0;
	for (; i < keywordResults.length; i++)
	{
		if (getItem(keywordResults[i]) > 0 || canCreateDiscussions)
		{
			_a_ = true;
			pix_color = pix_color + ("<div onclick='sendBytes(\"CHAT_ICON=" + keywordResults[i] + "\")' style='background-color:#b3ffd9;' class='dialogue-sigils-itemBox'>");
			pix_color = pix_color + ("<img src='images/" + keywordResults[i] + ".png' class='img-30' />");
			if (getItemString("chatIcon") == keywordResults[i])
			{
				pix_color = pix_color + ("<br /><center><span>" + getItem(keywordResults[i]) + "</span> <img src='images/check.png' class='img-20' /></center>");
			}
			else
			{
				pix_color = pix_color + ("<br /><center><span>" + getItem(keywordResults[i]) + "</span> </center>");
			}
			pix_color = pix_color + "</div>";
		}
	}
	keywordResults = ["chickenMonsterSigil", "ratMonsterSigil", "beeMonsterSigil", "snakeMonsterSigil", "entMonsterSigil", "thiefMonsterSigil", "bearMonsterSigil", "spiderMonsterSigil", "skeletonMonsterSigil"];
	i = 0;
	for (; i < keywordResults.length; i++)
	{
		if (getItem(keywordResults[i]) > 0 || canCreateDiscussions)
		{
			_a_ = true;
			pix_color = pix_color + ("<div onclick='sendBytes(\"CHAT_ICON=" + keywordResults[i] + "\")' style='background-color:#e6e6e6;' class='dialogue-sigils-itemBox'>");
			pix_color = pix_color + ("<img src='images/" + keywordResults[i] + ".png' class='img-30' />");
			if (getItemString("chatIcon") == keywordResults[i])
			{
				pix_color = pix_color + ("<br /><center><span>" + getItem(keywordResults[i]) + "</span> <img src='images/check.png' class='img-20' /></center>");
			}
			else
			{
				pix_color = pix_color + ("<br /><center><span>" + getItem(keywordResults[i]) + "</span> </center>");
			}
			pix_color = pix_color + "</div>";
		}
	}
	keywordResults = ["goldEventSigil2", "silverEventSigil2", "bronzeEventSigil2", "eventSigil2", "goldEventSigil", "silverEventSigil", "bronzeEventSigil", "eventSigil"];
	i = 0;
	for (; i < keywordResults.length; i++)
	{
		if (getItem(keywordResults[i]) > 0 || canCreateDiscussions)
		{
			_a_ = true;
			pix_color = pix_color + ("<div onclick='sendBytes(\"CHAT_ICON=" + keywordResults[i] + "\")' style='background-color:pink;' class='dialogue-sigils-itemBox'>");
			pix_color = pix_color + ("<img src='images/" + keywordResults[i] + ".png' class='img-30' />");
			if (getItemString("chatIcon") == keywordResults[i])
			{
				pix_color = pix_color + ("<br /><center><span>" + getItem(keywordResults[i]) + "</span> <img src='images/check.png' class='img-20' /></center>");
			}
			else
			{
				pix_color = pix_color + ("<br /><center><span>" + getItem(keywordResults[i]) + "</span> </center>");
			}
			pix_color = pix_color + "</div>";
		}
	}
	pix_color = pix_color + "<div style='border:1px solid grey;padding:10px;background-color:#EFEFEF;font-size:10pt;'>Sigils are chat icons that are purely cosmetic.  They can be obtained through holiday events, monster drops (1/10,000) or special events.<br /><br />All sigils are untradable except for holiday sigils during their respective time of year.<br /><br /><span style='cursor:pointer;color:blue' onclick='refreshSigilsDialoguesIcons(true)'>(show all)</span></div>";
	document.getElementById("dialogue-sigils-section").innerHTML = pix_color;
};
