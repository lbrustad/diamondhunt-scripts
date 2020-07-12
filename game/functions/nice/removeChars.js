'use strict';

function removeChars(string)
{
	return string.replace(/[^\x00-\x7F]/g, "");
};
