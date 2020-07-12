'use strict';

function refreshPotionsCombat()
{
	var _a_ = false;
	if (getItem("largeManaPotion") > 0)
	{
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.display = "";
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.filter = "brightness(100%)";
		_a_ = true;
	}
	if (getItem("largeManaPotionUsed") == 1)
	{
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.display = "";
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.filter = "brightness(10%)";
	}
	if (_a_)
	{
		document.getElementById("fighting-screen-potions-area").style.display = "";
	}
	else
	{
		document.getElementById("fighting-screen-potions-area").style.display = "none";
	}
};
