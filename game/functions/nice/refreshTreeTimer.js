'use strict';

function refreshTreeTimer(clickedItemID)
{
	if (getItemString("treeUnlocked" + clickedItemID) == 1)
	{
		var item = getItem("treeTimer" + clickedItemID);
		var rowid = document.getElementById("tree-secton-timer-" + clickedItemID);
		switch (item)
		{
		case 1:
			rowid.innerHTML = "READY";
			break;
		case 0:
			rowid.innerHTML = "";
			break;
		default:
			rowid.innerHTML = formatTime(item);
			break;
		}
	}
};
