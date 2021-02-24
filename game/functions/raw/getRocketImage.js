/**
 * getRocketImage extracted from ../../deobfuscated/bundle.js at line 19118-19128
 *
 * If this file doesn't contain a function, there is an error in ../raw/getRocketImage.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getRocketImage()
{
	if (getItem("titaniumRocketBoosters") > 0)
	{
		return "images/titaniumRocket.png"
	};
	if (getItem("rocket") == 1)
	{
		return "images/rocket.png"
	}
}