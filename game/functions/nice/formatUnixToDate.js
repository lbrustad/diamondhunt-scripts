'use strict';

function formatUnixToDate(canCreateDiscussions)
{
	var nextBackupDT = canCreateDiscussions;
	var expected_date2 = new Date(parseInt(nextBackupDT));
	var _a_ = expected_date2.toString("MM/dd/yy HH:mm:ss");
	return _a_;
};
