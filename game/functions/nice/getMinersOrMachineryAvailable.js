'use strict';

function getMinersOrMachineryAvailable(maxItem)
{
	var _a_ = 0;
	var parentWidth = 0;
	for (; parentWidth < getItem(maxItem); parentWidth++)
	{
		if (getItemString(maxItem + "Allocation" + parentWidth) == "none")
		{
			_a_++;
		}
	}
	return _a_;
};
