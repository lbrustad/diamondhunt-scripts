/**
 * getTotalLootBagsOwned extracted from ../../deobfuscated/bundle.js at line 12332-12344
 *
 * If this file doesn't contain a function, there is an error in ../raw/getTotalLootBagsOwned.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getTotalLootBagsOwned()
{
	var _0x1766E = 0;
	_0x1766E += getItem("fieldsLootBag");
	_0x1766E += getItem("forestLootBag");
	_0x1766E += getItem("cavesLootBag");
	_0x1766E += getItem("lavaDungeonLootBag");
	_0x1766E += getItem("northernFieldsLootBag");
	_0x1766E += getItem("cemeteryLootBag");
	_0x1766E += getItem("oceanLootBag");
	_0x1766E += getItem("dungeonLootBag");
	return _0x1766E
}