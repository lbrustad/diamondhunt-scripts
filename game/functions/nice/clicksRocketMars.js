'use strict';

function clicksRocketMars()
{
	var vehicle = "rocket";
	var _a_ = "<img src='images/x.png' class='img-20' />";
	if (getItem("oil") >= 200000)
	{
		_a_ = "<img src='images/check.png' class='img-20' />";
	}
	var th_field = "";
	if (getItem("titaniumRocketBoosters") > 0)
	{
		th_field = "<br /><table style='color:grey;padding:10px;border:1px solid #000033; background-color:#b3d9ff;'><tr><td><img src='images/titaniumRocketBoosters.png' class='img-30' /></td><td style='font-size:10pt;text-align:right;'>A notification will show up and can be clicked to activate the boosters. <u style='cursor:pointer;' onclick='titaniumRocketBoostersMoreInfo()'>(more info)</u></td></tr></table>";
	}
	confirmDialogue(getRocketImage(), "Would you like to go to mars?<br /><br /><span style='color:grey'>Requires <img src='images/oil.png' class='img-20' /> 200,000 oil " + _a_ + "</span><br /><br /><center><table style='color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;'><tr><td><img src='images/mars.png' class='img-50' /></td><td>54,000,000 km</td></tr><tr><td><img src='images/" + vehicle + ".png' class='img-50' /></td><td>" + formatNumber(getItem(vehicle + "TripsMars"))
		+ " Trips completed</td></tr></table></center>" + th_field, "Launch Rocket", "Close", "LAUNCH_ROCKET=mars");
};
