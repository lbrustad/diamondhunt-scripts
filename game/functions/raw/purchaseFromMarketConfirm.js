/**
 * purchaseFromMarketConfirm extracted from ../../deobfuscated/bundle.js at line 21513-21528
 *
 * If this file doesn't contain a function, there is an error in ../raw/purchaseFromMarketConfirm.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function purchaseFromMarketConfirm()
{
	var _0x181A4 = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var _0x15003 = document.getElementById("dialogue-market-buy-hidden-keyFound").value;
	var _0x15E18 = document.getElementById("dialogue-market-buy-hidden-price").value;
	var _0x18118 = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var _0x184C9 = document.getElementById("dialogue-market-buy-input").value;
	if (_0x15003 == "donorCoins")
	{
		confirmDialogue("images/shop_black.png", "You are about to purchase:<br /><br /><img src=\'images/" + _0x15003 + ".png\' class=\'img-30\' /> " + formatNumber(_0x184C9) + " for <img src=\'images/coins.png\' class=\'img-30\' />" + formatNumber(_0x184C9 * _0x15E18) + " coins.<br /><br /><b style=\'color:red\'>Warning:</b> Coins will automatically bind to your account.", "Confirm", "Cancel", "MARKET_BUY=" + _0x181A4 + "~" + _0x184C9 + "~" + _0x15003 + "~" + _0x15E18)
	}
	else
	{
		confirmDialogue("images/shop_black.png", "You are about to purchase:<br /><br /><img src=\'images/" + _0x15003 + ".png\' class=\'img-30\' /> " + formatNumber(_0x184C9) + " for <img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x184C9 * _0x15E18) + " coins.", "Confirm", "Cancel", "MARKET_BUY=" + _0x181A4 + "~" + _0x184C9 + "~" + _0x15003 + "~" + _0x15E18)
	}
}