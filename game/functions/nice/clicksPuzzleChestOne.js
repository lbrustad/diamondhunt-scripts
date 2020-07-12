'use strict';

function clicksPuzzleChestOne(lanName)
{
	var tmppos = lanName.split("-");
	if (puzzleChest1_lastSelected[0] != -1 || puzzleChest1_lastSelected[1] != -1)
	{
		var castButton = document.getElementById("td-puzzleChest1_" + puzzleChest1_lastSelected[0] + "-" + puzzleChest1_lastSelected[1]);
		var img2 = document.getElementById("td-puzzleChest1_" + tmppos[0] + "-" + tmppos[1]);
		var a = castButton.getElementsByTagName("img")[0];
		var me = img2.getElementsByTagName("img")[0];
		var x = a.src;
		var url = me.src;
		a.src = url;
		me.src = x;
		puzzleChest1_lastSelected = [-1, -1];
		castButton.style.border = "1px solid grey";
		img2.style.border = "1px solid grey";
	}
	else
	{
		puzzleChest1_lastSelected = tmppos;
		document.getElementById("td-puzzleChest1_" + puzzleChest1_lastSelected[0] + "-" + puzzleChest1_lastSelected[1]).style.border = "1px solid green";
	}
};
