/**
 * refreshHomeTab extracted from ../../deobfuscated/bundle.js at line 1207-1213
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshHomeTab.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshHomeTab()
{
	if (getItem("homeHint") == 0)
	{
		sendBytes("HOME_HINT_OFF")
	}
}