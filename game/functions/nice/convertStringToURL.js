'use strict';

function convertStringToURL(neu_url)
{
	if (!neu_url.startsWith("http"))
	{
		neu_url = "http://" + neu_url;
	}
	var _a_ = "<a onclick='return clicksLink();' href='" + neu_url + "' target='_blank'>" + neu_url + "</a>";
	return _a_;
};
