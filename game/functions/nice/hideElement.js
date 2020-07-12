'use strict';

function hideElement(target)
{
	if (document.getElementById(target) != null)
	{
		if (document.getElementById(target).style.display != "none")
		{
			document.getElementById(target).style.display = "none";
		}
	}
};
