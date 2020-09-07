/**
 * openFurnaceDialogue2 extracted from ../../deobfuscated/bundle.js at line 10043-10067
 *
 * If this file doesn't contain a function, there is an error in ../raw/openFurnaceDialogue2.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openFurnaceDialogue2(_0x51C8, _0x3B03)
{
	global_tracker_furnaceDialgoue_furnace = _0x51C8;
	global_tracker_furnaceDialgoue_ore = _0x3B03;
	document.getElementById("dialogue-furnace-enterOre").innerHTML = "";
	var _0x41B2 = "";
	_0x41B2 += "<div class=\'dialogue-furnace-enterOre\'>";
	_0x41B2 += "<table width=\'90%\'>";
	_0x41B2 += "<tr>";
	_0x41B2 += "<td>";
	_0x41B2 += "<img src=\'images/" + _0x51C8 + ".png\' class=\'img-100\' /> ";
	_0x41B2 += "<img src=\'images/" + _0x3B03 + ".png\' class=\'img-100\' /> ";
	_0x41B2 += "</td>";
	_0x41B2 += "<td>";
	_0x41B2 += "<input type=\'text\' id=\'dialogue-furnace-smelt-amount\' class=\'enter-amount-text\' onkeyup=\'furnaceDialogueValueOnKeyUp(this.value)\' placeholder=\'amount\' />";
	_0x41B2 += "</td>";
	_0x41B2 += "</tr>";
	_0x41B2 += "</table>";
	_0x41B2 += "</div>";
	document.getElementById("dialogue-furnace-enterOre").innerHTML = _0x41B2;
	document.getElementById("dialogue-furnace-selectOre").innerHTML = "";
	document.getElementById("dialogue-furnace-buttons-area").innerHTML = "<br /><table width=\'80%\'><tr><td><div onclick=\'closeDialogue(\"dialogue-furnace\")\' class=\'dialogue-button\'>Close</div></td><td><div onclick=\'closeDialogue(\"dialogue-furnace\");smelt(\"" + _0x3B03 + "\", document.getElementById(\"dialogue-furnace-smelt-amount\").value)\' style=\'background-color:#b3ffff\' class=\'dialogue-button\'>Smelt</div></td></tr></table>";
	setMaxOreThatCanSmelt(_0x3B03, _0x51C8);
	furnaceDialogueValueOnKeyUp(document.getElementById("dialogue-furnace-smelt-amount").value)
}