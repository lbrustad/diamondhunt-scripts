'use strict';

function getItemName(id)
{
	var curfield = id.charAt(0).toUpperCase();
	var i = 1;
	for (; i < id.length; i++)
	{
		if (id.charAt(i) == id.charAt(i).toUpperCase() && id.charAt(i) != "'")
		{
			curfield = curfield + " ";
		}
		curfield = curfield + id.charAt(i);
	}
	return curfield;
};
