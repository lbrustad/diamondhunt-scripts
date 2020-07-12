'use strict';

function refreshDarkCrystalUsedLabel()
{
	if (document.getElementById("darkCrystalUsed-label") != null)
	{
		document.getElementById("darkCrystalUsed-label").innerHTML = "";
		if (getItem("cyanCrystalUsed") == 1)
		{
			document.getElementById("darkCrystalUsed-label").innerHTML = "<img src='images/cyanCrystal.png' class='img-30' />";
		}
		if (getItem("greenCrystalUsed") == 1)
		{
			document.getElementById("darkCrystalUsed-label").innerHTML += "<img src='images/greenCrystal.png' class='img-30' />";
		}
		if (getItem("redCrystalUsed") == 1)
		{
			document.getElementById("darkCrystalUsed-label").innerHTML += "<img src='images/redCrystal.png' class='img-30' />";
		}
	}
};
