'use strict';

function getEnergyRequired(popup)
{
	var _a_ = 0;
	switch (popup)
	{
	case "fields":
		_a_ = 50;
		break;
	case "forest":
		_a_ = 200;
		break;
	}
	return _a_;
};
