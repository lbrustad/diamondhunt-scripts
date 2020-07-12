'use strict';

function changeMarketLimits(type, i, data)
{
	i = convertNumberWithLetrtsKMBToNumber(i);
	data = convertNumberWithLetrtsKMBToNumber(data);
	confirmDialogue("images/" + type + ".png", "Are you sure you want to modifiy the price limits?<span style='color:grey'><br /><br /><img src='images/coins.png' class='img-30'> <b>Lower: </b>" + formatNumber(i) + "<br /><br /><img src='images/coins.png' class='img-30'> <b>Upper: </b>" + formatNumber(data), "Confirm Price Margins", "Cancel", "CHANGE_MARGIN_MARKET=" + type + "~" + i + "~" + data);
};
