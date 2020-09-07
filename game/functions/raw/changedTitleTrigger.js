/**
 * changedTitleTrigger extracted from ../../deobfuscated/bundle.js at line 5847-5860
 *
 * If this file doesn't contain a function, there is an error in ../raw/changedTitleTrigger.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function changedTitleTrigger(_0x44A4)
{
	if (_0x44A4)
	{
		if (localStorage.getItem("titletrigger") != null)
		{
			localStorage.removeItem("titletrigger")
		}
	}
	else
	{
		localStorage.setItem("titletrigger", "off")
	}
}