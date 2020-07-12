'use strict';

function purchaseFromMarket(schoolId, params, m, _listItemText)
{
	document.getElementById("dialogue-market-buy-input").value = "";
	document.getElementById("dialogue-market-buy-hidden-itemName").value = schoolId;
	document.getElementById("dialogue-market-buy-hidden-keyFound").value = params;
	document.getElementById("dialogue-market-buy-hidden-price").value = _listItemText;
	document.getElementById("dialogue-market-buy-hidden-amount").value = m;
	openDialogue("dialogue-market-buy");
};
