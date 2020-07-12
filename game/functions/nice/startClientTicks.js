'use strict';

function startClientTicks()
{
	idleHeroCanvasTick();
	idleFightingCanvasTick();
	setInterval(idleHeroCanvasTick, 750);
	setInterval(idleFightingCanvasTick, 25);
	setInterval(fightingMonsterCanvasTick, 25);
};
