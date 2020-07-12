'use strict';

function freePlotsAmount()
{
	var _a_ = 0;
	var sessionId = 1;
	for (; sessionId <= 6; sessionId++)
	{
		if (getItem("plotUnlocked" + sessionId) == 1 && getItemString("plot" + sessionId) == "none")
		{
			_a_++;
		}
	}
	return _a_;
};
