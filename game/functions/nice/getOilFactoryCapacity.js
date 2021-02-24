'use strict';

function getOilFactoryCapacity()
{
	var _a_ = 0;
	if (getItem("oilFactory") == 1)
	{
		_a_ = 10;
	}
	else
	{
		if (getItem("promethiumOilFactory") == 1)
		{
			_a_ = 20;
		}
		else
		{
			if (getItem("titaniumOilFactory") == 1)
			{
				_a_ = 30;
			}
		}
	}
	if (getItem("greenOilFactoryOrbBound") > 0)
	{
		_a_ = _a_ + 50;
	}
	return _a_;
};
