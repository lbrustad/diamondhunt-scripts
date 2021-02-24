'use strict';

function clicksDungeonSignPuzzle(clickedItemID)
{
	var collab = document.getElementById("table-td-dungeonSigns-" + clickedItemID);
	var solString = collab.src;
	var arr = [];
	arr.push("none.png");
	if (getItem("dungeonSign0") > 0)
	{
		arr.push("dungeonSign0.png");
	}
	if (getItem("dungeonSign1") > 0)
	{
		arr.push("dungeonSign1.png");
	}
	if (getItem("dungeonSign2") > 0)
	{
		arr.push("dungeonSign2.png");
	}
	if (getItem("dungeonSign3") > 0)
	{
		arr.push("dungeonSign3.png");
	}
	if (getItem("dungeonSign4") > 0)
	{
		arr.push("dungeonSign4.png");
	}
	var i = 0;
	var j = 0;
	for (; j < arr.length; j++)
	{
		if (solString.endsWith(arr[j]))
		{
			i = j + 1;
			if (i == arr.length)
			{
				i = 0;
			}
			break;
		}
	}
	collab.src = "images/" + arr[i];
};
