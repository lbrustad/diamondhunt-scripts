/**
 * startClientTicks extracted from ../../deobfuscated/bundle.js at line 934-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/startClientTicks.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function startClientTicks()
{
	idleHeroCanvasTick();
	idleFightingCanvasTick();
	setInterval(idleHeroCanvasTick, 750);
	setInterval(idleFightingCanvasTick, 25);
	setInterval(fightingMonsterCanvasTick, 25)
}