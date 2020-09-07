/**
 * startHeroAnimation extracted from ../../deobfuscated/bundle.js at line 13930-13940
 *
 * If this file doesn't contain a function, there is an error in ../raw/startHeroAnimation.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function startHeroAnimation(_0x4178)
{
	if (_0x4178.startsWith("flicker"))
	{
		global_heroFlicker = true;
		setTimeout(function ()
		{
			global_heroFlicker = false
		}, 3000)
	}
}