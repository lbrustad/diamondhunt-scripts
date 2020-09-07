/**
 * onKeyUpBuyPlayerMarket extracted from ../../deobfuscated/bundle.js at line 16835-16844
 *
 * If this file doesn't contain a function, there is an error in ../raw/onKeyUpBuyPlayerMarket.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function onKeyUpBuyPlayerMarket()
{
	var _0x3933 = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var _0x44DE = document.getElementById("dialogue-market-buy-hidden-price").value;
	var _0x3950 = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var _0x6252 = document.getElementById("dialogue-market-buy-input").value;
	var _0x626F = _0x44DE * _0x6252;
	var _0x3CD3 = createHTMLBoxCheckOrXCollection(.coins, [_0x626F], ["", ""]);
	document.getElementById("dialogue-market-buy-area").innerHTML = _0x3CD3
}