'use strict';

function getImageExtention(canCreateDiscussions)
{
	switch (canCreateDiscussions)
	{
	case "darkCrystal":
	case "bloodDiamond":
		return ".gif";
	default:
		return ".png";
	}
};
