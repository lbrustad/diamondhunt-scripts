'use strict';

function getAreaCooldown(popup)
{
	var _a_ = 0;
	switch (popup)
	{
	case "fields":
		_a_ = 3600 / 4;
		break;
	case "forest":
		_a_ = 3600 / 2;
		break;
	}
	return _a_;
};
