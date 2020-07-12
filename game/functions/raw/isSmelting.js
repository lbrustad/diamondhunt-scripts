/**
 * isSmelting extracted from ../../deobfuscated/bundle.js at line 2727-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/isSmelting.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function isSmelting()
{
	return (getItem("smeltingCurrentAmount") < getItem("smeltingRequestedAmount") && getItem("smeltingNeededTimer") > 0)
}