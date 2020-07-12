'use strict';

function setItems(tuples)
{
	clientSetItesmTick++;
	var row = tuples.split("~");
	var ships = [];
	var x = 0;
	for (; x < row.length; x++)
	{
		var i = row[x];
		x++;
		var value = row[x];
		var item = getItem(i);
		setItem(i, value);
		if (item != value || clientSetItesmTick <= 3)
		{
			ships.push(i);
		}
		if (document.getElementById("item-box-" + i) !== null)
		{
			if (getItem(i, false) > 0)
			{
				if (document.getElementById("item-box-" + i).style.display == "none")
				{
					document.getElementById("item-box-" + i).style.display = "";
				}
			}
			else
			{
				if (document.getElementById("item-box-" + i).style.display != "none")
				{
					document.getElementById("item-box-" + i).style.display = "none";
				}
			}
		}
		var all = document.getElementsByTagName("item-" + i);
		var j = 0;
		for (; j < all.length; j++)
		{
			if (all[j].hasAttribute("type"))
			{
				if (all[j].getAttribute("type") == "timer")
				{
					all[j].innerHTML = formatTime(value);
				}
				if (all[j].getAttribute("type") == "number")
				{
					all[j].innerHTML = formatNumber(value);
				}
			}
			else
			{
				all[j].innerHTML = value;
			}
		}
	}
	x = 0;
	for (; x < ships.length; x++)
	{
		manageChangedItem(ships[x]);
	}
};
