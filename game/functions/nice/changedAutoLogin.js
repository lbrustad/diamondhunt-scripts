'use strict';

function changedAutoLogin(canCreateDiscussions)
{
	if (canCreateDiscussions)
	{
		if (localStorage.getItem("auto-login") != null)
		{
			localStorage.removeItem("auto-login");
		}
	}
	else
	{
		localStorage.setItem("auto-login", "off");
	}
};
