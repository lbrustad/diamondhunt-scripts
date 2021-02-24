/**
 * onKeyUpBuyPlayerMarket extracted from ../../deobfuscated/bundle.js at line 20571-20580
 *
 * If this file doesn't contain a function, there is an error in ../raw/onKeyUpBuyPlayerMarket.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function onKeyUpBuyPlayerMarket()
{
	var _0x15003 = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var _0x15E18 = document.getElementById("dialogue-market-buy-hidden-price").value;
	var _0x15026 = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var _0x184C9 = document.getElementById("dialogue-market-buy-input").value;
	var _0x184EC = _0x15E18 * _0x184C9;
	var _0x15463 = createHTMLBoxCheckOrXCollection(.coins, [_0x184EC], ["", ""]);
	document.getElementById("dialogue-market-buy-area").innerHTML = _0x15463
}