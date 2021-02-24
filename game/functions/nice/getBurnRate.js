'use strict';

function getBurnRate()
{
	var _a_ = 1;
	switch (getOvenType())
	{
	case "bronzeOven":
		_a_ = 0.5;
		break;
	case "ironOven":
		_a_ = 0.4;
		break;
	case "silverOven":
		_a_ = 0.3;
		break;
	case "goldOven":
		_a_ = 0.2;
		break;
	case "promethiumOven":
		_a_ = 0.1;
		break;
	case "titaniumOven":
		_a_ = 0.05;
		break;
	}
	if (getItem("researcherCooking") >= 3)
	{
		_a_ = _a_ - 0.05;
	}
	return _a_;
};
