'use strict';

function getCharcoalSuccessRate(command)
{
	var _a_ = 0;
	switch (command)
	{
	case "logs":
		_a_ = 0.01;
		break;
	case "oakLogs":
		_a_ = 0.02;
		break;
	case "willowLogs":
		_a_ = 0.03;
		break;
	case "bambooLogs":
		_a_ = 0.05;
		break;
	case "mapleLogs":
		_a_ = 0.07;
		break;
	case "lavaLogs":
		_a_ = 0.10;
		break;
	case "pineLogs":
		_a_ = 0.14;
		break;
	case "stardustLogs":
		_a_ = 0.20;
		break;
	}
	if (getItem("titaniumCharcoalFoundry") == 1)
	{
		_a_ = _a_ * 2;
	}
	return _a_;
};
