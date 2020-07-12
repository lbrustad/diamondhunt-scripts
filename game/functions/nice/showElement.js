'use strict';

function showElement(el)
{
	if (document.getElementById(el) != null)
	{
		if (document.getElementById(el).style.display == "none")
		{
			document.getElementById(el).style.display = "";
		}
	}
};
