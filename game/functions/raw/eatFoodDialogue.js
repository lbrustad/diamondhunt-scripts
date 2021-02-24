/**
 * eatFoodDialogue extracted from ../../deobfuscated/bundle.js at line 10611-10618
 *
 * If this file doesn't contain a function, there is an error in ../raw/eatFoodDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function eatFoodDialogue(_0x16AF2)
{
	document.getElementById("dialogue-consumeFood-title").innerHTML = getItemName(_0x16AF2.cookedFoodName).toUpperCase() + "<br /><span style=\'font-size:12pt;color:grey\'><img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x16AF2.energy) + " energy each.</span>";
	document.getElementById("dialogue-consumeFood-hidden").value = _0x16AF2.cookedFoodName;
	openDialogue("dialogue-consumeFood");
	document.getElementById("dialogue-consumeFood-input").focus();
	document.getElementById("dialogue-consumeFood-input").value = 1
}