/**
 * purchaseFromMarketConfirm extracted from ../../deobfuscated/bundle.js at line 12832-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/purchaseFromMarketConfirm.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function purchaseFromMarketConfirm()
{
	var _0x1D96A = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var _0x1C83E = document.getElementById("dialogue-market-buy-hidden-keyFound").value;
	var _0x1CDD2 = document.getElementById("dialogue-market-buy-hidden-price").value;
	var _0x1D932 = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var _0x1DA66 = document.getElementById("dialogue-market-buy-input").value;
	confirmDialogue("images/shop_black.png", "You are about to purchase:<br /><br /><img src=\'images/" + _0x1C83E + ".png\' class=\'img-30\' /> " + formatNumber(_0x1DA66) + " for <img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x1DA66 * _0x1CDD2) + " coins.", "Confirm", "Cancel", "MARKET_BUY=" + _0x1D96A + "~" + _0x1DA66 + "~" + _0x1C83E + "~" + _0x1CDD2)
}