'use strict';

function changeValueOfInput(checkFor, id, inputid, type, width)
{
	var height = 0;
	var options = [];
	var i = 0;
	for (; i < checkFor.length; i++)
	{
		options[i] = parseInt(getItem(checkFor[i]) / id[i]);
	}
	height = Math.min.apply(Math, options);
	switch (type)
	{
	case "ONE":
		document.getElementById(inputid).value = 1;
		break;
	case "25%":
		document.getElementById(inputid).value = parseInt(height * 0.25);
		break;
	case "50%":
		document.getElementById(inputid).value = parseInt(height * 0.50);
		break;
	case "ALL":
		document.getElementById(inputid).value = height;
		break;
	}
	if (height > width)
	{
		document.getElementById(inputid).value = width;
		switch (type)
		{
		case "25%":
			document.getElementById(inputid).value = parseInt(width * 0.25);
			break;
		case "50%":
			document.getElementById(inputid).value = parseInt(width * 0.50);
			break;
		}
	}
};
