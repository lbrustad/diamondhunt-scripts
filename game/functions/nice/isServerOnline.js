'use strict';

function isServerOnline(canCreateDiscussions)
{
	var indexLookupKey = 0;
	for (; indexLookupKey <= 100; indexLookupKey++)
	{
		if (servers_information[indexLookupKey] == null)
		{
			break;
		}
		if (servers_information[indexLookupKey][0] == canCreateDiscussions && servers_information[indexLookupKey][1] == 1)
		{
			return true;
		}
	}
	return false;
};
