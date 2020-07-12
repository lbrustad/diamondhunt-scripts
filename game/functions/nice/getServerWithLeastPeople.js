'use strict';

function getServerWithLeastPeople()
{
	var interestingPoint = 0;
	var whatToScale = 10000000;
	var indexLookupKey = 0;
	for (; indexLookupKey <= 100; indexLookupKey++)
	{
		if (servers_information[indexLookupKey] == null)
		{
			break;
		}
		var viewportCenter = servers_information[indexLookupKey][0];
		var baseFooterHeight = servers_information[indexLookupKey][1];
		var baseHeaderHeight = servers_information[indexLookupKey][2];
		var width = servers_information[indexLookupKey][3];
		if (baseHeaderHeight == 1 || baseFooterHeight == 0)
		{
			continue;
		}
		if (whatToScale > width)
		{
			interestingPoint = viewportCenter;
			whatToScale = width;
		}
	}
	return interestingPoint;
};
