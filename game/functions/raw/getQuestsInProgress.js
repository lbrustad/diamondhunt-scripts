/**
 * getQuestsInProgress extracted from ../../deobfuscated/bundle.js at line 4985-4997
 *
 * If this file doesn't contain a function, there is an error in ../raw/getQuestsInProgress.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getQuestsInProgress()
{
	var _0x17349 = 0;
	var _0x1743E = document.getElementById("item-section-quests-1").getElementsByTagName("div");
	for (var _0x14C0C = 0; _0x14C0C < _0x1743E.length; _0x14C0C++)
	{
		if (getItem(_0x1743E[_0x14C0C].id.split("-")[2] + "Quest") > 0)
		{
			_0x17349++
		}
	};
	return _0x17349
}