'use strict';

function refreshTreeImage(clickedItemID)
{
	var setting = getItemString("tree" + clickedItemID);
	if (getItem("treeUnlocked" + clickedItemID) == 1)
	{
		if (setting == "none")
		{
			document.getElementById("tree-section-img-" + clickedItemID).src = "images/tree_none.png";
		}
		else
		{
			document.getElementById("tree-section-img-" + clickedItemID).src = "images/" + setting + getItem("treeStage" + clickedItemID) + ".png";
		}
	}
};
