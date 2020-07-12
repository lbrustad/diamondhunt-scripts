'use strict';

function getQuestsInProgress()
{
	var _a_ = 0;
	var groupFigures = document.getElementById("item-section-quests-1").getElementsByTagName("div");
	var i = 0;
	for (; i < groupFigures.length; i++)
	{
		if (getItem(groupFigures[i].id.split("-")[2] + "Quest") > 0)
		{
			_a_++;
		}
	}
	return _a_;
};
