/**
 * refreshPotionsCombat extracted from ../../deobfuscated/bundle.js at line 18125-18147
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshPotionsCombat.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshPotionsCombat()
{
	var _0x19252 = false;
	if (getItem("largeManaPotion") > 0)
	{
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.display = "";
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.filter = "brightness(100%)";
		_0x19252 = true
	};
	if (getItem("largeManaPotionUsed") == 1)
	{
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.display = "";
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.filter = "brightness(10%)"
	};
	if (_0x19252)
	{
		document.getElementById("fighting-screen-potions-area").style.display = ""
	}
	else
	{
		document.getElementById("fighting-screen-potions-area").style.display = "none"
	}
}