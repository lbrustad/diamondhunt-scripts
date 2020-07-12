'use strict';

function displayMarket(canCreateDiscussions)
{
	if (canCreateDiscussions)
	{
		document.getElementById("market-loading-section").style.display = "none";
		document.getElementById("market-slots-section").style.display = "";
		document.getElementById("market-buttons-section").style.display = "";
		document.getElementById("market-display-section").style.display = "";
	}
	else
	{
		if (canCreateDiscussions)
		{
			document.getElementById("market-loading-section").style.display = "";
			document.getElementById("market-slots-section").style.display = "none";
			document.getElementById("market-buttons-section").style.display = "none";
			document.getElementById("market-display-section").style.display = "none";
		}
	}
};
