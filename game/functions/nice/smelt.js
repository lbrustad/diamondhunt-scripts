'use strict';

function smelt(formatters, customFormatters)
{
	sendBytes("SMELT=" + formatters + "~" + customFormatters);
};
