'use strict';

function setInnerHTMLCache(div, value)
{
	var captureLeft = value.replace(/\s|'|"|&quot;|\//gi, "");
	var currentLeft = div.innerHTML.replace(/\s|'|"|&quot;|\//gi, "");
	if (captureLeft != currentLeft)
	{
		div.innerHTML = value;
	}
};
