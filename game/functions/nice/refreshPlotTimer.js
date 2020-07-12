'use strict';

function refreshPlotTimer(clickedItemID)
{
	if (getItemString("plotUnlocked" + clickedItemID) == 1)
	{
		var item = getItem("plotTimer" + clickedItemID);
		var rowid = document.getElementById("plot-secton-timer-" + clickedItemID);
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
