'use strict';

function clicksGreenOrb(f)
{
	var foriginal = getOrbDescription(f);
	confirmDialogue("images/" + f + ".png", "Would you like to bind this to your account?  The orb will become untradable if so.<br /><br /><span style='color:grey'>" + foriginal + "</span>", "Bind Orb", "Cancel", "BIND_GREEN_ORB=" + f);
};
