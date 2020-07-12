'use strict';

function startHeroAnimation(stroke_prev)
{
	if (stroke_prev.startsWith("flicker"))
	{
		global_heroFlicker = true;
		setTimeout(function ()
		{
			global_heroFlicker = false;
		}, 3000);
	}
};
