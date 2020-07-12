'use strict';

function getAllocationAmount(apiUrl, apiAuth)
{
	var _a_ = 0;
	var terms = 0;
	for (; terms < 5; terms++)
	{
		if (getItem(apiUrl + "Allocation" + terms) == apiAuth)
		{
			_a_++;
		}
	}
	return _a_;
};
