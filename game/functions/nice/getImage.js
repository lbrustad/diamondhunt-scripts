'use strict';

function getImage(img, i)
{
	if (global_ImageCache[i] != null)
	{
		if (global_ImageCache[i].url == img)
		{
			return global_ImageCache[i].obj;
		}
	}
	var $img = new ImageObject(img);
	global_ImageCache[i] = $img;
	return $img.obj;
};
