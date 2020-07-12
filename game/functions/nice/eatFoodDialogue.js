'use strict';

function eatFoodDialogue(raw)
{
	document.getElementById("dialogue-consumeFood-title").innerHTML = getItemName(raw.cookedFoodName).toUpperCase() + "<br /><span style='font-size:12pt;color:grey'><img src='images/energy.png' class='img-30' /> " + formatNumber(raw.energy) + " energy each.</span>";
	document.getElementById("dialogue-consumeFood-hidden").value = raw.cookedFoodName;
	openDialogue("dialogue-consumeFood");
	document.getElementById("dialogue-consumeFood-input").focus();
	document.getElementById("dialogue-consumeFood-input").value = 1;
};
