'use strict';

function refreshTagsDialoguesIcons()
{
	var pix_color = "";
	var model = "";
	var curr = "";
	var item = getItem("spentDonorCoinsOnTags");
	var _a_ = false;
	var th_field = "";
	var setV = "";
	pix_color = pix_color + "<div style='border:1px solid grey;padding:10px;background-color:#EFEFEF;font-size:10pt;'>Chat tags, which may be combined with sigils, allow you to show your support towards the game.  They are purchased with <b>tradable</b> donor coins.<br /><br />They are optional and only used for cosmetic purposes.<br /><br /><i style='color:grey'>You also can buy them overtime, meaning spending 20$ on chat tags will knock off 20$ for all other tags.  Also, buying a higher tier tag will unlock all the previous ones for free.</i></div>";
	pix_color = pix_color + "<br /><br />";
	pix_color = pix_color + "<table width='100%' style='margin:auto;background-color:#f2f2f2;color:black;text-align:center;border-collapse: collapse;border:1px solid black;'>";
	pix_color = pix_color + "<tr>";
	pix_color = pix_color + "<th style='width:50%'>Example</th><th><b style='color:green'>Tradable</b> Donor Coins</th><th>Action</th>";
	pix_color = pix_color + "</tr>";
	model = "Donor";
	curr = 20;
	testingForPriceAdjusted = curr - item;
	th_field = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		th_field = "<img src='images/check.png' class='img-20' />";
		setV = "SET";
		if (getItem("chatTag") == model)
		{
			setV = "UNSET";
		}
	}
	else
	{
		th_field = "<img src='images/donorCoins.png' class='img-20' /> " + testingForPriceAdjusted;
		setV = "BUY";
	}
	pix_color = pix_color + "<tr>";
	pix_color = pix_color + ("<td style='padding:20px;'><img style='border:1px solid grey;padding:3px;'src='images/tagExample_" + model + ".png' /></td><td>" + th_field + "</td><td><input type='button' value='" + setV + "' onclick='setOrBuyChatTag(\"" + model + "\",this.value);closeDialogue(\"dialogue-tags\")' style='color:#006666;border:1px solid #006666' class='chat-area-send-button' /></td>");
	pix_color = pix_color + "</tr>";
	model = "Superdonor";
	curr = 40;
	testingForPriceAdjusted = curr - item;
	th_field = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		th_field = "<img src='images/check.png' class='img-20' />";
		setV = "SET";
		if (getItem("chatTag") == model)
		{
			setV = "UNSET";
		}
	}
	else
	{
		th_field = "<img src='images/donorCoins.png' class='img-20' /> " + testingForPriceAdjusted;
		setV = "BUY";
	}
	pix_color = pix_color + "<tr>";
	pix_color = pix_color + ("<td style='padding:20px;'><img style='border:1px solid grey;padding:3px;'src='images/tagExample_" + model + ".png' /></td><td>" + th_field + "</td><td><input type='button' value='" + setV + "' onclick='setOrBuyChatTag(\"" + model + "\",this.value);closeDialogue(\"dialogue-tags\")' style='color:#006666;border:1px solid #006666' class='chat-area-send-button' /></td>");
	pix_color = pix_color + "</tr>";
	model = "Ultradonor";
	curr = 60;
	testingForPriceAdjusted = curr - item;
	th_field = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		th_field = "<img src='images/check.png' class='img-20' />";
		setV = "SET";
		if (getItem("chatTag") == model)
		{
			setV = "UNSET";
		}
	}
	else
	{
		th_field = "<img src='images/donorCoins.png' class='img-20' /> " + testingForPriceAdjusted;
		setV = "BUY";
	}
	pix_color = pix_color + "<tr>";
	pix_color = pix_color + ("<td style='padding:20px;'><img style='border:1px solid grey;padding:3px;'src='images/tagExample_" + model + ".png' /></td><td>" + th_field + "</td><td><input type='button' value='" + setV + "' onclick='setOrBuyChatTag(\"" + model + "\",this.value);closeDialogue(\"dialogue-tags\")' style='color:#006666;border:1px solid #006666' class='chat-area-send-button' /></td>");
	pix_color = pix_color + "</tr>";
	model = "Contributor";
	curr = 100;
	testingForPriceAdjusted = curr - item;
	th_field = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		th_field = "<img src='images/check.png' class='img-20' />";
		setV = "SET";
		if (getItem("chatTag") == model)
		{
			setV = "UNSET";
		}
	}
	else
	{
		th_field = "<img src='images/donorCoins.png' class='img-20' /> " + testingForPriceAdjusted;
		setV = "BUY";
	}
	pix_color = pix_color + "<tr>";
	pix_color = pix_color + ("<td style='padding:20px;'><img style='border:1px solid grey;padding:3px;'src='images/tagExample_" + model + ".png' /></td><td>" + th_field + "</td><td><input type='button' value='" + setV + "' onclick='setOrBuyChatTag(\"" + model + "\",this.value);closeDialogue(\"dialogue-tags\")' style='color:#006666;border:1px solid #006666' class='chat-area-send-button' /></td>");
	pix_color = pix_color + "</tr>";
	model = "Financier";
	curr = 250;
	testingForPriceAdjusted = curr - item;
	th_field = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		th_field = "<img src='images/check.png' class='img-20' />";
		setV = "SET";
		if (getItem("chatTag") == model)
		{
			setV = "UNSET";
		}
	}
	else
	{
		th_field = "<img src='images/donorCoins.png' class='img-20' /> " + testingForPriceAdjusted;
		setV = "BUY";
	}
	pix_color = pix_color + "<tr>";
	pix_color = pix_color + ("<td style='padding:20px;'><img style='border:1px solid grey;padding:3px;'src='images/tagExample_" + model + ".png' /></td><td>" + th_field + "</td><td><input type='button' value='" + setV + "' onclick='setOrBuyChatTag(\"" + model + "\",this.value);closeDialogue(\"dialogue-tags\")' style='color:#006666;border:1px solid #006666' class='chat-area-send-button' /></td>");
	pix_color = pix_color + "</tr>";
	model = "Investor";
	curr = 500;
	testingForPriceAdjusted = curr - item;
	th_field = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		th_field = "<img src='images/check.png' class='img-20' />";
		setV = "SET";
		if (getItem("chatTag") == model)
		{
			setV = "UNSET";
		}
	}
	else
	{
		th_field = "<img src='images/donorCoins.png' class='img-20' /> " + testingForPriceAdjusted;
		setV = "BUY";
	}
	pix_color = pix_color + "<tr>";
	pix_color = pix_color + ("<td style='padding:20px;'><span border:1px solid grey;padding:3px;><img style='vertical-align:text-top;' src='images/investor.gif' /> <span style='color:#cc66ff;dispaly:inline-block;vertical-align:text-top;font-size:16pt;'> A chat tag!</span></span></td><td>" + th_field + "</td><td><input type='button' value='" + setV + "' onclick='setOrBuyChatTag(\"" + model + "\",this.value);closeDialogue(\"dialogue-tags\")' style='color:#006666;border:1px solid #006666' class='chat-area-send-button' /></td>");
	pix_color = pix_color + "</tr>";
	model = "InvestorPlus";
	curr = 1000;
	testingForPriceAdjusted = curr - item;
	th_field = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		th_field = "<img src='images/check.png' class='img-20' />";
		setV = "SET";
		if (getItem("chatTag") == model)
		{
			setV = "UNSET";
		}
	}
	else
	{
		th_field = "<img src='images/donorCoins.png' class='img-20' /> " + testingForPriceAdjusted;
		setV = "BUY";
	}
	pix_color = pix_color + "<tr>";
	pix_color = pix_color + ("<td style='padding:20px;'><span border:1px solid grey;padding:3px;><img style='vertical-align:text-top;' src='images/investorPlus.gif' /> <span style='color:#00a3cc;dispaly:inline-block;vertical-align:text-top;font-size:16pt;'> A chat tag!</span></span></td><td>" + th_field + "</td><td><input type='button' value='" + setV + "' onclick='setOrBuyChatTag(\"" + model + "\",this.value);closeDialogue(\"dialogue-tags\")' style='color:#006666;border:1px solid #006666' class='chat-area-send-button' /></td>");
	pix_color = pix_color + "</tr>";
	pix_color = pix_color + "</table>";
	pix_color = pix_color + "<br /><br />";
	pix_color = pix_color + "<table width='100%' style='margin:auto;background-color:#f2f2f2;color:black;text-align:center;border-collapse: collapse;border:1px solid black;'>";
	pix_color = pix_color + "<tr>";
	pix_color = pix_color + "<th style='width:50%'>Example</th><th>Description</th>";
	pix_color = pix_color + "</tr>";
	pix_color = pix_color + "<tr>";
	pix_color = pix_color + "<td style='padding:20px;'><img  style='border:1px solid grey;padding:3px;' src='images/devTagExample.png' /></td><td>Owner & Developper of the Diamond Hunt Games</td>";
	pix_color = pix_color + "</tr>";
	pix_color = pix_color + "<tr>";
	pix_color = pix_color + "<td style='padding:20px;'><img  style='border:1px solid grey;padding:3px;' src='images/tagExample_Moderator.png' /></td><td>Moderates chat and market.</td>";
	pix_color = pix_color + "</tr>";
	pix_color = pix_color + "</table>";
	document.getElementById("dialogue-tags-section").innerHTML = pix_color;
};
