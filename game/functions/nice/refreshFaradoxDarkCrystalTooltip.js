'use strict';

function refreshFaradoxDarkCrystalTooltip()
{
	var attributeTemplate = 0;
	if (getItem("greenCrystalUsed") > 0)
	{
		attributeTemplate++;
	}
	if (getItem("cyanCrystalUsed") > 0)
	{
		attributeTemplate++;
	}
	if (getItem("redCrystalUsed") > 0)
	{
		attributeTemplate++;
	}
	if (getItem("blueCrystalUsed") > 0)
	{
		attributeTemplate++;
	}
	if (getItem("yellowCrystalUsed") > 0)
	{
		attributeTemplate++;
	}
	document.getElementById("darkCrystalUsed-amm").innerHTML = attributeTemplate;
};
