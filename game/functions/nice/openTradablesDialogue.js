'use strict';

function openTradablesDialogue(canCreateDiscussions)
{
	var lnkDiv = document.getElementById("dialogue-tradables-section");
	var pix_color = "";
	var primaryExtension = "";
	var layer_i = 0;
	for (; layer_i < global_TradablesData.length; layer_i++)
	{
		var element = global_TradablesData[layer_i];
		var name = element.itemName;
		var fullLabel = element.lowerLimit;
		var currentSpecificities = element.upperLimit;
		var catKey = element.category;
		if (primaryExtension != catKey)
		{
			if (primaryExtension != "")
			{
				pix_color = pix_color + "</div>";
			}
			pix_color = pix_color + "<div class='market-tradables-dialogue-section'>";
			primaryExtension = catKey;
		}
		var _a_ = 'browseMarketItem("' + name + '");closeDialogue("dialogue-tradables")';
		if (canCreateDiscussions)
		{
			_a_ = 'addItemSlotButtonSelectItem("' + layer_i + '");closeDialogue("dialogue-tradables")';
		}
		pix_color = pix_color + ("<div class='dialogue-tradables-item'><img oncontextmenu='addItemSlotButtonSelectItemChangeLimits(\"" + layer_i + '");closeDialogue("dialogue-tradables"); return false;\' onclick=\'' + _a_ + "' src='images/" + name + ".png' class='img-50' /></div>");
	}
	lnkDiv.innerHTML = pix_color;
	openDialogueOverride("dialogue-tradables", "large");
};
