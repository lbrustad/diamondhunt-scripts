/**
 * purchaseFromMarket extracted from ../../deobfuscated/bundle.js at line 21503-21511
 *
 * If this file doesn't contain a function, there is an error in ../raw/purchaseFromMarket.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function purchaseFromMarket(_0x181A4, _0x15003, _0x18118, _0x15E18)
{
	document.getElementById("dialogue-market-buy-input").value = "";
	document.getElementById("dialogue-market-buy-hidden-itemName").value = _0x181A4;
	document.getElementById("dialogue-market-buy-hidden-keyFound").value = _0x15003;
	document.getElementById("dialogue-market-buy-hidden-price").value = _0x15E18;
	document.getElementById("dialogue-market-buy-hidden-amount").value = _0x18118;
	openDialogue("dialogue-market-buy")
}