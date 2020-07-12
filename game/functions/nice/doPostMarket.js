'use strict';

function doPostMarket(oktousevalues, value, ratio)
{
	value = convertNumberWithLetrtsKMBToNumber(value);
	ratio = convertNumberWithLetrtsKMBToNumber(ratio);
	confirmDialogue("images/shop_black.png", "Are you sure you want to post this on the market?<span style='color:grey'><br /><br /><img src='images/" + oktousevalues + ".png' class='img-30' /> <b>Selling: </b>" + formatNumber(value) + "<br /><br /><img src='images/coins.png' class='img-30'> <b>Price each: </b>" + formatNumber(ratio) + "<br /><br /><img src='images/coinPile.png' class='img-30'> <b>Total: </b>" + formatNumber(value * ratio) + "</span>", "Confirm Post", "Cancel", "POST_MARKET=" + oktousevalues
		+ "~" + value + "~" + ratio + "~" + openTradablesDialogue_slot);
};
