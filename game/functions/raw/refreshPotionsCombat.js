/**
 * refreshPotionsCombat extracted from ../../deobfuscated/bundle.js at line 10664-10686
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshPotionsCombat.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshPotionsCombat()
{
	var _0x1DE3A = false;
	if (getItem("largeManaPotion") > 0)
	{
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.display = "";
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.filter = "brightness(100%)";
		_0x1DE3A = true
	};
	if (getItem("largeManaPotionUsed") == 1)
	{
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.display = "";
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.filter = "brightness(10%)"
	};
	if (_0x1DE3A)
	{
		document.getElementById("fighting-screen-potions-area").style.display = ""
	}
	else
	{
		document.getElementById("fighting-screen-potions-area").style.display = "none"
	}
}