'use strict';

function notificationSound(canCreateDiscussions)
{
	if (canCreateDiscussions)
	{
		playSound("sounds/twinkle.mp3");
		localStorage.setItem("notificationSound", "on");
	}
	else
	{
		if (localStorage.getItem("notificationSound") != null)
		{
			localStorage.removeItem("notificationSound");
		}
	}
};
