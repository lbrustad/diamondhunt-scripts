/**
 * clicksRocket extracted from ../../deobfuscated/bundle.js at line 8340-8363
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksRocket.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksRocket()
{
	var _0x16255 = "rocket";
	if (getItemString("rocketDestination") == "moon" && getItem("rocketKm") == 384000)
	{
		sendBytes("COLLECT_ROCKET=moon");
		return
	};
	if (getItemString("rocketDestination") == "mars" && getItem("rocketKm") == 54000000)
	{
		sendBytes("COLLECT_ROCKET=mars");
		return
	};
	if (getItem("researcherMining") >= 6)
	{
		document.getElementById("moon-trips-completed").innerHTML = formatNumber(getItem("rocketTrips"));
		document.getElementById("mars-trips-completed").innerHTML = formatNumber(getItem("rocketTripsMars"));
		openDialogue("dialogue-rocket")
	}
	else
	{
		clicksRocketMoon()
	}
}