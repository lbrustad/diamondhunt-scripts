/**
 * onKeyUpBuyPlayerMarket extracted from ../../deobfuscated/bundle.js at line 12163-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/onKeyUpBuyPlayerMarket.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function onKeyUpBuyPlayerMarket()
{
	var _0x1C83E = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var _0x1CDD2 = document.getElementById("dialogue-market-buy-hidden-price").value;
	var _0x1C84C = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var _0x1DA66 = document.getElementById("dialogue-market-buy-input").value;
	var _0x1DA74 = _0x1CDD2 * _0x1DA66;
	var _0x1C9F0 = createHTMLBoxCheckOrXCollection("coins", [_0x1DA74], ["", ""]);
	document.getElementById("dialogue-market-buy-area").innerHTML = _0x1C9F0
}