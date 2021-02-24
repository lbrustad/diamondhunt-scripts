'use strict';

function clicksRocket()
{
	var vehicle = "rocket";
	if (getItemString("rocketDestination") == "moon" && getItem("rocketKm") == 384000)
	{
		sendBytes("COLLECT_ROCKET=moon");
		return;
	}
	if (getItemString("rocketDestination") == "mars" && getItem("rocketKm") == 54000000)
	{
		sendBytes("COLLECT_ROCKET=mars");
		return;
	}
	if (getItem("researcherMining") >= 6)
	{
		document.getElementById("moon-trips-completed").innerHTML = formatNumber(getItem("rocketTrips"));
		document.getElementById("mars-trips-completed").innerHTML = formatNumber(getItem("rocketTripsMars"));
		openDialogue("dialogue-rocket");
	}
	else
	{
		clicksRocketMoon();
	}
};
