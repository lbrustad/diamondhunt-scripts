'use strict';

function openDialogueOverride(stage_elem, sweep)
{
	if (sweep == "medium")
	{
		document.getElementById(stage_elem).style.minWidth = "400px";
		document.getElementById(stage_elem).style.left = "38%";
	}
	if (sweep == "large")
	{
		document.getElementById(stage_elem).style.minWidth = "700px";
		document.getElementById(stage_elem).style.left = "30%";
	}
	document.getElementById(stage_elem).style.top = scrollY + 20 + "px";
	document.getElementById(stage_elem).style.display = "";
};
