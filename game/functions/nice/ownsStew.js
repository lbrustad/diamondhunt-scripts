'use strict';

function ownsStew()
{
	return getItem("lavaStew") > 0 || getItem("chainStew") > 0 || getItem("oysterStew") > 0 || getItem("iceBonesStew") > 0 || getItem("fishStew") > 0 || getItem("bananaStew") > 0 || getItem("appleStew") > 0 || getItem("cheeseStew") > 0 || getItem("honeyStew") > 0;
};
