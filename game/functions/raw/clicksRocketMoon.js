/**
 * clicksRocketMoon extracted from ../../deobfuscated/bundle.js at line 8365-8379
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksRocketMoon.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksRocketMoon()
{
	var _0x16255 = "rocket";
	var _0x151ED = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getItem("oil") >= 100000)
	{
		_0x151ED = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	var _0x1671E = "";
	if (getItem("titaniumRocketBoosters") > 0)
	{
		_0x1671E = "<br /><table style=\'color:grey;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/titaniumRocketBoosters.png\' class=\'img-30\' /></td><td style=\'font-size:10pt;text-align:right;\'>A notification will show up and can be clicked to activate the boosters. <u style=\'cursor:pointer;\' onclick=\'titaniumRocketBoostersMoreInfo()\'>(more info)</u></td></tr></table>"
	};
	confirmDialogue(getRocketImage(), "Would you like to go to the moon?<br /><br /><span style=\'color:grey\'>Requires <img src=\'images/oil.png\' class=\'img-20\' /> 100,000 oil " + _0x151ED + "</span><br /><br /><center><table style=\'color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/moon.png\' class=\'img-50\' /></td><td>384,000 km</td></tr><tr><td><img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /></td><td>" + formatNumber(getItem(_0x16255 + "Trips")) + " Trips completed</td></tr></table></center>" + _0x1671E, "Launch Rocket", "Close", "LAUNCH_ROCKET=moon")
}