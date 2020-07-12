'use strict';

function refreshHomeTab()
{
	if (getItem("homeHint") == 0)
	{
		sendBytes("HOME_HINT_OFF");
	}
};
