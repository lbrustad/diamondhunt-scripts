'use strict';

function changeBodyBackground(_viewContentAlign)
{
	if (_viewContentAlign == "none")
	{
		resetBodyBackground();
	}
	else
	{
		document.getElementById("body").style.backgroundImage = "url('" + _viewContentAlign + "')";
	}
};
