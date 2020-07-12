'use strict';

function onKeyUpBuyPlayerMarket()
{
	var vulnData = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var articleArea = document.getElementById("dialogue-market-buy-hidden-price").value;
	var helperTagCallback = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var MaximumContentImageAreaToArticleAreaRatio = document.getElementById("dialogue-market-buy-input").value;
	var maximumImageArea = articleArea * MaximumContentImageAreaToArticleAreaRatio;
	var attributeTemplate = createHTMLBoxCheckOrXCollection("coins", [maximumImageArea], ["", ""]);
	document.getElementById("dialogue-market-buy-area").innerHTML = attributeTemplate;
};
