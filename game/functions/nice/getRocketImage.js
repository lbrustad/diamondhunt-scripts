'use strict';

function getRocketImage()
{
	if (getItem("titaniumRocketBoosters") > 0)
	{
		return "images/titaniumRocket.png";
	}
	if (getItem("rocket") == 1)
	{
		return "images/rocket.png";
	}
};
