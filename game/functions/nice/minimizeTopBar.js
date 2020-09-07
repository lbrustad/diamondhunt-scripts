'use strict';

function minimizeTopBar(canCreateDiscussions)
{
	if (canCreateDiscussions)
	{
		document.getElementById("table-top-main-items").style.display = "none";
		document.getElementById("maximize-btn").style.display = "";
		document.getElementById("minimize-btn").style.display = "none";
	}
	else
	{
		document.getElementById("table-top-main-items").style.display = "";
		document.getElementById("maximize-btn").style.display = "none";
		document.getElementById("minimize-btn").style.display = "";
	}
};
