/**
 * notificationSound extracted from ../../deobfuscated/bundle.js at line 6839-6853
 *
 * If this file doesn't contain a function, there is an error in ../raw/notificationSound.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function notificationSound(_0x15DD2)
{
	if (_0x15DD2)
	{
		playSound("sounds/twinkle.mp3");
		localStorage.setItem("notificationSound", "on")
	}
	else
	{
		if (localStorage.getItem("notificationSound") != null)
		{
			localStorage.removeItem("notificationSound")
		}
	}
}