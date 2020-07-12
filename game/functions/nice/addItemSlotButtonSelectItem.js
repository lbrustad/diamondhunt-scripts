'use strict';

function addItemSlotButtonSelectItem(elementID)
{
	var moduleEntryFile = name;
	var _a_ = 0;
	var _b_ = 0;
	var element = global_TradablesData[elementID];
	var name = element.itemName;
	var totalAssertions = element.lowerLimit;
	var totalSkipped = element.upperLimit;
	var catKey = element.category;
	var pix_color = "";
	pix_color = pix_color + ("<center>" + getItemName(name).toUpperCase() + "<br /><img src='images/" + name + ".png' class='img-100' /></center>");
	pix_color = pix_color + "<hr class='hr-thin' />";
	pix_color = pix_color + "<div style='text-align:left;margin:0 auto;width: 90%;border:1px solid black;color:white;padding:20px;background-color:#476b6b;border-radius:3pt;'>";
	pix_color = pix_color + ("<input id='post-item-market-itemName' value='" + name + "' type='hidden'>");
	pix_color = pix_color + "Amount to Sell<br />";
	pix_color = pix_color + ("<input id='post-item-market-amount' placeholder='You own: " + getItem(name) + "' class='input-larger'>");
	pix_color = pix_color + "<br /><br />";
	pix_color = pix_color + "<img src='images/coins.png' class='img-30' /> Price each<br />";
	pix_color = pix_color + "<input id='post-item-market-price' class='input-larger'>";
	pix_color = pix_color + "</div>";
	pix_color = pix_color + "<br />";
	pix_color = pix_color + "<div class='blue-dark-box'>";
	pix_color = pix_color + ("<b>Price limits: " + "</b>" + "<img src='images/coins.png' class='img-30' /> " + formatNumber(totalAssertions) + " - " + "<img src='images/coins.png' class='img-30' /> " + formatNumber(totalSkipped));
	pix_color = pix_color + "</div>";
	document.getElementById("dialogue-tradablesPostItem-section").innerHTML = pix_color;
	openDialogue("dialogue-tradables-post-item");
};
