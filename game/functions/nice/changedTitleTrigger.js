'use strict';

function changedTitleTrigger(canCreateDiscussions)
{
	if (canCreateDiscussions)
	{
		if (localStorage.getItem("titletrigger") != null)
		{
			localStorage.removeItem("titletrigger");
		}
	}
	else
	{
		localStorage.setItem("titletrigger", "off");
	}
};
