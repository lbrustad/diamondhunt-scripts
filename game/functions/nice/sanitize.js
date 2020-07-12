'use strict';

function sanitize(potentialString)
{
	var entityMap = {
		"&": "&amp;"
		, "<": "&lt;"
		, ">": "&gt;"
		, '"': "&quot;"
		, "'": "&#x27;"
		, "/": "&#47;"
	};
	var mdSuffix = /[&<>"'/]/ig;
	return potentialString.replace(mdSuffix, function (s)
	{
		return entityMap[s];
	});
};
