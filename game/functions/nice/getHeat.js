'use strict';

function getHeat(value)
{
	var _a_ = 0;
	switch (value)
	{
	case "logs":
		_a_ = 1;
		break;
	case "oakLogs":
		_a_ = 2;
		break;
	case "willowLogs":
		_a_ = 3;
		break;
	case "bambooLogs":
		_a_ = 4;
		break;
	case "mapleLogs":
		_a_ = 5;
		break;
	case "lavaLogs":
		_a_ = 6;
		break;
	case "pineLogs":
		_a_ = 7;
		break;
	case "stardustLogs":
		_a_ = 8;
		break;
	}
	return _a_;
};
