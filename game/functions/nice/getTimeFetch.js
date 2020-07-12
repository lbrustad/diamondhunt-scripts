'use strict';

function getTimeFetch()
{
	var slotStartDate = new Date;
	if (slotStartDate.getHours() < 10)
	{
		var _a_ = "0" + slotStartDate.getHours();
	}
	else
	{
		_a_ = slotStartDate.getHours();
	}
	if (slotStartDate.getMinutes() < 10)
	{
		var _b_ = "0" + slotStartDate.getMinutes();
	}
	else
	{
		_b_ = slotStartDate.getMinutes();
	}
	var _c_ = "[" + _a_ + ":" + _b_ + "] ";
	return _c_;
};
