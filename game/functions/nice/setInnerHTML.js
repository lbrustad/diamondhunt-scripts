'use strict';

function setInnerHTML(el, value)
{
	if (document.getElementById(el) != null)
	{
		document.getElementById(el).style.display = "";
		document.getElementById(el).innerHTML = value;
	}
};
