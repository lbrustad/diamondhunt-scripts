'use strict';

function openFurnaceDialogue(year_data)
{
	document.getElementById("dialogue-furnace-selectOre").innerHTML = "";
	var plan_count = "";
	if (getItem("researcherCrafting") >= 1)
	{
		plan_count = plan_count + generateHTMLToSelectOreFurnace(year_data, "sand");
	}
	plan_count = plan_count + generateHTMLToSelectOreFurnace(year_data, "copper");
	plan_count = plan_count + generateHTMLToSelectOreFurnace(year_data, "iron");
	plan_count = plan_count + generateHTMLToSelectOreFurnace(year_data, "silver");
	plan_count = plan_count + generateHTMLToSelectOreFurnace(year_data, "gold");
	plan_count = plan_count + generateHTMLToSelectOreFurnace(year_data, "promethium");
	plan_count = plan_count + generateHTMLToSelectOreFurnace(year_data, "titanium");
	document.getElementById("dialogue-furnace-selectOre").innerHTML = plan_count;
	document.getElementById("dialogue-furnace-buttons-area").innerHTML = "<br /><div onclick='closeDialogue(\"dialogue-furnace\")' class='dialogue-button'>Close</div>";
	openDialogueOverride("dialogue-furnace", "large");
};
