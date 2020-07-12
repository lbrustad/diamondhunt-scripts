'use strict';

function convertNumberWithLetrtsKMBToNumber(x)
{
	if ((x + "").indexOf("k") != -1 || (x + "").indexOf("K") != -1)
	{
		x = x.toUpperCase();
		x = x.replace("K", "");
		x = x * 1000;
	}
	if ((x + "").indexOf("m") != -1 || (x + "").indexOf("M") != -1)
	{
		x = x.toUpperCase();
		x = x.replace("M", "");
		x = x * 1000000;
	}
	if ((x + "").indexOf("b") != -1 || (x + "").indexOf("B") != -1)
	{
		x = x.toUpperCase();
		x = x.replace("B", "");
		x = x * 1000000000;
	}
	return x;
};
