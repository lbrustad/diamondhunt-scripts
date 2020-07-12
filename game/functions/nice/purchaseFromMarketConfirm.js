'use strict';

function purchaseFromMarketConfirm()
{
	var countWrap = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var vulnData = document.getElementById("dialogue-market-buy-hidden-keyFound").value;
	var ratio = document.getElementById("dialogue-market-buy-hidden-price").value;
	var code_content = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var value = document.getElementById("dialogue-market-buy-input").value;
	confirmDialogue("images/shop_black.png", "You are about to purchase:<br /><br /><img src='images/" + vulnData + ".png' class='img-30' /> " + formatNumber(value) + " for <img src='images/coins.png' class='img-30' /> " + formatNumber(value * ratio) + " coins.", "Confirm", "Cancel", "MARKET_BUY=" + countWrap + "~" + value + "~" + vulnData + "~" + ratio);
};
