/**
 * doSkyCrystalShake extracted from ../../deobfuscated/bundle.js at line 6134-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/doSkyCrystalShake.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function doSkyCrystalShake()
{
	$("#body").effect("shake"
	, {
		direction: "left"
		, times: 40
		, distance: 10
	}, 10000);
	setTimeout(function ()
	{
		confirmDialogue("images/bob.png", "What\'s going on!", "Close", "", "SHAKE_SKYCRYSTAL=1")
	}, 10000)
}