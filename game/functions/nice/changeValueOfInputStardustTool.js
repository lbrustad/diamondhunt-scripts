'use strict';

function changeValueOfInputStardustTool(studentId, courseId, canCreateDiscussions)
{
	var total_pageviews_raw = getMaxForStardustTool();
	switch (canCreateDiscussions)
	{
	case "ONE":
		total_pageviews_raw = 1;
		break;
	case "25%":
		total_pageviews_raw = total_pageviews_raw * 0.25;
		break;
	case "50%":
		total_pageviews_raw = total_pageviews_raw * 0.5;
		break;
	}
	document.getElementById("dialogue-stardustTool2-input").value = parseInt(total_pageviews_raw);
	onKeyUpStardustXonvertXp();
};
