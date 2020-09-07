/**
 * purchaseFromMarket extracted from ../../deobfuscated/bundle.js at line 17753-17761
 *
 * If this file doesn't contain a function, there is an error in ../raw/purchaseFromMarket.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function purchaseFromMarket(_0x5FD4, _0x3933, _0x5F60, _0x44DE)
{
	document.getElementById("dialogue-market-buy-input").value = "";
	document.getElementById("dialogue-market-buy-hidden-itemName").value = _0x5FD4;
	document.getElementById("dialogue-market-buy-hidden-keyFound").value = _0x3933;
	document.getElementById("dialogue-market-buy-hidden-price").value = _0x44DE;
	document.getElementById("dialogue-market-buy-hidden-amount").value = _0x5F60;
	openDialogue("dialogue-market-buy")
}