'use strict';

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
	}, 10000);
};
