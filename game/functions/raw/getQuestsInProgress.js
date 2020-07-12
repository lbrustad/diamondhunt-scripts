/**
 * getQuestsInProgress extracted from ../../deobfuscated/bundle.js at line 3378-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/getQuestsInProgress.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getQuestsInProgress()
{
	var _0x1D48C = 0;
	var _0x1D4D2 = document.getElementById("item-section-quests-1").getElementsByTagName("div");
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D4D2.length; _0x1C6B6++)
	{
		if (getItem(_0x1D4D2[_0x1C6B6].id.split("-")[2] + "Quest") > 0)
		{
			_0x1D48C++
		}
	};
	return _0x1D48C
}