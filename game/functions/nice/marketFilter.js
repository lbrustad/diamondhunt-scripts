'use strict';

function marketFilter(courseId, canCreateDiscussions)
{
	courseId = courseId.toLowerCase();
	var $tbodyOrHead = document.getElementById("market-table");
	var groupFigures = $tbodyOrHead.getElementsByTagName("tr");
	var i = 0;
	for (; i < groupFigures.length; i++)
	{
		groupFigures[i].style.display = "";
		var enabled_methods = groupFigures[i].id.split("-")[2];
		if (enabled_methods != null)
		{
			enabled_methods = getItemName(enabled_methods).toLowerCase();
			if (canCreateDiscussions)
			{
				if (enabled_methods != courseId)
				{
					groupFigures[i].style.display = "none";
				}
			}
			else
			{
				if (!enabled_methods.includes(courseId.trim()))
				{
					groupFigures[i].style.display = "none";
				}
			}
		}
	}
	if (courseId.length > 0)
	{
		document.getElementById("market-filter-x").style.display = "";
	}
	else
	{
		document.getElementById("market-filter-x").style.display = "none";
	}
};
