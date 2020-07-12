'use strict';

function createHTMLBoxCheckOrXCollection(indices, vertices, xx)
{
	var pix_color = "";
	pix_color = pix_color + "<div>";
	var i = 0;
	for (; i < indices.length; i++)
	{
		pix_color = pix_color + createHTMLBoxCheckOrX(indices[i], vertices[i], xx[i]);
	}
	pix_color = pix_color + "</div>";
	return pix_color;
};
