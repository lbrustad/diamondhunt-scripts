/**
 * eatFoodDialogue extracted from ../../deobfuscated/bundle.js at line 6704-6711
 *
 * If this file doesn't contain a function, there is an error in ../raw/eatFoodDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function eatFoodDialogue(_0x1D1A6)
{
	document.getElementById("dialogue-consumeFood-title").innerHTML = getItemName(_0x1D1A6.cookedFoodName).toUpperCase() + "<br /><span style=\'font-size:12pt;color:grey\'><img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x1D1A6.energy) + " energy each.</span>";
	document.getElementById("dialogue-consumeFood-hidden").value = _0x1D1A6.cookedFoodName;
	openDialogue("dialogue-consumeFood");
	document.getElementById("dialogue-consumeFood-input").focus();
	document.getElementById("dialogue-consumeFood-input").value = 1
}