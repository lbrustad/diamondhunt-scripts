'use strict';

function isValidURL(url)
{
	if (url.indexOf("http") >= 0 || url.indexOf("www.") >= 0 || url.indexOf(".com") >= 0 || url.indexOf(".ca") >= 0 || url.indexOf(".co") >= 0 || url.indexOf(".net") >= 0 || url.indexOf(".us") >= 0)
	{
		if (url.indexOf("%22") >= 0 || url.indexOf("%27") >= 0 || url.indexOf("%3E") >= 0 || url.indexOf("%3C") >= 0 || url.indexOf("&#62;") >= 0 || url.indexOf("&#60;") >= 0 || url.indexOf(";") >= 0 || url.indexOf("~") >= 0 || url.indexOf('"') >= 0 || url.indexOf("<") >= 0 || url.indexOf(">") >= 0 || url.indexOf("javascript:") >= 0 || url.indexOf("window") >= 0 || url.indexOf("document") >= 0 || url.indexOf("cookie") >= 0)
		{
			return false;
		}
		return true;
	}
	else
	{
		return false;
	}
};
