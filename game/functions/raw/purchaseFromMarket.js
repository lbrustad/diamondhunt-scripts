/**
 * purchaseFromMarket extracted from ../../deobfuscated/bundle.js at line 12810-12818
 *
 * If this file doesn't contain a function, there is an error in ../raw/purchaseFromMarket.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function purchaseFromMarket(_0x1D96A, _0x1C83E, _0x1D932, _0x1CDD2)
{
	document.getElementById("dialogue-market-buy-input").value = "";
	document.getElementById("dialogue-market-buy-hidden-itemName").value = _0x1D96A;
	document.getElementById("dialogue-market-buy-hidden-keyFound").value = _0x1C83E;
	document.getElementById("dialogue-market-buy-hidden-price").value = _0x1CDD2;
	document.getElementById("dialogue-market-buy-hidden-amount").value = _0x1D932;
	openDialogue("dialogue-market-buy")
}