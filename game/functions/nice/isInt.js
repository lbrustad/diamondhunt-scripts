'use strict';

function isInt(o)
{
	return !isNaN(o) && parseInt(Number(o)) == o && !isNaN(parseInt(o, 10));
};
