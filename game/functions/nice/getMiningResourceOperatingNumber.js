'use strict';

function getMiningResourceOperatingNumber(dash_on)
{
	var _a_ = 0;
	var dash_off = 0;
	for (; dash_off < 5; dash_off++)
	{
		if (getItemString(dash_on + "Allocation" + dash_off) != "none")
		{
			_a_++;
		}
	}
	return _a_;
};
