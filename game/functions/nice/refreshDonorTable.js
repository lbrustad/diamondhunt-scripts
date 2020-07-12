'use strict';

function refreshDonorTable()
{
	var available = getCurrentMillis();
	var id = "";
	id = "woodcuttingPatch5";
	if (getItem(id) == 0)
	{
		document.getElementById("donorTable-" + id).innerHTML = "Locked";
	}
	else
	{
		if (available > getItem(id))
		{
			document.getElementById("donorTable-" + id).innerHTML = "Locked";
		}
		else
		{
			var needToFree = getItem(id) - available;
			document.getElementById("donorTable-" + id).innerHTML = "<span style='color:green'>" + parseInt(1 + needToFree / 1000 / 60 / 60 / 24) + " days</span>";
		}
	}
	id = "woodcuttingPatch6";
	if (getItem(id) == 0)
	{
		document.getElementById("donorTable-" + id).innerHTML = "Locked";
	}
	else
	{
		if (available > getItem(id))
		{
			document.getElementById("donorTable-" + id).innerHTML = "Locked";
		}
		else
		{
			needToFree = getItem(id) - available;
			document.getElementById("donorTable-" + id).innerHTML = "<span style='color:green'>" + parseInt(1 + needToFree / 1000 / 60 / 60 / 24) + " days</span>";
		}
	}
	id = "farmingPlot5";
	if (getItem(id) == 0)
	{
		document.getElementById("donorTable-" + id).innerHTML = "Locked";
	}
	else
	{
		if (available > getItem(id))
		{
			document.getElementById("donorTable-" + id).innerHTML = "Locked";
		}
		else
		{
			needToFree = getItem(id) - available;
			document.getElementById("donorTable-" + id).innerHTML = "<span style='color:green'>" + parseInt(1 + needToFree / 1000 / 60 / 60 / 24) + " days</span>";
		}
	}
	id = "farmingPlot6";
	if (getItem(id) == 0)
	{
		document.getElementById("donorTable-" + id).innerHTML = "Locked";
	}
	else
	{
		if (available > getItem(id))
		{
			document.getElementById("donorTable-" + id).innerHTML = "Locked";
		}
		else
		{
			needToFree = getItem(id) - available;
			document.getElementById("donorTable-" + id).innerHTML = "<span style='color:green'>" + parseInt(1 + needToFree / 1000 / 60 / 60 / 24) + " days</span>";
		}
	}
	id = "moreOfflineTime";
	if (getItem(id) == 0)
	{
		document.getElementById("donorTable-" + id).innerHTML = "Locked";
	}
	else
	{
		if (available > getItem(id))
		{
			document.getElementById("donorTable-" + id).innerHTML = "Locked";
		}
		else
		{
			needToFree = getItem(id) - available;
			document.getElementById("donorTable-" + id).innerHTML = "<span style='color:green'>" + parseInt(1 + needToFree / 1000 / 60 / 60 / 24) + " days</span>";
		}
	}
	id = "bonusXp";
	if (getItem(id) == 0)
	{
		document.getElementById("donorTable-" + id).innerHTML = "Locked";
	}
	else
	{
		if (available > getItem(id))
		{
			document.getElementById("donorTable-" + id).innerHTML = "Locked";
		}
		else
		{
			needToFree = getItem(id) - available;
			document.getElementById("donorTable-" + id).innerHTML = "<span style='color:green'>" + parseInt(1 + needToFree / 1000 / 60 / 60 / 24) + " days</span>";
		}
	}
};
