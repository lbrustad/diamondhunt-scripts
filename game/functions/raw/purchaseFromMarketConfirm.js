/**
 * purchaseFromMarketConfirm extracted from ../../deobfuscated/bundle.js at line 17763-17778
 *
 * If this file doesn't contain a function, there is an error in ../raw/purchaseFromMarketConfirm.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function purchaseFromMarketConfirm()
{
	var _0x5FD4 = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var _0x3933 = document.getElementById("dialogue-market-buy-hidden-keyFound").value;
	var _0x44DE = document.getElementById("dialogue-market-buy-hidden-price").value;
	var _0x5F60 = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var _0x6252 = document.getElementById("dialogue-market-buy-input").value;
	if (_0x3933 == "donorCoins")
	{
		confirmDialogue("images/shop_black.png", "You are about to purchase:<br /><br /><img src=\'images/" + _0x3933 + ".png\' class=\'img-30\' /> " + formatNumber(_0x6252) + " for <img src=\'images/coins.png\' class=\'img-30\' />" + formatNumber(_0x6252 * _0x44DE) + " coins.<br /><br /><b style=\'color:red\'>Warning:</b> Coins will automatically bind to your account.", "Confirm", "Cancel", "MARKET_BUY=" + _0x5FD4 + "~" + _0x6252 + "~" + _0x3933 + "~" + _0x44DE)
	}
	else
	{
		confirmDialogue("images/shop_black.png", "You are about to purchase:<br /><br /><img src=\'images/" + _0x3933 + ".png\' class=\'img-30\' /> " + formatNumber(_0x6252) + " for <img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x6252 * _0x44DE) + " coins.", "Confirm", "Cancel", "MARKET_BUY=" + _0x5FD4 + "~" + _0x6252 + "~" + _0x3933 + "~" + _0x44DE)
	}
}