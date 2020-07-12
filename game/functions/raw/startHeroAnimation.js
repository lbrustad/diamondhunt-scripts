/**
 * startHeroAnimation extracted from ../../deobfuscated/bundle.js at line 10144-10154
 *
 * If this file doesn't contain a function, there is an error in ../raw/startHeroAnimation.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function startHeroAnimation(_0x1CC2E)
{
	if (_0x1CC2E.startsWith("flicker"))
	{
		global_heroFlicker = true;
		setTimeout(function ()
		{
			global_heroFlicker = false
		}, 3000)
	}
}