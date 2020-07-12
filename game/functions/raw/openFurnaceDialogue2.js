/**
 * openFurnaceDialogue2 extracted from ../../deobfuscated/bundle.js at line 7696-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/openFurnaceDialogue2.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openFurnaceDialogue2(_0x1D34A, _0x1C91E)
{
	global_tracker_furnaceDialgoue_furnace = _0x1D34A;
	global_tracker_furnaceDialgoue_ore = _0x1C91E;
	document.getElementById("dialogue-furnace-enterOre").innerHTML = "";
	var _0x1CC4A = "";
	_0x1CC4A += "<div class=\'dialogue-furnace-enterOre\'>";
	_0x1CC4A += "<table width=\'90%\'>";
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td>";
	_0x1CC4A += "<img src=\'images/" + _0x1D34A + ".png\' class=\'img-100\' /> ";
	_0x1CC4A += "<img src=\'images/" + _0x1C91E + ".png\' class=\'img-100\' /> ";
	_0x1CC4A += "</td>";
	_0x1CC4A += "<td>";
	_0x1CC4A += "<input type=\'text\' id=\'dialogue-furnace-smelt-amount\' class=\'enter-amount-text\' onkeyup=\'furnaceDialogueValueOnKeyUp(this.value)\' placeholder=\'amount\' />";
	_0x1CC4A += "</td>";
	_0x1CC4A += "</tr>";
	_0x1CC4A += "</table>";
	_0x1CC4A += "</div>";
	document.getElementById("dialogue-furnace-enterOre").innerHTML = _0x1CC4A;
	document.getElementById("dialogue-furnace-selectOre").innerHTML = "";
	document.getElementById("dialogue-furnace-buttons-area").innerHTML = "<br /><table width=\'80%\'><tr><td><div onclick=\'closeDialogue(\"dialogue-furnace\")\' class=\'dialogue-button\'>Close</div></td><td><div onclick=\'closeDialogue(\"dialogue-furnace\");smelt(\"" + _0x1C91E + "\", document.getElementById(\"dialogue-furnace-smelt-amount\").value)\' style=\'background-color:#b3ffff\' class=\'dialogue-button\'>Smelt</div></td></tr></table>";
	setMaxOreThatCanSmelt(_0x1C91E, _0x1D34A);
	furnaceDialogueValueOnKeyUp(document.getElementById("dialogue-furnace-smelt-amount").value)
}