'use strict';

function clicksMaxMarketButton()
{
	document.getElementById("dialogue-market-buy-input").value = document.getElementById("dialogue-market-buy-hidden-amount").value;
	onKeyUpBuyPlayerMarket();
};
