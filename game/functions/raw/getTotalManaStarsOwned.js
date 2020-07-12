/**
 * getTotalManaStarsOwned extracted from ../../deobfuscated/bundle.js at line 2438-2441
 *
 * If this file doesn't contain a function, there is an error in ../raw/getTotalManaStarsOwned.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getTotalManaStarsOwned()
{
	return getItem("smallManaStarUsed") + getItem("mediumManaStarUsed") + getItem("largeManaStarUsed") + getItem("hugeManaStarUsed")
}