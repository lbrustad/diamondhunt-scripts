'use strict';

function refreshPlotImage(clickedItemID)
{
	var setting = getItemString("plot" + clickedItemID);
	if (getItem("plotUnlocked" + clickedItemID) == 1)
	{
		document.getElementById("plot-section-" + clickedItemID).classList.remove("tree-section-locked");
		if (setting == "none")
		{
			document.getElementById("plot-section-img-" + clickedItemID).src = "images/farm_none.png";
		}
		else
		{
			document.getElementById("plot-section-img-" + clickedItemID).src = "images/" + setting + getItem("plotStage" + clickedItemID) + ".png";
		}
	}
};
