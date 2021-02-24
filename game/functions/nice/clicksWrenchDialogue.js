'use strict';

function clicksWrenchDialogue()
{
	var patch3c = "";
	patch3c = patch3c + "Set your current running mining machinery to automatically be turned on if you reach 0 oil?<br /><br />";
	patch3c = patch3c + "<span style='color:grey;font-size:10pt;'>If your oil income is in the negative, once it reaches 0, instead of automatically turning off all machines - your miner will turn on a preset of machines that you have set.</span>";
	confirmDialogue("images/wrench.png", patch3c, "Set Machines", "Close", "SET_WRENCH");
};
