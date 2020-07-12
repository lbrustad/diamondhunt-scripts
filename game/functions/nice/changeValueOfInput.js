'use strict';

function changeValueOfInput(checkFor, id, inputid, type)
{
	var min = 0;
	var rgb = [];
	var i = 0;
	for (; i < checkFor.length; i++)
	{
		rgb[i] = parseInt(getItem(checkFor[i]) / id[i]);
	}
	min = Math.min.apply(Math, rgb);
	switch (type)
	{
	case "ONE":
		document.getElementById(inputid).value = 1;
		break;
	case "25%":
		document.getElementById(inputid).value = parseInt(min * 0.25);
		break;
	case "50%":
		document.getElementById(inputid).value = parseInt(min * 0.50);
		break;
	case "ALL":
		document.getElementById(inputid).value = min;
		break;
	}
};
