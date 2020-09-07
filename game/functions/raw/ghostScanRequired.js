/**
 * ghostScanRequired extracted from ../../deobfuscated/bundle.js at line 18218-18221
 *
 * If this file doesn't contain a function, there is an error in ../raw/ghostScanRequired.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function ghostScanRequired()
{
	return getItemString("monsterName") == "ghost" || getItemString("monsterName") == "skeletonGhost" || getItemString("monsterName") == "reaper"
}