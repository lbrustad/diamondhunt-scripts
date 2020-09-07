'use strict';

function keyListenerStadustPacks(amount)
{
	amount = convertNumberWithLetrtsKMBToNumber(amount);
	document.getElementById("dialogue-stardust-packs-area").innerHTML = "<img src='images/stardust.gif' class='img-30' /> -" + formatNumber(parseInt(amount) * 1000) + "<br /><br /><img src='images/stardust1000.png' class='img-30' /> +" + formatNumber(parseInt(amount));
};
