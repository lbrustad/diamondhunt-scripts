/**
 * isUsingFoundry extracted from ../../deobfuscated/bundle.js at line 4178-4181
 *
 * If this file doesn't contain a function, there is an error in ../raw/isUsingFoundry.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function isUsingFoundry()
{
	return (getItem("charcoalFoundryCurrentAmount") < getItem("charcoalFoundryRequestedAmount") && getItem("charcoalFoundryNeededTimer") > 0)
}