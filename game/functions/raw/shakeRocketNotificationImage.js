/**
 * shakeRocketNotificationImage extracted from ../../deobfuscated/bundle.js at line 13656-13670
 *
 * If this file doesn't contain a function, there is an error in ../raw/shakeRocketNotificationImage.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function shakeRocketNotificationImage()
{
	$("#notification-rocket").effect("shake"
	, {
		direction: "left"
		, times: 100
		, distance: 1
	}, 10000);
	$("#item-box-rocket-image").effect("shake"
	, {
		direction: "left"
		, times: 100
		, distance: 1
	}, 10000)
}