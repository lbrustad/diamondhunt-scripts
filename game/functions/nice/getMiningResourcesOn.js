'use strict';

function getMiningResourcesOn(canCreateDiscussions)
{
	var _a_ = 0;
	var _b_ = 1;
	for (; _b_ <= 5; _b_++)
	{
		if (getItemString(canCreateDiscussions + "Allocation" + 1) != "none")
		{
			_a_++;
		}
	}
	return _a_;
};
