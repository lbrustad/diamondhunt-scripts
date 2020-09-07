'use strict';

function mouseEnterSkillTopBar(p, altCss)
{
	if (p == "enter")
	{
		document.getElementById("span-topBar-" + altCss + "Xp").style.display = "none";
		document.getElementById("span-topBar-" + altCss + "Xp-left").style.display = "";
		document.getElementById("span-topBar-" + altCss + "Xp-left").innerHTML = formatNumber(getXpNeeded(1 + parseInt(getLevel(getItem(altCss + "Xp")))) - getItem(altCss + "Xp")) + " xp required";
	}
	else
	{
		document.getElementById("span-topBar-" + altCss + "Xp").style.display = "";
		document.getElementById("span-topBar-" + altCss + "Xp-left").style.display = "none";
	}
};
