'use strict';

function openFurnaceDialogue2($ionicHistory, mmCoreSplitViewBlock)
{
	global_tracker_furnaceDialgoue_furnace = $ionicHistory;
	global_tracker_furnaceDialgoue_ore = mmCoreSplitViewBlock;
	document.getElementById("dialogue-furnace-enterOre").innerHTML = "";
	var pix_color = "";
	pix_color = pix_color + "<div class='dialogue-furnace-enterOre'>";
	pix_color = pix_color + "<table width='90%'>";
	pix_color = pix_color + "<tr>";
	pix_color = pix_color + "<td>";
	pix_color = pix_color + ("<img src='images/" + $ionicHistory + ".png' class='img-100' /> ");
	pix_color = pix_color + ("<img src='images/" + mmCoreSplitViewBlock + ".png' class='img-100' /> ");
	pix_color = pix_color + "</td>";
	pix_color = pix_color + "<td>";
	pix_color = pix_color + "<input type='text' id='dialogue-furnace-smelt-amount' class='enter-amount-text' onkeyup='furnaceDialogueValueOnKeyUp(this.value)' placeholder='amount' />";
	pix_color = pix_color + "</td>";
	pix_color = pix_color + "</tr>";
	pix_color = pix_color + "</table>";
	pix_color = pix_color + "</div>";
	document.getElementById("dialogue-furnace-enterOre").innerHTML = pix_color;
	document.getElementById("dialogue-furnace-selectOre").innerHTML = "";
	document.getElementById("dialogue-furnace-buttons-area").innerHTML = "<br /><table width='80%'><tr><td><div onclick='closeDialogue(\"dialogue-furnace\")' class='dialogue-button'>Close</div></td><td><div onclick='closeDialogue(\"dialogue-furnace\");smelt(\"" + mmCoreSplitViewBlock + "\", document.getElementById(\"dialogue-furnace-smelt-amount\").value)' style='background-color:#b3ffff' class='dialogue-button'>Smelt</div></td></tr></table>";
	setMaxOreThatCanSmelt(mmCoreSplitViewBlock, $ionicHistory);
	furnaceDialogueValueOnKeyUp(document.getElementById("dialogue-furnace-smelt-amount").value);
};
