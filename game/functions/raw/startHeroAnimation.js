/**
 * startHeroAnimation extracted from ../../deobfuscated/bundle.js at line 17258-17268
 *
 * If this file doesn't contain a function, there is an error in ../raw/startHeroAnimation.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function startHeroAnimation(_0x159FE)
{
	if (_0x159FE.startsWith("flicker"))
	{
		global_heroFlicker = true;
		setTimeout(function ()
		{
			global_heroFlicker = false
		}, 3000)
	}
}