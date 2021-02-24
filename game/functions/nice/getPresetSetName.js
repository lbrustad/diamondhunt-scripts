'use strict';

function getPresetSetName(canCreateDiscussions)
{
	var _viewContentAlign = getItemString("presetName" + canCreateDiscussions);
	if (_viewContentAlign == "none")
	{
		return "Preset " + (canCreateDiscussions + 1);
	}
	return _viewContentAlign;
};
