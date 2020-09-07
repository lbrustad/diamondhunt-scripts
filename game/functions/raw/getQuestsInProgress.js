/**
 * getQuestsInProgress extracted from ../../deobfuscated/bundle.js at line 4295-4307
 *
 * If this file doesn't contain a function, there is an error in ../raw/getQuestsInProgress.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getQuestsInProgress()
{
	var _0x554B = 0;
	var _0x55DC = document.getElementById("item-section-quests-1").getElementsByTagName("div");
	for (var _0x3607 = 0; _0x3607 < _0x55DC.length; _0x3607++)
	{
		if (getItem(_0x55DC[_0x3607].id.split("-")[2] + "Quest") > 0)
		{
			_0x554B++
		}
	};
	return _0x554B
}